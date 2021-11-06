//header-button

var btn = document.querySelectorAll('.header__middle-btn');
var drop = document.querySelectorAll('.drop');
btn[0].addEventListener('click',function(e){
    e.stopPropagation();
    drop[0].classList.toggle("header__middle-box")
    drop[1].classList.remove("header__middle-box")
    btn[0].classList.toggle("drop_color")
    btn[1].classList.remove("drop_color")
})
btn[1].addEventListener('click',function(e){
    e.stopPropagation();
    drop[1].classList.toggle("header__middle-box")
    drop[0].classList.remove("header__middle-box")
    btn[1].classList.toggle("drop_color")
    btn[0].classList.remove("drop_color")

})
document.addEventListener('click',e =>{
    drop[0].classList.remove("header__middle-box");
    drop[1].classList.remove("header__middle-box");
    btn[0].classList.remove("drop_color")
    btn[1].classList.remove("drop_color")
})

var extend = document.querySelectorAll('.catory__cate-extend');
var exlist = document.querySelectorAll('.catory__cate-exlist');
var cateLink = document.querySelectorAll('.catory__cate-link'); 
let check = true;
let check1 = true;
let check2 = true;

//extend category
for(let i = 0; i< extend.length; i++){
    extend[i].addEventListener('click',(e)=>{
        if(i===0){
            if(check){
                cateLink[i].style.color="var(--orange-color)";
                cateLink[1].style.color="var(--text-color)";
                cateLink[2].style.color="var(--text-color)";
                extend[1].textContent = "+";
                extend[2].textContent = "+";
                extend[i].textContent = "--";
                exlist[1].style.maxHeight = "0";
                exlist[1].style.transition = "all 0.5s ease-in-out";
                exlist[2].style.maxHeight = "0";
                exlist[2].style.transition = "all 0.5s ease-in-out";
                exlist[i].style.maxHeight = "400px";
                exlist[i].style.transition = "all 0.5s ease-in-out";
                check = false;
                check1 = true;
                check2 = true;
            }
            else if(!check){
                cateLink[i].style.color="var(--text-color)";
                extend[i].textContent = "+";
                exlist[i].style.maxHeight = "0";
                exlist[i].style.transition = "all 0.5s ease-in-out";
                check = true;
            }
        }
        else if (i===1){
            if(check1){
                cateLink[i].style.color="var(--orange-color)";
                cateLink[0].style.color="var(--text-color)";
                cateLink[2].style.color="var(--text-color)";
                extend[2].textContent = "+";
                extend[0].textContent = "+";
                extend[i].textContent = "--";
                exlist[0].style.maxHeight = "0";
                exlist[2].style.maxHeight = "0";
                exlist[0].style.transition = "all 0.5s ease-in-out";
                exlist[2].style.transition = "all 0.5s ease-in-out";
                exlist[i].style.maxHeight = "400px";
                exlist[i].style.transition = "all 0.5s ease-in-out";
                check1 = false;
                check = true;
                check2 = true;
            }
            else if(!check1){
                cateLink[i].style.color="var(--text-color)";
                
                extend[i].textContent = "+";
                exlist[i].style.maxHeight = "0";
                exlist[i].style.transition = "all 0.5s ease-in-out";
                check1 = true;
            }
        } 
        else if (i===2){
            if(check2){
                cateLink[i].style.color="var(--orange-color)";
                cateLink[0].style.color="var(--text-color)";
                cateLink[1].style.color="var(--text-color)";
                extend[i].textContent = "--";
                extend[1].textContent = "+";
                extend[0].textContent = "+";
                exlist[0].style.maxHeight = "0";
                exlist[1].style.maxHeight = "0";
                exlist[0].style.transition = "all 0.5s ease-in-out";
                exlist[1].style.transition = "all 0.5s ease-in-out";
                exlist[i].style.maxHeight = "400px";
                exlist[i].style.transition = "all 0.5s ease-in-out";
                check2 = false;
                check = true;
                check1 = true;
            }
            else if(!check2){
                cateLink[i].style.color="var(--text-color)";                
                extend[i].textContent = "+";
                exlist[i].style.maxHeight = "0";
                exlist[i].style.transition = "all 0.5s ease-in-out";
                check2 = true;
            }
        }
    })
}

//slider range
var inputLeft = document.querySelector('.catory__price input:nth-child(1)');
var inputRight = document.querySelector('.catory__price input:nth-child(2)');

var range = document.querySelector('.catory__price-range');
var thumbLeft = document.querySelector('.catory__price-thumb.left');
var thumbRight = document.querySelector('.catory__price-thumb.right');
inputLeft.addEventListener('input',e=>{
    let min = parseInt(inputLeft.min), 
        max = parseInt(inputLeft.max);
        inputLeft.value = Math.min(parseInt(inputLeft.value),parseInt(inputRight.value) - 100); 
        pripre.textContent = inputLeft.value;
        let numb = 70 - parseInt(inputLeft.value) / 2.85714285714286;
        console.log(numb); 
        present.style.left = numb +'px';
        let percent = (inputLeft.value - min) / (max - min) * 100
            thumbLeft.style.left = percent +"%";
            range.style.left = percent +"%";   
})
inputRight.addEventListener('input',e=>{
    let min = parseInt(inputRight.min), 
        max = parseInt(inputRight.max);
        inputRight.value = Math.max(parseInt(inputRight.value),parseInt(inputLeft.value) + 100); 
        pripre1.textContent = inputRight.value;
        let percent = (inputRight.value - min) / (max - min) * 100
            thumbRight.style.right =100 - percent+"%";    
            range.style.right = 100 - percent+"%";  
})
var present = document.querySelector('.catory__price-present');
var pripre = document.querySelector('.catory__price-present span:nth-child(1)');
var pripre1 = document.querySelector('.catory__price-present span:nth-child(3)')




//Tab content

var shirt,blazers,sunglass,kids,polo;
shirt = document.querySelector('.catory__right-shirt');
blazers = document.querySelector('.catory__right-blazers');
sunglass = document.querySelector('.catory__right-sunglass');
kids = document.querySelector('.catory__right-kids');
polo = document.querySelector('.catory__right-polo');

var tab = document.querySelectorAll('.catory__right-nav--item .catory__right-nav--link');

for(let i=0;i<tab.length;i++){
    tab[i].addEventListener('click', e=>{
        e.preventDefault();
        for(let j = 0; j<tab.length;j++){
            tab[j].classList.remove('active-nav');
        }
        tab[i].classList.add('active-nav');
        if(i==0){
            shirt.style.display = "flex";
            shirt.style.transition = "all 0.2s";
            blazers.style.display = "none";
            sunglass.style.display = "none";
            kids.style.display = "none";
            polo.style.display = "none";
        }
        else if (i===1){
            shirt.style.display = "none";
            blazers.style.display = "flex";
            sunglass.style.display = "none";
            kids.style.display = "none";
            polo.style.display = "none";

        }
        else if (i===2){
            shirt.style.display = "none";
            blazers.style.display = "none";
            sunglass.style.display = "flex";
            kids.style.display = "none";
            polo.style.display = "none";
        }
        else if (i===3){
            shirt.style.display = "none";
            blazers.style.display = "none";
            sunglass.style.display = "none";
            kids.style.display = "flex";
            polo.style.display = "none";
        }
        else if (i===4){
            shirt.style.display = "none";
            blazers.style.display = "none";
            sunglass.style.display = "none";
            kids.style.display = "none";
            polo.style.display = "flex";
        }
    })
}
//slider recomended
var btnLeft = document.querySelector('.catory__right-recomen--left');
var btnRight = document.querySelector('.catory__right-recomen--right');
var conTrol1 = document.querySelector('.catory__right-recomen--control1');
var conTrol2 = document.querySelector('.catory__right-recomen--control2');
var conCount = 0;
btnLeft.addEventListener('click', e=>{
    let conWidth = conTrol1.getBoundingClientRect();
    e.preventDefault();
    if(conCount === 0 ){
        conTrol1.style.transform = 'translateX(-'+conWidth.width+'px)';
        conTrol2.style.transition ="none";
        conTrol2.style.transform = 'translateX(0)';
        setTimeout(() => {
        conTrol2.style.transition ="transform 0.5s";
        conTrol2.style.transform = 'translateX(-'+conWidth.width+'px)';
        }, 1);
        conCount--;
        console.log(conCount);
    }
    else if(conCount === -1){
        conCount = 0;
        console.log(conCount);
        conTrol1.style.transition ="none";
        conTrol1.style.transform = 'translateX('+conWidth.width+'px)';
        setTimeout(() => {
        conTrol1.style.transition ="transform 0.5s";
        conTrol1.style.transform = 'translateX(0)';
        }, 1);
        conTrol2.style.transform = 'translateX(-'+conWidth.width*2+'px)';
    }
    else if(conCount === 1){
        conTrol1.style.transform = 'translateX(0)';
        conTrol2.style.transform = 'translateX(-'+conWidth.width*2+'px)';
        // setTimeout(() => {
        // conTrol1.style.transition ="transform 0.5s";
        // conTrol1.style.transform = 'translateX(0)';
        // }, 1);
        conCount=0;
        console.log(conCount);
    }
    // if(conTrol1.style.transform === 'translateX(-'+conWidth.width+'px)'){
    //     conTrol1.transition = 'none';
    //     conTrol1.style.transform = 'translateX(-'+conWidth.width+'px)';
    //     conTrol2.style.transform = 'translateX(-'+conWidth.width+'px)';
    
    // }
})
btnRight.addEventListener('click', e=>{
    e.preventDefault();
    let conWidth = conTrol1.getBoundingClientRect();
    if(conCount === 0 ){
        conTrol1.style.transform = 'translateX('+conWidth.width+'px)';
        conTrol2.style.transition ="none";
        conTrol2.style.transform = 'translateX(-'+conWidth.width*2+'px)';
        setTimeout(() => {
        conTrol2.style.transition ="transform 0.5s";
        conTrol2.style.transform = 'translateX(-'+conWidth.width+'px)';
        }, 1);
        conCount++;
        console.log(conCount);
    }
    else if(conCount === 1){
        conTrol2.style.transform = 'translateX(0)';
        conTrol1.style.transition ="none";
        conTrol1.style.transform = 'translateX(-'+conWidth.width+'px)';
        setTimeout(() => {
        conTrol1.style.transition ="transform 0.5s";
        conTrol1.style.transform = 'translateX(0)';
        }, 1);
        conCount=0;
        console.log(conCount);
    }
    else if(conCount === -1){
        conTrol2.style.transform = 'translateX(0)';
        conTrol1.style.transform = 'translateX(0)';
        // setTimeout(() => {
        // conTrol1.style.transition ="transform 0.5s";
        // conTrol1.style.transform = 'translateX(0)';
        // }, 1);
        conCount=0;
        console.log(conCount);
    }
})