const body = document.querySelector('body');
const themeSelectorInput = document.querySelector('#theme-selector-input');

themeSelectorInput.addEventListener('click',changeTheme)

function changeTheme(){
    if(themeSelectorInput.value == 1){
        body.classList.remove('light-theme','purple-theme');
        body.classList.add('default-theme');
    }else if(themeSelectorInput.value == 2){
        body.classList.remove('default-theme','purple-theme');
        body.classList.add('light-theme');
    }else if(themeSelectorInput.value == 3){
        body.classList.remove('default-theme','light-theme');
        body.classList.add('purple-theme');
    }
}

