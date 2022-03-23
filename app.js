const tl = gsap.timeline({defaults : {duration:0.75, ease:"power1.out"}});

//animating the entrance of the box
tl.fromTo('.cookie-container',{scale:0},{scale:1, ease:"elastic.out(1,0.4)", duration: 1.5});

//cookie icon and text roll in
tl.fromTo(".cookie",{opacity:0, x:-50, rotation:"-45deg"},{opacity:1, x:0, rotation:"0deg"},"<50%");
tl.fromTo(".text",{x:30, opacity :0},{x:0, opacity : 1}, "<"); // "<" at the end makes it sync with the prev animation (in this case cookie), So that they both happen at the same time.

//cookie jump
tl.fromTo(".cookie",{y:0, rotation: "0deg"},{y:-20, yoyo: true, repeat:2, rotation:"-20deg"}); //set repeat to -1 if you want to make it yoyo forever
tl.fromTo(".cookie",{y:-20, rotation: "-20deg"},{y:0, rotation:"0deg"}); // bring the cookie back down afte 2 bounces

//crumbs animation
tl.fromTo("#crumbs",{y:0},{y:-20, yoyo: true, repeat:2},"<"); //set repeat to -1 if you want to make it yoyo forever
tl.fromTo("#crumbs",{y:-20},{y:0},"<"); // bring the cookie back down afte 2 bounces



// Fading the container out after click
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    gsap.to('.cookie-container',{opacity:0, y:100, duration:0.75, ease : "power1.out"});
});