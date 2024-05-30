//@ts-check
const DB_NAME = "CloudRefDb";

/**
 * @param {function} onUpload
 */

export const registerUploader = (app, onUpload) => {
    // Set upload area prevent click
    const uploadArea = document.querySelector('#uploadArea');
    uploadArea.addEventListener("click", (e) => {
        app.stage.dispatchEvent(new PointerEvent('click'));
        e.preventDefault();
    })

    // upload here
    uploadArea.addEventListener("change", ({target}) => {
        const file = target?.files[0];
        onUpload(file)
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