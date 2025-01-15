function startLoader() {
  let counterElement = document.querySelector(".counter");
  let overlayElement = document.querySelector(".overlay");
  let currentValue = 0;

  function upgateCounter() {
    if (currentValue === 100) {
      setTimeout(() => {
        overlayElement.style.display = "none";
      }, 3500);
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(upgateCounter, delay);
  }

  upgateCounter();
}

startLoader();

gsap.to(".counter", 0.25, { delay: 3.5, autoAlpha: 0 });

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".main-index-intro h1, .main-index-intro p,.topline", 1.5, {
  delay: 4,
  x: -700,
  stagger: { amount: 0.5 },
  ease: "power4.inOut",
});

gsap.from(".main-index-me p , .main-index-me h3, .main-index-me button", 1.5, {
  delay: 4,
  x: 700,
  stagger: { amount: 0.5 },
  ease: "power4.inOut",
});

const $ = jQuery;
// Button Variables
const portfolioBtn = $(".portfolioBtn");
const aboutBtn = $(".aboutBtn");
const returnHomeBtn = $(".returnHomeBtn");
const returnHomeBtnH = $(".returnHomeBtnH");
const contactBtn = $(".contactBtn");
// Container Variables
const mainIndexMe = $(".main-index-me-about, .main-index-me-work");
const swipero = $(".swiper");
const badBox = $(".bad-container");
const introHead = $(".main-index-intro-head");
const introText = $(".main-index-intro-text");
const portfolioHead = $(".main-index-intro-portfolio-head");
const portfolioText = $(".main-index-intro-portfolio-text");
const aboutHead = $(".main-index-intro-about-head");
const aboutText = $(".main-index-intro-about-text");
const skillBox = $(".skills-box");
const topline = $(".topline");
const contactForm = $(".contactForm");

portfolioHead.hide();
portfolioText.hide();
aboutHead.hide();
aboutText.hide();
swipero.hide();
returnHomeBtn.hide();
skillBox.hide();
contactForm.hide();

// gsap.to(swipero, 1, {
//   autoAlpha: 0,
// });

// Show the great form and hide the rating container
portfolioBtn.click(() => {
  // gsap.to(mainIndexMe, 1, {
  //   y: -200,
  //   stagger: { amount: 0.5 },
  //   ease: "power4.inOut",
  //   autoAlpha: 0,
  // });
  // gsap.to(introHead, 1, {
  //   delay: 0.3,
  //   x: -700,
  //   stagger: { amount: 0.5 },
  //   ease: "power4.inOut",
  //   autoAlpha: 0,
  // });
  // gsap.to(introText, 1, {
  //   delay: 0.35,
  //   x: -700,
  //   stagger: { amount: 0.5 },
  //   ease: "power4.inOut",
  //   autoAlpha: 0,
  // });
  mainIndexMe.hide();
  introHead.hide();
  introText.hide();
  portfolioHead.show();
  portfolioText.show();
  swipero.show();
  // gsap.to(swipero, 1, {
  //   autoAlpha: 100,
  // });
  aboutHead.hide();
  aboutText.hide();
  skillBox.hide();
  returnHomeBtn.show();
  topline.show();
  contactForm.hide();
});

// Show the bad form and hide the rating container
aboutBtn.click(() => {
  mainIndexMe.hide();
  introHead.hide();
  introText.hide();
  aboutHead.show();
  aboutText.show();
  portfolioHead.hide();
  portfolioText.hide();
  swipero.hide();
  returnHomeBtn.show();
  skillBox.show();
  topline.show();
  contactForm.hide();
});

returnHomeBtn.click(() => {
  mainIndexMe.show();
  introHead.show();
  introText.show();
  aboutHead.hide();
  aboutText.hide();
  portfolioHead.hide();
  portfolioText.hide();
  swipero.hide();
  returnHomeBtn.hide();
  skillBox.hide();
  topline.show();
  contactForm.hide();
});

returnHomeBtnH.click(() => {
  mainIndexMe.show();
  introHead.show();
  introText.show();
  aboutHead.hide();
  aboutText.hide();
  portfolioHead.hide();
  portfolioText.hide();
  swipero.hide();
  returnHomeBtn.hide();
  skillBox.hide();
  topline.show();
  contactForm.hide();
});

contactBtn.click(() => {
  contactForm.show();
  mainIndexMe.hide();
  introHead.hide();
  introText.hide();
  aboutHead.hide();
  aboutText.hide();
  portfolioHead.hide();
  portfolioText.hide();
  swipero.hide();
  returnHomeBtn.hide();
  skillBox.hide();
  topline.hide();
});
