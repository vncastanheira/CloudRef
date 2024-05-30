//@ts-check
import { Application, Assets, Container, Loader, Rectangle, Sprite } from 'pixi.js';
import { registerUploader } from './image-uploader.js'
import { contextMenuSubscribe } from './context-menu'

// Asynchronous IIFE
(async () => {
    console.log('App start')
    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init({ 
        background: '#1199bb',
        resizeTo: window,
        eventMode: 'passive',
        eventFeatures: {
            click: true,
            globalMove: false,
            move: true,
            wheel: false
        }
     });
    // Then adding the application's canvas to the DOM body.
    document.querySelector('#app')?.appendChild(app.canvas);

    const imagesContainer = new Container();
    app.stage.addChild(imagesContainer);

    const onUploadFile = (file) => {
        const reader = new FileReader();
        reader.addEventListener('load', async (event) => {
            var imgSrc = event.target.result;
            await Assets.load(imgSrc)

            let sprite = Sprite.from(imgSrc);
            sprite.anchor.set(0.5);
            sprite.x = app.screen.width / 2;
            sprite.y = app.screen.height / 2;

            sprite.eventMode = 'static';
            sprite.cursor = 'pointer';
            sprite.on('click', (e) => { alert(`clicked on ${imgSrc}`)});
        
            imagesContainer.addChild(sprite);
        });
        reader.readAsDataURL(file);
    }

    registerUploader(app, onUploadFile);

    contextMenuSubscribe();
})();