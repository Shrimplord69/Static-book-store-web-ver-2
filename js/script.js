/*========================================================================================*/
/*RMIT University Vietnam
  Course: COSC2430 Web Programming
  Semester: 2023A
  Assessment: Assignment 1
  Author: Your names (e.g. Nguyen Van Minh)
  ID: Your student ids (e.g. 1234567)
  Acknowledgement:
  https://swiperjs.com/demos
  https://thecomicbookstore.in
  https://kingscomics.com
  https://cdnjs.com/libraries/font-awesome
  https://www.freecodecamp.org/news/how-to-make-a-landing-page-with-html-css-and-javascript/#theprojectfolderstructure
*/
/*=======================================================================================*/


/*This line of code selects an element in the DOM with the class name 'search-form' and assigns it to a variable named 'searchForm'. The 'document.querySelector()' method is used to select the first element that matches the specified CSS selector.*/
searchForm=document.querySelector('.search-form')

/*This line of code selects an element in the DOM with the ID 'search-btn', and sets up an event listener for the 'click' event on that element. When the element with ID 'search-btn' is clicked, the code inside the arrow function (callback function) will be executed.*/
document.querySelector('#search-btn').onclick = () =>{
    /*This line of code toggles the presence of the CSS class active on the element referred to by the searchForm variable. If the element has the class active, it will be removed, and if it doesn't have it, it will be added.*/
    searchForm.classList.toggle('active');
}

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
