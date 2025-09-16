gsap.registerPlugin(ScrollTrigger);

const portfolioItems = gsap.utils.toArray(".portfolio-item");
const totalHeight = portfolioItems.length * (60 * window.innerHeight / 200);

const mainTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        pin: true,
        start: "top",
        end: () => `+=${totalHeight}`,
        scrub: true,
    }
});
portfolioItems.forEach((item, i) => {
    mainTimeline.to(item, {
        opacity: 1,
        y: `${totalHeight / 5}`,
        ease: "back.inOut",
        duration: .5,
    }, "slideIn" + i);

    if (i > 0) {
        mainTimeline.to(portfolioItems[i - 1], {
            y: "100%",
            opacity: 0,
            ease: "back.inOut",
            duration: .5,
        }, "slideIn" + i);
    }
});