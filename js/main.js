var h=document.getElementById("home");
var a=document.getElementById("about");
var s=document.getElementById("skill");
var r=document.getElementById("resume");
var p=document.getElementById("project");
var c=document.getElementById("contact");
var menu=document.getElementById("menu");


var home=document.querySelectorAll(".home");
var about=document.querySelectorAll(".about");
var skill=document.querySelectorAll(".skill");
var resume=document.querySelectorAll(".resume");
var project=document.querySelectorAll(".project");
var contact=document.querySelectorAll(".contact");

about.forEach(function(x){
    x.addEventListener("click",function(){
        s.classList.add("hide");
        r.classList.add("hide");
        p.classList.add("hide");
        h.classList.add("hide");
        c.classList.add("hide");
        menu.classList.remove("menu-hide");
        a.classList.remove("hide");
        a.style.transition="all 1s";
    })
})
skill.forEach(function(x){
    x.addEventListener("click",function(){
        a.classList.add("hide");
        r.classList.add("hide");
        p.classList.add("hide");
        h.classList.add("hide");
        c.classList.add("hide");
        menu.classList.remove("menu-hide");
        s.classList.remove("hide");
        s.style.transition="all 1s";
    })
})
resume.forEach(function(x){
    x.addEventListener("click",function(){
        s.classList.add("hide");
        a.classList.add("hide");
        p.classList.add("hide");
        h.classList.add("hide");
        c.classList.add("hide");
        menu.classList.remove("menu-hide");
        r.classList.remove("hide");
        r.style.transition="all 1s";
    })
})
project.forEach(function(x){
    x.addEventListener("click",function(){
        s.classList.add("hide");
        r.classList.add("hide");
        a.classList.add("hide");
        h.classList.add("hide");
        c.classList.add("hide");
        menu.classList.remove("menu-hide");
        p.classList.remove("hide");
        p.style.transition="all 1s";
    })
})
contact.forEach(function(x){
    x.addEventListener("click",function(){
        s.classList.add("hide");
        r.classList.add("hide");
        p.classList.add("hide");
        h.classList.add("hide");
        a.classList.add("hide");
        menu.classList.remove("menu-hide");
        c.classList.remove("hide");
        c.style.transition="all 1s";
    })
})
home.forEach(function(x){
    x.addEventListener("click",function(){
        s.classList.add("hide");
        r.classList.add("hide");
        p.classList.add("hide");
        a.classList.add("hide");
        c.classList.add("hide");
        menu.classList.add("menu-hide");
        h.classList.remove("hide");
        h.style.transition="all 1s";
    })
})

