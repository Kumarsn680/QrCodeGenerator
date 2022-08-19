const form = document.getElementById("generateform");
const qr = document.getElementById("qrcode");
const spinner = document.getElementById('spinner')

const onGenerateSubmit = (e) =>{
    e.preventDefault();
    clearUI(qr);
    const url = document.getElementById('url').value
    const size = document.getElementById('size').value

    if(url == ''){
        alert('Please enter a valid URL')
    }else{
        showSpinner()
        setTimeout(() => {
            hideSpinner()
            generateQr(url,size)
            setTimeout(() => {
              const saveUrl = qr.querySelector("img").src;
              console.log(saveUrl);
              generateButton(saveUrl);
            }, 50);
        }, 1000);
    }
}

const clearUI = (element) =>{
    element.innerHTML = ''
    const dowloadButton = document.getElementById('download')
    if(dowloadButton){
        dowloadButton.remove()
    }
}
const generateQr = (url,size) =>{
var qrcode = new QRCode(qr, {
  text: url,
  width: size,
  height: size,
  colorDark: "#000000",
  colorLight: "#ffffff",
  correctLevel: QRCode.CorrectLevel.H,
});

}


const hideSpinner = () =>{
spinner.style.display = 'none'
}

hideSpinner();

const showSpinner = () => {
spinner.style.display = 'block'
};


const generateButton = (saveUrl) =>{
    const link = document.createElement('a')
    link.id = 'download'
    link.classList = 'bg-red-500 text-white p-2 rounded m-2 w-1/2 text-center'
    link.innerHTML = 'Save QR Code'
    link.href = saveUrl
    link.download = 'qrcode.png'
    console.log(saveUrl)
    document.getElementById('generator').appendChild(link)

}

form.addEventListener('submit', onGenerateSubmit )