//@ts-check
import { Application, Assets, Loader, Sprite } from 'pixi.js';
import { registerUploader } from './image-uploader.mjs'

// Asynchronous IIFE
(async () => {
    console.log('App start')
    // Create a PixiJS application.
    const app = new Application();

    // Intialize the application.
    await app.init({ background: '#1199bb', resizeTo: window });

    const onUploadFile = (file) => {
        const reader = new FileReader();
        reader.addEventListener('load', async (event) => {
            var imgSrc = event.target.result;
            await Assets.load(imgSrc)
            let sprite = Sprite.from(imgSrc);
            app.stage.addChild(sprite);
        });
        reader.readAsDataURL(file);
    }

    registerUploader(app, onUploadFile);

    // await Assets.load('https://pixijs.com/assets/bunny.png')
    // let sprite = Sprite.from('https://pixijs.com/assets/bunny.png');
    // app.stage.addChild(sprite);
})();