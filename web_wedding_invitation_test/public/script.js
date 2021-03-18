const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators : false,
    height : 660,
    interval : 150,
    interval : 2500
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

whatis=(elem)=>{
    console.log(elem);
}

const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy,{
    scrollOffset : 50,
});