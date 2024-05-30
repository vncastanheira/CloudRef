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
        background: '#3b3b3b',
        resizeTo: window,
        eventMode: 'passive',
        eventFeatures: {
            click: true,
            globalMove: false,
            move: true,
            wheel: true
        }
     });
    // Then adding the application's canvas to the DOM body.
    document.querySelector('#app')?.appendChild(app.canvas);

    const imagesContainer = new Container();
    app.stage.addChild(imagesContainer);
    app.canvas.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    app.canvas.addEventListener('drop', (e) => {
        e.preventDefault();
        console.log('Drop')
        console.log(e)

        const imgFile = e.dataTransfer?.files[0];
        console.log(imgFile);

        onUploadFile(imgFile, e.screenX, e.screenY);
    })

    const onUploadFile = (file, x, y) => {
        const reader = new FileReader();
        reader.addEventListener('load', async (event) => {
            var imgSrc = event.target.result;
            await Assets.load(imgSrc)

            let sprite = Sprite.from(imgSrc);
            sprite.anchor.set(0.5);
            sprite.x = x;
            sprite.y = y;

            sprite.eventMode = 'static';
            sprite.cursor = 'pointer';
            sprite.on('click', (e) => { 
                console.log(`Clicked on ${file.name}`)
            });
        
            imagesContainer.addChild(sprite);
        });
        reader.readAsDataURL(file);
    }

    contextMenuSubscribe();
})();