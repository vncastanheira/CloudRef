//@ts-check
const DB_NAME = "CloudRefDb";

/**
 * @param {function} onUpload
 */

export const registerUploader = (app, onUpload) => {
    // Then adding the application's canvas to the DOM body.
    const formWrapper = document.querySelector("#form-wrapper");
    formWrapper.appendChild(app.canvas);

    // Set upload area prevent click
    const uploadArea = document.querySelector('#uploadArea');
    uploadArea.addEventListener("click", (e) => {
        e.preventDefault();
    })

    // upload here
    uploadArea.addEventListener("change", ({target}) => {
        const file = target?.files[0];
        onUpload(file)
        // const reader = new FileReader();
        // reader.addEventListener('load', (event) => {
        //     var imgSrc = event.target.result;
        //     canvasImg.src = imgSrc;
        //     // console.log(event.target.result)
        //     localStorage.setItem("img", imgSrc);
        //     console.log("Ok")
        // });
        // reader.readAsDataURL(file);
    })
}


const createDb = () => {
    // Let us open our database
    const request = window.indexedDB.open(DB_NAME, 3);
    request.onerror = (event) => {
        // Do something with request.errorCode!
      };
      request.onsuccess = (event) => {
        // Do something with request.result!
      };      
}