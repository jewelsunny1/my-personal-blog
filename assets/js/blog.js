const sunMoonButton= document.querySelector('.sun-moon-button');
const body= document.querySelector('body');
// 
sunMoonButton.addEventListener('click',function(){
    //don't need to put .dark-mode bc .toggle expects class name as argument
    body.classList.toggle('dark-mode');

    return;
});


const backButton=document.querySelector('.back-button');

backButton.addEventListener('click',function(){
    //remember this is how you redirect to a different link// 
location.href="index.html"


});
//Come back to this i need to understand this a bit more//
const textAreaContent =document.querySelectorAll('.textarea-content');
//loop trhough each tect area element
for(let i=0; i<textAreaContent.length;i++){
    //by doing textAreaContent[i], we are rying to acces the value of each text area content//
    const textArea= textAreaContent[i];

    textArea.addEventListener('input',function(){
        //textContent new vari to store the value of textArea of each box
        const textContent=textArea.value;

        const textEntry= {
            Entry: textContent
        };
        localStorage.setItem('textEntry',JSON.stringify(textEntry));

    });
    

}




