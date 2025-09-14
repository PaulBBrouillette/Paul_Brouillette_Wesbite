const colors = [
    "#3C096C",
    "#5A189A",
    "#7B2CBF",
    "#9D4EDD",
    "#C77DFF",
    "#E0AAFF"
];

const wrapper = document.getElementById("lava-lamp");
const blobs = [];
const numBlobs = 9;

for (let i = 0; i < numBlobs; i++) {
    const element = document.createElement("div");
    element.className = "blob";
    const color = colors[Math.floor(Math.random() * colors.length)];
    const blobSize = getIntRandomRange(400, 500);
    const blur = getIntRandomRange(35, 200);
    const radius = blobSize / 2;
    const widthHeight = getIntRandomRange(450, 700);
    element.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
    element.style.filter = `blur(${blur}px)`;
    element.style.width = `${widthHeight}px`;
    element.style.height = `${widthHeight}px`;

    wrapper.appendChild(element);

    blobs.push({
        element,
        x: radius + Math.random() * (wrapper.clientWidth - blobSize),
        y: radius + Math.random() * (wrapper.clientHeight - blobSize),
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
        scale: 0.8 + Math.random() * 0.6,
        scaleSpeed: 0.002 + Math.random() * 0.004,
        angle: Math.random() * Math.PI * 2,
        radius: radius,
        blobSize: blobSize,
        opacity: 0,
        opacitySpeed: 0.005 + Math.random() * 0.003,
        fadingIn: true
    });
}

function animate() {
  for (const b of blobs) {
    b.x += b.dx;
    b.y += b.dy;

    // Bounce off edges
    if (b.x < b.radius || b.x > wrapper.clientWidth - b.radius) b.dx *= -1;
    if (b.y < b.radius || b.y > wrapper.clientHeight - b.radius) b.dy *= -1;

    // Bubble scaling
    b.angle += b.scaleSpeed;
    const s = b.scale + Math.sin(b.angle) * 0.2;

    // Fade in/out
    if (b.fadingIn) {
      b.opacity += b.opacitySpeed;
      if (b.opacity >= 1) {
        b.opacity = 1;
        b.fadingIn = false; 
      }
    } else {
      b.opacity -= b.opacitySpeed * 0.5;
      if (b.opacity <= 0) {
        b.opacity = 0;
        b.fadingIn = true;
        b.x = b.radius + Math.random() * (wrapper.clientWidth - b.blobSize);
        b.y = b.radius + Math.random() * (wrapper.clientHeight - b.blobSize);
      }
    }

    b.element.style.transform = `translate(${b.x - b.radius}px, ${b.y - b.radius}px) scale(${s})`;
    b.element.style.opacity = b.opacity;
  }

  requestAnimationFrame(animate);
}

animate();

function getIntRandomRange(min, max) {
    return Math.floor(Math.random(max - min)) + min;
}