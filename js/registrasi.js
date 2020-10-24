function vjadi(x){
    var jadi = x;
    console.log(jadi);

    document.daftar.menjadi.value = jadi;

    var hilang = document.getElementById('pilihan');

    hilang.parentNode.removeChild(hilang);
}