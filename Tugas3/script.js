let changeText = document.querySelector('#namabarang');
changeText.innerText = 'Teks ini telah diubah menggunakan script js';


let newElement = document.createElement('p');
newElement.innerHTML = 'Element telah ditambahkan menggunakan script js';
console.log(newElement);
let newClass = document.querySelector('#desc');
newClass.appendChild(newElement);


function changeBG() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}