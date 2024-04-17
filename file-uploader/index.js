const canvasImg = document.querySelector("#imageCanvas");

let tempImg = localStorage.getItem("img");
if(tempImg){
    canvasImg.src = tempImg;
}


const uploadArea = document.querySelector('#uploadArea');
uploadArea.addEventListener("click", (e) => {
    e.preventDefault();
})
// upload here
uploadArea.addEventListener("change", ({target}) => {
    console.log('OnChange')
    const file = target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        var imgSrc = event.target.result;
        canvasImg.src = imgSrc;
        // console.log(event.target.result)
        localStorage.setItem("img", imgSrc);
        console.log("Ok")
      });
    reader.readAsDataURL(file);
})

function clearImage(){
    localStorage.clear();
    canvasImg.src = ""
}