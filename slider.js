var radio = document.querySelectorAll('.slider__circle i');
var next = document.querySelector('.slider__next i');
var pre = document.querySelector('.slider__pre i');
var slider = document.querySelector('.slider__images');
var images = document.querySelectorAll('.slider__images');
var element = document.querySelectorAll('.slider__element');
//slider
if(radio.length > 0){
    for(let i=0; i < radio.length; i++ ){
        radio[i].addEventListener('click',function(e){
            e.stopPropagation();
            if(document.querySelector('.active__circle') !==null){
                document.querySelector('.active__circle').classList.remove('active__circle');
                radio[i].classList.add('active__circle');
            }
        })   
    }
}
radio[0].addEventListener('click', e=>{
let x = document.querySelector('.slider__element').getBoundingClientRect(); 

    element[0].style.transform='translateX(0)'
    element[1].style.transform='translateX(0)'
    element[2].style.transform='translateX(0)'
    dem = 0;
})   
radio[1].addEventListener('click', e=>{
let x = document.querySelector('.slider__element').getBoundingClientRect(); 

    element[0].style.transform='translateX(-'+x.width+'px)'
    element[1].style.transform='translateX(-'+x.width+'px)'
    element[2].style.transform='translateX(-'+x.width+'px)'
    dem = 1;
})
radio[2].addEventListener('click', e=>{
let x = document.querySelector('.slider__element').getBoundingClientRect(); 

    element[0].style.transform='translateX(-'+x.width*2+'px)'
    element[1].style.transform='translateX(-'+x.width*2+'px)'
    element[2].style.transform='translateX(-'+x.width*2+'px)'
    dem = 2;
}) 


let dem = 0;
var checkRadio = 0;

pre.addEventListener('click', e =>{
let x = document.querySelector('.slider__element').getBoundingClientRect(); 
    e.stopPropagation();
    if(dem===1){
        element[0].style.transform='translateX('+ 0 + 'px)';        
        element[1].style.transform='translateX('+ 0 + 'px)';
        element[2].style.transform='translateX('+ 0 + 'px)';
        dem--;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[0].classList.add('active__circle');
        }
        
    }
    else if(dem===2){
        element[0].style.transform='translateX(-'+ x.width + 'px)';        
        element[1].style.transform='translateX(-'+ x.width + 'px)';
        element[2].style.transform='translateX(-'+ x.width + 'px)';
        dem--;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[1].classList.add('active__circle');
        }
    }
    else if(dem===0){
        element[0].style.transform='translateX('+ x.width  + 'px)';
        element[1].style.transition='none';
        element[1].style.transform='translateX(-'+ x.width*3 + 'px)';
        element[2].style.transition='none';
        element[2].style.transform='translateX(-'+ x.width*3 + 'px)';
        console.log(dem);
        setTimeout(() => {
            element[1].style.transition='transform 0.3s ease-in-out';
            element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        }, 1);
        setTimeout(() => {
            element[2].style.transition='transform 0.3s ease-in-out';
            element[2].style.transform='translateX(-'+ x.width*2 + 'px)';
        }, 1);
        dem--;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[2].classList.add('active__circle');
        }

    }
    else if(dem === -1){
        element[0].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[0].style.transition='none';
        setTimeout(() => {
            element[0].style.transform='translateX(-'+ x.width + 'px)';
            element[0].style.transition='transform 0.3s ease-in-out';
            
        }, 1);
        element[1].style.transform='translateX(-'+ x.width + 'px)';
        element[2].style.transform='translateX(-'+ x.width + 'px)';
        dem--;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[1].classList.add('active__circle');
        }
    }
    else if(dem === -2){
        element[0].style.transform='translateX('+ 0 + 'px)';        
        element[1].style.transform='translateX('+ 0 + 'px)';
        element[2].style.transform='translateX('+ 0 + 'px)';
        dem=0;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[0].classList.add('active__circle');
        }
    }
})
next.addEventListener('click', e =>{
let x = document.querySelector('.slider__element').getBoundingClientRect(); 

    e.stopPropagation();
    if(dem===0){
        element[0].style.transform='translateX(-'+ x.width + 'px)';        
        element[1].style.transform='translateX(-'+ x.width + 'px)';
        element[2].style.transition='none';
        element[2].style.transform='translateX('+ 0 + 'px)';
        setTimeout(() => {
            element[2].style.transition='transform 0.3s ease-in-out';
            element[2].style.transform='translateX(-'+ x.width + 'px)';
        }, 1);
        element[1].style.transition='none';
        element[1].style.transform='translateX('+ 0 + 'px)';
        setTimeout(() => {
            element[1].style.transition='transform 0.3s ease-in-out';
            element[1].style.transform='translateX(-'+ x.width + 'px)';
        }, 1);
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[1].classList.add('active__circle');
        }
    }
    else if(dem===1){
        element[0].style.transform='translateX(-'+ x.width*2 + 'px)';        
        element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[2].style.transform='translateX(-'+ x.width*2 + 'px)';
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[2].classList.add('active__circle');
        }
    }
    else if(dem===2){
        element[2].style.transform='translateX(-'+ x.width*3  + 'px)';
        element[0].style.transform='translateX('+ x.width  + 'px)';
        element[0].style.transition='none';
        element[1].style.transform='translateX('+ x.width*2 + 'px)';
        element[1].style.transition='none';
        setTimeout(() => {
            element[0].style.transition='transform 0.3s ease-in-out';
            element[0].style.transform='translateX('+ 0 + 'px)';
        }, 1);
        setTimeout(() => {
            element[1].style.transition='transform 0.3s ease-in-out';
            element[1].style.transform='translateX('+ 0 + 'px)';
        }, 1);
        dem=0;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[0].classList.add('active__circle');
        }
    }
    else if(dem===-1){
        element[0].style.transform='translateX('+ 0 + 'px)';        
        element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[2].style.transform='translateX(-'+ x.width*4+ 'px)';
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[0].classList.add('active__circle');
        }
    }
    else if(dem===-2){
        element[0].style.transform='translateX('+ x.width*2 + 'px)';
        element[0].style.transition='none';
        setTimeout(() => {
            element[0].style.transition='transform 0.3s ease-in-out';
            element[0].style.transform='translateX('+ x.width + 'px)';
        }, 1);
        element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[2].style.transform='translateX(-'+ x.width*2 + 'px)';
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[2].classList.add('active__circle');
        }
    }
})
setInterval(() => {
    let x = document.querySelector('.slider__element').getBoundingClientRect(); 
    if(dem===0){
        element[0].style.transform='translateX(-'+ x.width + 'px)';        
        element[1].style.transform='translateX(-'+ x.width + 'px)';
        element[2].style.transition='none';
        element[2].style.transform='translateX('+ 0 + 'px)';
        setTimeout(() => {
            element[2].style.transition='transform 0.3s ease-in-out';
            element[2].style.transform='translateX(-'+ x.width + 'px)';
        }, 20);
        element[1].style.transition='none';
        element[1].style.transform='translateX('+ 0 + 'px)';
        setTimeout(() => {
            element[1].style.transition='transform 0.3s ease-in-out';
            element[1].style.transform='translateX(-'+ x.width + 'px)';
        }, 20);
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[1].classList.add('active__circle');
        }
    }
    else if(dem===1){
        element[0].style.transform='translateX(-'+ x.width*2 + 'px)';        
        element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[2].style.transform='translateX(-'+ x.width*2 + 'px)';
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[2].classList.add('active__circle');
        }
    }
    else if(dem===2){
        element[2].style.transform='translateX(-'+ x.width*3  + 'px)';
        element[0].style.transform='translateX('+ x.width  + 'px)';
        element[0].style.transition='none';
        element[1].style.transform='translateX('+ x.width*2 + 'px)';
        element[1].style.transition='none';
        setTimeout(() => {
            element[0].style.transition='transform 0.3s ease-in-out';
            element[0].style.transform='translateX('+ 0 + 'px)';
        }, 1);
        setTimeout(() => {
            element[1].style.transition='transform 0.3s ease-in-out';
            element[1].style.transform='translateX('+ 0 + 'px)';
        }, 20);
        dem=0;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[0].classList.add('active__circle');
        }
    }
    else if(dem===-1){
        element[0].style.transform='translateX('+ 0 + 'px)';        
        element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[2].style.transform='translateX(-'+ x.width*4+ 'px)';
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[0].classList.add('active__circle');
        }
    }
    else if(dem===-2){
        element[0].style.transform='translateX('+ x.width*2 + 'px)';
        element[0].style.transition='none';
        setTimeout(() => {
            element[0].style.transition='transform 0.3s ease-in-out';
            element[0].style.transform='translateX('+ x.width + 'px)';
        }, 20);
        element[1].style.transform='translateX(-'+ x.width*2 + 'px)';
        element[2].style.transform='translateX(-'+ x.width*2 + 'px)';
        dem++;
        if(document.querySelector('.active__circle') !==null){
            document.querySelector('.active__circle').classList.remove('active__circle');
            radio[2].classList.add('active__circle');
        }
    }
}, 5000);

//responsive menu
var h = 0;
var hide = document.querySelector('.header__bottom-menu--hide');
var menuRes = document.querySelector('.header__bottom-menu--list');
hide.addEventListener('click',e=>{
    e.stopPropagation();
    if(h===0){
        menuRes.style.height = "400px";
        menuRes.style.transition="height .4s ease-in-out";
        h++;
        console.log(h);
    }
    else if(h===1){
        menuRes.style.height = "0";
        h--;
        console.log(h);
    }
})
var gohome = document.querySelector('.gohome');
var heightTop = document.querySelector('.header').getBoundingClientRect();
var heightSlider = document.querySelector('.slider').getBoundingClientRect();
window.addEventListener('scroll',e=>{
    let scroll = parseInt(this.scrollY);
    console.log(scroll)

if(scroll > ((parseInt(heightSlider.height) + parseInt(heightTop.height))* 2 / 3) ){
        gohome.style.opacity = "1";
        console.log('haha');
    }
    else {
        gohome.style.opacity = "0";

    }
})
gohome.addEventListener('click',e=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
})