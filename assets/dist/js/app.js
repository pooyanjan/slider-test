const btn = document.querySelector('#btn')
/*const btn1 =document.querySelector('#btn1')*/
const ul =document.querySelector('ul')

if(btn) btn.addEventListener( 'click' , e )
if(btn) btn.addEventListener( 'click' , de )

/*if(btn1) btn1.addEventListener( 'click' , de )*/


function e() {
  ul.classList.add('active')
 /* btn1.classList.add('active')*/
  btn.classList.remove('active')
  Swal.fire({
    icon: 'success',
    title: 'اضافه شد',
    text: 'امیدواریم از خرید لذت ببرید!',
    color: '#fff',
    background:"cyan"
    /*footer: '<a href="">Why do I have this issue?</a>'*/
  })
}
function de() {
  ul.classList.remove('active')
  btn.classList.add('active')
  /*btn1.classList.remove('active')*/

}
/*const button = document.querySelector('#btn')
const overlay =document.querySelector('.overlay')
const ul =document.querySelector('ul')

if(button) button.addEventListener( 'click' , e )
if(overlay) overlay.addEventListener( 'click' , de )

function e() {
  ul.classList.add('active')
  overlay.classList.add('active')
}
function de() {
  ul.classList.remove('active')
  overlay.classList.remove('active')
}*/




/*** go up button ***/
const btnUp = document.querySelector('#up')
if(btnUp) btnUp.addEventListener( 'click' , goUp )

function goUp() {
  window.scrollTo(0,0)
}

/*** go to view ***/
const btnview = document.querySelector('#view')
if(btnview) btnview.addEventListener( 'click' , goview )

function goview() {
  const img = document.querySelector('.banner')
  img.scrollIntoView()
}


/** slider **/
const swiper = new Swiper('.swiper', {
  //direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
 
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick:true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



const swiper2 = new Swiper('.swiper2', {
  //direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 8000,
    },
    
    slidesPerView: 3,
    spaceBetween: 0,
    
  
    /*multipleActiveThumbs:true,*/
  // If we need pagination
  pagination: {
    el: '.swiper-pagination2',
    clickable:true,
 
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick:true
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar2',
  },
});






