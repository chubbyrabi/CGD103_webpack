// import $ from "jquery";
import gsap from "gsap";
import './css/style.css';
import './css/header.css';
import './css/footer.css';
import './sass/style.scss';


console.log('start');

// jquery
$('body').css('background-color' , '#333');

// gsap
gsap.set('.box' , {
     x : 300,
     y: 400


})
gsap.to('.box' , {
     //x: 300,
     //y: 700,
     duration : 2,
     rotation : 360,
     repeat: -1,
     scale: 3
})
