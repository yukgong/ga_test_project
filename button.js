const projectBtn = document.querySelector('#project_btn'),
    aboutBtn = document.querySelector('#about_btn')

const FOCUS = 'focus';
BUTTON = 'button';

function handleProjectBtn(event){
    const btn = event.target;
    btn.classList.remove(BUTTON);
    btn.classList.add(FOCUS);

    aboutBtn.classList.remove(FOCUS);
    aboutBtn.classList.add(BUTTON);
}

function handleAboutBtn(event){
    const btn = event.target;
    btn.classList.remove(BUTTON);
    btn.classList.add(FOCUS);

    projectBtn.classList.remove(FOCUS);
    projectBtn.classList.add(BUTTON);
}

function buttonLoadevent(){
    projectBtn.classList.remove(BUTTON);
    projectBtn.classList.add(FOCUS);
}


function init(){
    buttonLoadevent();
    projectBtn.addEventListener('click', handleProjectBtn);
    aboutBtn.addEventListener('click', handleAboutBtn);
}

init();