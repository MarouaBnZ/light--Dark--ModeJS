const taggleSwitch = document.querySelector('input[type ="checkbox"]');
const nav = document.getElementById('nav');
const taggleIcon = document.getElementById('taggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const TextBox = document.getElementById('text-box');

// Dark or Light Image

function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`
    image2.src = `img/undraw_feeling_proud_${color}.svg`
    image3.src = `img/undraw_conceptual_idea_${color}.svg`
}

function taggleDarkLightMode(isDark){
    
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
    TextBox.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
    taggleIcon.children[0].textContent = isDark? "Dark Mode" : "Light Mode"
    isDark? taggleIcon.children[1].classList.replace('fa-sun','fa-moon') :  taggleIcon.children[1].classList.replace('fa-moon','fa-sun')
    isDark? imageMode('dark') :  imageMode('light')  
}


// Dark mode styles

function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    TextBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    taggleIcon.children[0].textContent = "Dark Mode"
    taggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    imageMode('dark');
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    TextBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    taggleIcon.children[0].textContent = "Light Mode"
    taggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('light');
}

//Switch theme automatically 

function switchTheme(event){
if(event.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
    taggleDarkLightMode(true)
}
else {
    document.documentElement.setAttribute('data-theme','light'); 
    localStorage.setItem('theme','light');
  taggleDarkLightMode(false)
}
}

// Event Listener
taggleSwitch.addEventListener('change',switchTheme);

// Check LocalStorage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme',currentTheme);
}

if(currentTheme=== 'dark'){
taggleSwitch.checked = true;
taggleDarkLightMode(true)
}
