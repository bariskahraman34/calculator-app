const body = document.querySelector('body');
const themeSelectorInput = document.querySelector('#theme-selector-input');

let saveTheme = JSON.parse(localStorage.getItem('theme')) || [];

function saveThemeToLocalStorage(){
    return localStorage.setItem('theme',JSON.stringify(saveTheme));
}

themeSelectorInput.addEventListener('click',changeTheme)

function changeTheme(){
    saveTheme = [];
    if(themeSelectorInput.value == 1){
        body.classList.remove('light-theme','purple-theme');
        body.classList.add('default-theme');
        saveTheme.push(
            {
                theme: 'default-theme'
            }
        )
        saveThemeToLocalStorage();
    }else if(themeSelectorInput.value == 2){
        body.classList.remove('default-theme','purple-theme');
        body.classList.add('light-theme');
        saveTheme.push(
            {
                theme: 'light-theme'
            }
        )
        saveThemeToLocalStorage();
    }else if(themeSelectorInput.value == 3){
        body.classList.remove('default-theme','light-theme');
        body.classList.add('purple-theme');
        saveTheme.push(
            {
                theme: 'purple-theme'
            }
        )
        saveThemeToLocalStorage();
    }
}

if(saveTheme[0].theme == 'default-theme'){
    body.classList.add('default-theme');
    themeSelectorInput.value = 1;
}else if(saveTheme[0].theme == 'light-theme'){
    body.classList.add('light-theme');
    themeSelectorInput.value = 2;
}else if(saveTheme[0].theme == 'purple-theme'){
    body.classList.add('purple-theme');
    themeSelectorInput.value = 3;
}