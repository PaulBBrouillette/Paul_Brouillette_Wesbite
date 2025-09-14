gsap.registerPlugin(SplitText);

const Name = document.getElementById("NameHeader");
const timeline = gsap.timeline();
const splitName = new SplitText(Name, {type: "chars, words"});

timeline.from(splitName.chars, {
    y: 100,
    rotationX: 90,
    opacity: 0,
    color: "#FFFFFF",
    transformOrigin: "center top",
    perspective: 700,
    duration: 1,
    stagger: 0.05,
    ease: "back.inOut"
})