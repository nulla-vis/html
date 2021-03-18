// Event saat Link NavBar diklik

$('.page-scroll').on('click', function(event) {
    // ambil isi href
    const tujuan = $(this).attr('href');
    
    // tangkap element yang bersangkutan
    var elementTujuan = $(tujuan);

    // console.log(elementTujuan.offset().top); // untuk mengecek jarak dari elementnya (section-nya) ke paling atas halaman web
    // console.log($('html,body').scrollTop());
    // $("html,body").scrollTop(elementTujuan.offset().top);

    // pindahkan scroll
    $("html,body").animate({ //animate biar perpindahannya tidak instant
       scrollTop: elementTujuan.offset().top - 55 //mau menganimasikan sampai mana?
    },1250, 'easeInOutExpo') //parameter waktu, dan cara animasi (default 'swing')

    
    event.preventDefault();
})
