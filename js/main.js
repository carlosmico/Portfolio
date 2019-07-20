document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM cargado');

    //PROJECTS HOVER
    projectsHover();
});

const projectsHover = () => {
    const project1 = document.querySelectorAll('.project')[0];
    const project2 = document.querySelectorAll('.project')[1];
    const project3 = document.querySelectorAll('.project')[2];
    const project4 = document.querySelectorAll('.project')[3];

    const title1 = document.querySelector('.title1');
    const title2 = document.querySelector('.title2');
    const title3 = document.querySelector('.title3');
    const title4 = document.querySelector('.title4');

    title1.classList.add('titleHide');
    title2.classList.add('titleHide')
    title3.classList.add('titleHide')
    title4.classList.add('titleHide')

    project1.addEventListener("mouseover", event => {
        if(title1.classList.contains('titleHide')){
            title1.classList.remove('titleHide')
            title1.classList.add('titleShow')
        }
    });

    project1.addEventListener("mouseout", event => {
        if(title1.classList.contains('titleShow')){
            title1.classList.remove('titleShow')
            title1.classList.add('titleHide')
        }
    });

    project2.addEventListener("mouseover", event => {
        if(title2.classList.contains('titleHide')){
            title2.classList.remove('titleHide')
            title2.classList.add('titleShow')
        }
    });

    project2.addEventListener("mouseout", event => {
        if(title2.classList.contains('titleShow')){
            title2.classList.remove('titleShow')
            title2.classList.add('titleHide')
        }
    });

    project3.addEventListener("mouseover", event => {
        if(title3.classList.contains('titleHide')){
            title3.classList.remove('titleHide')
            title3.classList.add('titleShow')
        }
    });

    project3.addEventListener("mouseout", event => {
        if(title3.classList.contains('titleShow')){
            title3.classList.remove('titleShow')
            title3.classList.add('titleHide')
        }
    });

    project4.addEventListener("mouseover", event => {
        if(title4.classList.contains('titleHide')){
            title4.classList.remove('titleHide')
            title4.classList.add('titleShow')
        }
    });

    project4.addEventListener("mouseout", event => {
        if(title4.classList.contains('titleShow')){
            title4.classList.remove('titleShow')
            title4.classList.add('titleHide')
        }
    });
}