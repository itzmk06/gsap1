gsap.from('#nav h3',{
    y:-50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.2,
})

var tl=gsap.timeline()
tl.from('#texter h1',{
    x:-500,
    // opacity:0,
    duration:1,
    delay:0.2,
    stagger:0.2
})
gsap.to('#img1',{
    x:-500,
    duration:1,
    // opacity:0,
    delay:0.2,
})
gsap.to('#img2',{
    x:500,
    duration:1,
    // opacity:0,
    delay:0.2,
})
gsap.to('#img3',{
    y:-60,
    duration:1,
    // opacity:0,
    delay:0.2,
})

gsap.to('#img2',{
    rotate:30,
    delay:2,
    x:170,
    duration:1,
})
gsap.to('#img1',{
    rotate:-30,
    delay:2,
    x:-170,
    duration:1,
})
gsap.to('#img3',{
    // opacity:0,
    // x:120,
    duration:0.5,
    delay:0.2,
    stagger:0.2,
    // rotate:250,
})
