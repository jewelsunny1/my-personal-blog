//Submit form--> loacally store username input, title input, blog content text area
const usernameInput=document.querySelector('#username');
const blogTitleInput=document.querySelector('#blog-title');
const contentTextarea=document.querySelector('#blog-content');
const submitForm=document.querySelector('#submit-form');

//prevents the defaultaction of form -->which is refresh upon 
//submitting the form
//upon clicking submit button, the form wont refresh!


submitForm.addEventListener('click', function(event){
    event.preventDefault();
 
//the values need to be store into these new variables
const username= usernameInput.value;
const title= blogTitleInput.value;
const content= contentTextarea.value;

//this is where you want to put the if statemetn of what should happen when there is NO input for
//username, title, and or content!
// remember || mean and/or!!
//this if statement will only happen if these fields are empty if not it gets skipped?

if( username===''|| title===''|| content===''){
    alert('Please complete the form');
    return; //stops the function here!

}

//creating a object(formInfo) to store data!
//must have key/property and value!
const formInfo= {
username: username,
title: title,
content: content
};
//stores the values of username, title, and content into local stroage
//remember since formInfo is object this had to be converted to string
//using JSON stringify to take obj-->string b/f storing local
//
localStorage.setItem('formInfo', JSON.stringify(formInfo));
//by doing location.href, upon submitting bc of the click event we are
//being redirected to the blog.html to view the second part of the website:)
location.href="file:///Users/jewelsunny/Bootcamp/Challenges/my-personal-blog/blog.html"

});

