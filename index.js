const uploadArea = document.querySelector('#uploadArea');
uploadArea.addEventListener("click", (e) => {
    e.preventDefault();
})
// upload here
uploadArea.addEventListener("change", ({target}) => {
    console.log('OnChange')
    console.log(target.files)
})