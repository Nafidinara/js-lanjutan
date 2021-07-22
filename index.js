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
