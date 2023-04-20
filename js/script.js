/*========================================================================================*/
/*RMIT University Vietnam
  Course: COSC2430 Web Programming
  Semester: 2023A
  Assessment: Assignment 1
  Author: Your names (e.g. Nguyen Van Minh)
  ID: Your student ids (e.g. 1234567)
  Acknowledgement:
  https://swiperjs.com/demos
  https://codesandbox.io/p/sandbox/mvjbdm?file=%2Findex.html&selection=%5B%7B"endColumn"%3A9%2C"endLineNumber"%3A78%2C"startColumn"%3A7%2C"startLineNumber"%3A75%7D%5D
  https://codesandbox.io/p/sandbox/fojg89?file=%2Findex.html
  https://katedarroch.com/
  https://cdnjs.com/libraries/font-awesome
  https://www.freecodecamp.org/news/how-to-make-a-landing-page-with-html-css-and-javascript/#theprojectfolderstructure
  https://www.freecodecamp.org/news/how-to-make-a-landing-page-with-html-css-and-javascript/#howtomakethescrolltotopbutton
  https://stackoverflow.com/questions/31575496/prevent-negative-inputs-in-form-input-type-number
  https://stackoverflow.com/questions/66991577/how-do-i-make-a-gif-responsive
  https://alvarotrigo.com/blog/hamburger-menu-css-responsive/#:~:text=Making%20the%20Hamburger%20Menu%20Responsive%20with%20CSS&text=And%20we%20also%20need%20to,will%20be%20hidden%20by%20default.
*/
/*=======================================================================================*/

//search section
/*This line of code selects an element in the DOM with the class name 'search-form' and assigns it to a variable named 'searchForm'. The 'document.querySelector()' method is used to select the first element that matches the specified CSS selector.*/
searchForm=document.querySelector('.search-form')

/*This line of code selects an element in the DOM with the ID 'search-btn', and sets up an event listener for the 'click' event on that element. When the element with ID 'search-btn' is clicked, the code inside the arrow function (callback function) will be executed.*/
document.querySelector('#search-btn').onclick = () =>{
    /*This line of code toggles the presence of the CSS class active on the element referred to by the searchForm variable. If the element has the class active, it will be removed, and if it doesn't have it, it will be added.*/
    searchForm.classList.toggle('active');
}

//login section
/*This line of code selects the first element in the DOM with the class name 'login-form-container' and assigns it to a variable named 'loginForm' */
let loginForm = document.querySelector('.login-form-container');

/*This line of code sets up a click event listener on an element with the ID login-btn. When this element is clicked, the code inside the arrow function (callback function) will be executed */
document.querySelector('#login-btn').onclick = () =>{
    /*This line of code toggles whether the CSS class is present on the element that the variable 'loginForm' refers to. The class will be added if the element doesn't already have it, and removed if it does. When the element with ID 'login-btn' is clicked, this may be used to display or hide a login form or apply any other required styling or behavior to the element with the class name login-form-container */
    loginForm.classList.toggle('active');
}
/*This line of code sets up a click event listener on an element with the ID close-login-btn. When this element is clicked, the code inside the arrow function (callback function) will be executed */
document.querySelector('#close-login-btn').onclick = () =>{
    /*This line of code remove whether the CSS class is present on the element that the variable 'loginForm' refers to. The class will be added if the element doesn't already have it, and removed if it does. When the element with ID 'login-btn' is clicked, this may be used to display or hide a login form or apply any other required styling or behavior to the element with the class name login-form-container */
    loginForm.classList.remove('active');
}

//contact section
/*This line of code selects the first element in the DOM with the class name 'contact-form-container' and assigns it to a variable named 'contactForm' */
let contactForm = document.querySelector('.contact-form-container');

/*This line of code sets up a click event listener on an element with the ID contact-btn. When this element is clicked, the code inside the arrow function (callback function) will be executed */
document.querySelector('#contact-btn').onclick = () =>{
    /*This line of code toggles whether the CSS class is present on the element that the variable 'contactForm' refers to. The class will be added if the element doesn't already have it, and removed if it does. When the element with ID 'contact-btn' is clicked, this may be used to display or hide a contact form or apply any other required styling or behavior to the element with the class name contact-form-container */
    contactForm.classList.toggle('active');
}
/*This line of code sets up a click event listener on an element with the ID close-contact-btn. When this element is clicked, the code inside the arrow function (callback function) will be executed */
document.querySelector('#close-contact-btn').onclick = () =>{
    /*This line of code remove whether the CSS class is present on the element that the variable 'contactForm' refers to. The class will be added if the element doesn't already have it, and removed if it does. When the element with ID 'contact-btn' is clicked, this may be used to display or hide a contact form or apply any other required styling or behavior to the element with the class name contact-form-container */
    contactForm.classList.remove('active');
}


/*setting up an event listener that triggers whenever the user scrolls the window*/
    /*This is an event handler for the scroll event that occurs when the user scrolls the window.*/
    window.onscroll = () =>{

        /*This line of code remove the presence of the CSS class active on the element referred to by the searchForm variable. If the element has the class active, it will be removed, and if it doesn't have it, it will be added.*/
        searchForm.classList.remove('active');

        /*a conditional statement that checks if the vertical scroll position (scrollY) of the window is greater than 80 pixels*/
        /*If it is, the code inside the 'if' block will be executed*/ 
        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active');
        } 
        /*else, the code inside the 'else' block will be executed.*/
        else{
            document.querySelector('.header .header-2').classList.remove('active'); 
        }
        /*this code is use to apply or remove styling or behavior applied to the element base on the user's scrolling behavoir*/
    }

/*setting up an event listener that triggers when the window finishes loading*/
    /*This is an event handler for the load event that occurs when the window and all its resources (such as images and scripts) finish loading*/
    window.onload = () =>{

        /*a conditional statement that checks if the vertical scroll position (scrollY) of the window is greater than 80 pixels*/
        /*If it is, the code inside the 'if' block will be executed*/ 
        if(window.scrollY > 80){
            document.querySelector('.header .header-2').classList.add('active');
        } 
        /*else, the code inside the 'else' block will be executed.*/
        else{
            document.querySelector('.header .header-2').classList.remove('active'); 
        }
        /*This code used to apply or remove styling or behavior to the selected element based on the user's scrolling behavior after the page has finished loading.*/ 
    
    /* this part will link with the functions in website loader bellow*/
    fadeOut();
    }


/* website loader */
function loader(){
    document.querySelector('.loader-container').classList.add('active')
}

function fadeOut(){
    setTimeout(loader, 4000);
}


/*book slider section*/
/*swiper*/
var swiper = new Swiper(".books-slider", {
    //let you loop througt the selected few of products infinitely
    loop:true,
    centeredSlides:true,
    //will automatically move from left to right well user doesn't interact with the slider 
    autoplay:{
        delay: 9500,
        disableOnInteraction:false
    },
    //will show a certain amount of products at a time on the shelf base on user's device screen resolution
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

/*featured book slider section*/
/*swiper*/
var swiper = new Swiper(".featured-slider", {
    //let you loop througt the selected few of products infinitely
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    //will automatically move from left to right well user doesn't interact with the slider 
    autoplay:{
        delay: 9500,
        disableOnInteraction:false
    },
    //set 2 arrow button each to the side so user can click to move to the next featured product's slider
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    //will show a certain amount of products at a time in the slider base on user's device screen resolution
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      }, 
      1024: {
        slidesPerView: 4,
      },
    },
  });

/*Arrivals book slider section*/
/*swiper*/
var swiper = new Swiper(".arrivals-slider", {
    //let you loop througt the selected few of products infinitely
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    //will automatically move from left to right well user doesn't interact with the slider 
    autoplay:{
        delay: 9500,
        disableOnInteraction:false
    },
    //will show a certain amount of products at a time in the slider base on user's device screen resolution
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }, 
      1024: {
        slidesPerView: 3,
      },
    },
  });  


/*Reviews slider section*/
/*swiper*/
var swiper = new Swiper(".reviews-slider", {
    //let you loop througt the selected few of review infinitely
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    //will automatically move from left to right well user doesn't interact with the slider 
    autoplay:{
        delay: 9500,
        disableOnInteraction:false
    },
    //will show a certain amount of reviews at a time in the slider base on user's device screen resolution
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }, 
      1024: {
        slidesPerView: 3,
      },
    },
  }); 
  

/*Blogs slider section*/
/*swiper*/
var swiper = new Swiper(".blogs-slider", {
    //let you loop througt the selected few of blogs infinitely
    spaceBetween:10,
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    //will automatically move from left to right well user doesn't interact with the slider 
    autoplay:{
        delay: 9500,
        disableOnInteraction:false
    },
    //will show a certain amount of blogs at a time in the slider base on user's device screen resolution
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      }, 
      1024: {
        slidesPerView: 3,
      },
    },
  }); 


/* bottom to top button */
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});



/*===================================Collection section====================================*/

/*new arrivals banner slider section*/
/*swiper*/
var swiper = new Swiper(".arrivals-banner-slider", {
  //let you loop througt the selected few of review infinitely
  spaceBetween:10,
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  //will automatically move from left to right well user doesn't interact with the slider 
  autoplay:{
      delay: 9500,
      disableOnInteraction:false
  },
  //will show a certain amount of reviews at a time in the slider base on user's device screen resolution
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    }, 
    1024: {
      slidesPerView: 1,
    },
  },
}); 



/*===================================Book detail section====================================*/
var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

SmallImg[0].onclick = function(){
  ProductImg.src = SmallImg[0].src;
}

SmallImg[1].onclick = function(){
  ProductImg.src = SmallImg[1].src;
}

SmallImg[2].onclick = function(){
  ProductImg.src = SmallImg[2].src;
}

SmallImg[3].onclick = function(){
  ProductImg.src = SmallImg[3].src;
}



/* related products section */
/*swiper*/
var swiper = new Swiper(".related-slider", {
  //let you loop througt the selected few of products infinitely
  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  //will automatically move from left to right well user doesn't interact with the slider 
  autoplay:{
      delay: 9500,
      disableOnInteraction:false
  },
  //will show a certain amount of products at a time in the slider base on user's device screen resolution
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }, 
    1024: {
      slidesPerView: 3,
    },
  },
});  
