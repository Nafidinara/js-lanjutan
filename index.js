// object with constructor
function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Haloo ${this.nama}, selamat makan. Energimu sekarang bertambah ${porsi}`)
    }
}

let alfara = new Mahasiswa('alfara',10);

//dengan class
class cMahasiswa{
    constructor(nama,energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan (porsi) {
        this.energi += porsi;
        return `Haloo ${this.nama}, kamu makan dengan porsi ${porsi}`
    }

    main (jam) {
        this.energi -= jam;
        return `Haloo ${this.nama}, kamu main selama ${jam} jam`
    }
}

let calfara = new cMahasiswa('class alfara',15);

// closure
/*kenapa pake closure :
1. untuk membuat function factories
2. 
*/ 
function init(){
    // let nama = 'alfara';
    function tampilnama(nama){
        console.log(nama);
    }

    return tampilnama;
}

let panggilNama = init();
panggilNama('Alfara');

function salam(waktu){
    return function (nama){
        return `Halo ${nama}, Selamat ${waktu}!`;
    }
}

console.log(salam('siang')('alfara'));

let add = (function (){
    let counter = 0;
    return function (){
        return ++counter;
    }
})();

//variabel counter tidak akan terpengaruh
counter = 100;

console.log(add());
console.log(add());
console.log(add());

// contoh IIFE (Immediately Invoke Function Expression) atau SIAF (Self Invoking Anonymous Function)
(function(){
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
}());

// arrow function
let namaNama = ['alfara','nafidinara','alfara nafi dinara'];

let data = namaNama.map(nama => {
    return {
        nama : nama,
        panjang : nama.length
    }
});

console.table(data);

// penggunaan this pada arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function (){
    // jika menggunakan () => maka akan memanggil window, harus menggunakan function declaration untuk mendapatkan element html nya
    // console.log(this);
    let a = 'size';
    let b = 'caption';

    if(this.classList.contains(a)){
        [a,b] = [b,a];
    }

    this.classList.toggle(a);
 
    setTimeout(() => {
        // kalau pake function declaration akan menghasilkan window, maka harus pakai () =>
        this.classList.toggle(b);
    },600);

});

// filter, map, reduce
const angka = [-1,8,9,1,4,-5,-4,3,2,9];

//mencari angka >= 3 dengan filter
const newAngka = angka.filter(a => a >= 3);
// const newAngka = angka.filter((a) => {
//     return a >= 3;
// });
console.log(newAngka);

// map akan membuat array baru dan tidak mengganti array yang sudah ada
const angkaBaru = angka.map(a => a * 2);
// const angkaBaru = angka.map((a) => {
//     return a * 2;
// });
console.log(angkaBaru);
 
//menggunakan reduce untuk menjumlah elemen dalam array, parameter ketiga nilai awal
const newangka2 = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newangka2);

// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) //8,9,9
    .map(a => a * 3) //24,27,27
    .reduce((acc,cur) => acc + cur); //78

    console.log(hasil);

//implementasi real case
const videos = Array.from(document.querySelectorAll('[data-duration]'));
const jumlahVideo = videos.filter(video => video.textContent.includes('JS LANJUTAN')).length;
let jsLanjutan = videos.filter(video => video.textContent.includes('JS LANJUTAN'))
    .map(item => item.dataset.duration)
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })
    .reduce((total,detik) => total + detik);

    const jam = Math.floor(jsLanjutan / 3600);
    jsLanjutan = jsLanjutan - jam * 3600;
    const menit = Math.floor(jsLanjutan / 60);
    const detik = jsLanjutan - menit * 60;

    const durasi = document.querySelector('.durasi-video');
    durasi.textContent = `${jam} Jam ${menit} Menit ${detik} Detik`;

    const jumlah = document.querySelector('.jml-video');
    jumlah.textContent = `${jumlahVideo} Video`;

    // Destructing variable
    const perkenalan = ['halo','nama','saya','alfara'];
    const [a,b,c,d] = perkenalan;
    console.log(a);

    //rest parameter
    const [x, ...values] = [1,2,3,4,5];
    console.log(values);

    // destructuring function
    function kalkulasi(a,b){
        return {
            tambah : a + b,
            kurang : a - b,
            kali : a * b,
            bagi : a / b
        }
    }

    const {bagi,kurang,tambah,kali} = kalkulasi(2,3);

    console.log(tambah);

      //destructuring arguments
    const mahasiswa = {
        nama : 'alfara',
        umur : 19,
        email : 'nafidinara@gmail.com',
        nilai : {
            uas : 88,
            uts : 98,
            tugas : 58
        }
    }

    function cetakMahasiswa({nama,umur, nilai : {uas,tugas,uts}}){
        return `Halo, nama saya ${nama}, umur saya ${umur} tahun, dan nilai uas saya adalah : ${uas}`;
    }

    console.log(cetakMahasiswa(mahasiswa));


    // for of looping
    const orangs = ['alfara','nafi','dinara'];
    for(const [i,n] of orangs.entries()){
        console.log(`siswa bernama ${n} ada di urutan ke : ${i + 1}`);
    }

    //nodelist looping
    const liItems = document.querySelectorAll('.item');
    // console.log(liItems);
    for(i of liItems){
        console.log(i.innerHTML);
    }
    // kalo for of untuk mengambil isi array dan iterable lain. sedangkan for in untuk mengambil property dan enumerable


