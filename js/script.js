

/*This line of code selects an element in the DOM with the class name 'search-form' and assigns it to a variable named 'searchForm'. The 'document.querySelector()' method is used to select the first element that matches the specified CSS selector.*/
searchForm=document.querySelector('.search-form')

/*This line of code selects an element in the DOM with the ID 'search-btn', and sets up an event listener for the 'click' event on that element. When the element with ID 'search-btn' is clicked, the code inside the arrow function (callback function) will be executed.*/
document.querySelector('#search-btn').onclick = () =>{
    /*This line of code toggles the presence of the CSS class active on the element referred to by the searchForm variable. If the element has the class active, it will be removed, and if it doesn't have it, it will be added.*/
    searchForm.classList.toggle('active');
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
