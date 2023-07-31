const intro =document.getElementById('introduction');
function background1(){
    intro.style.backgroundImage='url(../images/first.jpg)';
    intro.style.backgroundSize='cover';
    intro.style.backgroundPosition='bottom right';
}
intro.addEventListener("touchstart",background1);
intro.addEventListener("mouseover",background1);
const projects=document.getElementById('projects');
function background2(){
    projects.style.backgroundImage='url(../images/proback.png)';
    projects.style.backgroundSize='cover';
    projects.style.backgroundPosition='top right';
}
projects.addEventListener("touchstart",background2); 
projects.addEventListener("mouseover",background2);
const skills=document.getElementById('skills');
function background3(){
    skills.style.backgroundImage='url(../images/certi.jpg)';
    skills.style.backgroundSize='cover';
    skills.style.backgroundPosition='top right';
}
skills.addEventListener("touchstart",background3);
skills.addEventListener("mouseover",background3);
const education=document.getElementById('edu');
function background4(){
    education.style.backgroundImage='url(../images/Education.jpg)';
    education.style.backgroundSize='cover';
}
education.addEventListener("touchstart",background4);
education.addEventListener("mouseover",background4);
const hobby=document.getElementById('hobby');
function background5(){
    hobby.style.backgroundImage='url(../images/music.png)';
    hobby.style.backgroundSize='cover';
    hobby.style.backgroundPosition='center';
}
hobby.addEventListener("touchstart",background5);
hobby.addEventListener("mouseover",background5);
const foot=document.getElementById('foot');
function background6(){
    foot.style.backgroundImage='url(../images/end.png)';
    foot.style.backgroundSize='cover';
    foot.style.backgroundPosition='bottom right';
}
foot.addEventListener("mouseover",background6); 
foot.addEventListener("touchstart",background6);
