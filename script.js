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
tl.to('#img1',{
    x:-500,
    duration:1,
    opacity:0,
    delay:0.2,
})
tl.to('#img2',{
    x:500,
    duration:1,
    opacity:0,
    delay:0.2,
})
tl.to('#img3',{
    y:200,
    duration:1,
    opacity:0,
    delay:0.2,
})

tl.to('#img2',{
    rotate:9,
    delay:2,
    x:150,
    duration:1,
})
tl.to('#img1',{
    rotate:-10,
    delay:2,
    x:-150,
    duration:1,
})
tl.to('#img3',{
    // opacity:0,
    x:150,
    duration:0.5,
    delay:0.2,
    stagger:0.2,
    // rotate:250,
})
gsap.to('h1',{
    y:-150,
    duration:2,
    delay:4,
    // stagger:0.2
})