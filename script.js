gsap.registerPlugin(SplitText);

const Name = document.getElementById("HomeHeader");
const splitName = new SplitText(Name, { type: "chars, words" });

const timeline = gsap.timeline({});

timeline.from(Name, {
  ease: "back.inOut",
  y: -100,
  opacity: 0,
  duration: 2
});