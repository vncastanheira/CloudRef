//@ts-check
const DB_NAME = "CloudRefDb";

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