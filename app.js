const mm = gsap.matchMedia();
mm.add("(min-width: 1350px) and (max-width: 1440px)", () => {
  const timeLine1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  gsap.from("#main-donut", {
    delay: 1,
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
  });

  timeLine1.to(
    "#main-donut",
    {
      top: "120%",
      x: -620,
      rotate: 110,
    },
    "donut1",
  );

  timeLine1.to(
    ".pw-donut1",
    {
      top: "165%",
      x: -1150,
      rotate: 70,
    },
    "donut1",
  );

  timeLine1.to(
    ".bw-donut1",
    {
      top: "120%",
      x: -1150,
      rotate: 400,
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf1",
    {
      top: "120%",
      x: -180,
      rotate: "150%",
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf2",
    {
      height: "25%",
      top: "170%",
      rotate: "-70%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-ball",
    {
      top: "140%",
      x: -230,
    },
    "donut1",
  );

  timeLine1.to(
    ".blue-ball",
    {
      top: "160%",
      x: -140,
    },
    "donut1",
  );

  timeLine1.to(
    ".green-ball",
    {
      top: "143%",
      x: -1250,
    },
    "donut1",
  );

  timeLine1.to(
    ".pink-ball",
    {
      top: "110%",
      x: -800,
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule1",
    {
      top: "170%",
      x: -500,
      rotate: "230%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule2",
    {
      top: "120%",
      x: -580,
      rotate: "30%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-capsule1",
    {
      top: "150%",
      x: -620,
      rotate: "30%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule1",
    {
      height: "6%",
      top: "120%",
      x: -450,
      rotate: "200%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule2",
    {
      top: "185%",
      x: -600,
      rotate: "90%",
    },
    "donut1",
  );

  timeLine1.to(
    ".donut-shadow",
    {
      bottom: "10%",
      left: "55%",
      width: "40%",
    },
    "donut1",
  );

  const timeLine3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#third-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  timeLine3.to("#main-donut", {
    top: "239%",
    x: -380,
    height: "40%",
    rotate: "10%",
  });

  const timeLine4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#fourth-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  timeLine4.to("#main-donut", {
    top: "310%",
    x: -10,
    height: "30%",
    rotate: "-360%",
  });
});

// ===================For Laptop Animation==================

const laptop = gsap.matchMedia();
laptop.add("(min-width: 1020px) and (max-width: 1349px)", () => {
  const timeLine1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  gsap.from("#main-donut", {
    delay: 1,
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
  });

  timeLine1.to(
    "#main-donut",
    {
      top: "120%",
      x: -450,
      rotate: 110,
    },
    "donut1",
  );

  timeLine1.to(
    ".pw-donut1",
    {
      top: "165%",
      x: -800,
      rotate: 70,
    },
    "donut1",
  );

  timeLine1.to(
    ".bw-donut1",
    {
      top: "120%",
      x: -850,
      rotate: 400,
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf1",
    {
      top: "120%",
      x: -140,
      rotate: "150%",
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf2",
    {
      height: "25%",
      top: "170%",
      rotate: "-70%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-ball",
    {
      top: "140%",
      x: -230,
    },
    "donut1",
  );

  timeLine1.to(
    ".blue-ball",
    {
      top: "160%",
      x: -100,
    },
    "donut1",
  );

  timeLine1.to(
    ".green-ball",
    {
      top: "145%",
      x: -930,
    },
    "donut1",
  );

  timeLine1.to(
    ".pink-ball",
    {
      top: "110%",
      x: -600,
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule1",
    {
      top: "170%",
      x: -400,
      rotate: "230%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule2",
    {
      top: "120%",
      x: -430,
      rotate: "30%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-capsule1",
    {
      top: "150%",
      x: -500,
      rotate: "30%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule1",
    {
      height: "6%",
      top: "115%",
      x: -380,
      rotate: "200%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule2",
    {
      top: "185%",
      x: -450,
      rotate: "90%",
    },
    "donut1",
  );

  timeLine1.to(
    ".donut-shadow",
    {
      bottom: "10%",
      left: "55%",
      width: "40%",
    },
    "donut1",
  );

  const timeLine3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#third-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  timeLine3.to("#main-donut", {
    top: "242%",
    x: -260,
    height: "35%",
    rotate: "10%",
  });

  const timeLine4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#fourth-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  timeLine4.to("#main-donut", {
    top: "310%",
    x: 25,
    height: "30%",
    rotate: "-360%",
  });
});

// ======================Tablet==========================
const tablet = gsap.matchMedia();
tablet.add("(min-width: 481px) and (max-width: 770px)", () => {
  const timeLine1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  gsap.from("#main-donut", {
    delay: 1,
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
  });

  timeLine1.to(
    "#main-donut",
    {
      top: "130%",
      x: -220,
      rotate: 110,
    },
    "donut1",
  );

  timeLine1.to(
    ".pw-donut1",
    {
      top: "165%",
      x: -80,
      rotate: 70,
    },
    "donut1",
  );

  timeLine1.to(
    ".bw-donut1",
    {
      top: "120%",
      x: -550,
      rotate: 400,
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf1",
    {
      top: "120%",
      x: 120,
      rotate: "150%",
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf2",
    {
      height: "20%",
      top: "170%",
      rotate: "-70%",
      x: 50,
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-ball",
    {
      top: "140%",
      x: -230,
    },
    "donut1",
  );

  timeLine1.to(
    ".blue-ball",
    {
      top: "160%",
      x: 260,
    },
    "donut1",
  );

  timeLine1.to(
    ".green-ball",
    {
      top: "145%",
      x: -690,
    },
    "donut1",
  );

  timeLine1.to(
    ".pink-ball",
    {
      top: "110%",
      x: -370,
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule1",
    {
      top: "170%",
      x: -270,
      height: "6%",
      rotate: "230%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule2",
    {
      top: "124%",
      x: -130,
      height: "6%",
      rotate: "30%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-capsule1",
    {
      top: "150%",
      x: -100,
      rotate: "30%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule1",
    {
      height: "6%",
      top: "115%",
      x: -280,
      rotate: "200%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule2",
    {
      top: "180%",
      x: 50,
      rotate: "90%",
    },
    "donut1",
  );

  timeLine1.to(
    ".donut-shadow",
    {
      bottom: "10%",
      left: "55%",
      width: "40%",
    },
    "donut1",
  );

  const timeLine3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#third-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  timeLine3.to("#main-donut", {
    top: "245%",
    x: -30,
    height: "30%",
    rotate: "10%",
  });

  const timeLine4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#fourth-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  timeLine4.to("#main-donut", {
    top: "310%",
    x: 190,
    height: "30%",
    rotate: "-360%",
  });
});

// ============================Mobile L===============
const mobileL = gsap.matchMedia();
mobileL.add("(max-width: 480px)", () => {
  const timeLine1 = gsap.timeline({
    scrollTrigger: {
      trigger: "#second-hero-section",
      start: "0% 95%",
      end: "70% 50%",
      scrub: true,
      markers: true,
    },
  });

  gsap.from("#main-donut", {
    delay: 1,
    duration: 1,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
  });

  timeLine1.to(
    "#main-donut",
    {
      top: "128%",
      x: -5,
      rotate: 110,
      height: "40%",
    },
    "donut1",
  );

  timeLine1.to(
    ".pw-donut1",
    {
      top: "152%",
      x: -350,
      rotate: 70,
      height: "17%",
    },
    "donut1",
  );

  timeLine1.to(
    ".bw-donut1",
    {
      top: "120%",
      height: "20%",
      x: 10,
      rotate: 400,
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf1",
    {
      top: "120%",
      x: 30,
      height: "18%",
      rotate: "0%",
    },
    "donut1",
  );

  timeLine1.to(
    ".leaf2",
    {
      height: "16%",
      top: "150%",
      rotate: "100%",
      x: 40,
      
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-ball",
    {
      top: "140%",
      x: -230,
    },
    "donut1",
  );

  timeLine1.to(
    ".blue-ball",
    {
      top: "160%",
      x: 260,
    },
    "donut1",
  );

  timeLine1.to(
    ".green-ball",
    {
      top: "145%",
      x: -690,
    },
    "donut1",
  );

  timeLine1.to(
    ".pink-ball",
    {
      top: "115%",
      x: -40,
      height:"13%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule1",
    {
      top: "140%",
      x: -270,
      height: "10%",
      rotate: "0%",
    },
    "donut1",
  );

  timeLine1.to(
    ".red-wight-capsule2",
    {
      top: "124%",
      x: -130,
      height: "6%",
      rotate: "30%",
      display:none,
    },
    "donut1",
  );

  timeLine1.to(
    ".red-capsule1",
    {
      top: "150%",
      x: -100,
      rotate: "30%",
    display:none,
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule1",
    {
      height: "6%",
      top: "100%",
      x: 50,
      rotate: "200%",
    },
    "donut1",
  );

  timeLine1.to(
    ".yellow-capsule2",
    {
      top: "100%",
      x: 50,
      rotate: "90%",
    },
    "donut1",
  );

  timeLine1.to(
    ".donut-shadow",
    {
      bottom: "10%",
      left: "55%",
      width: "40%",
    },
    "donut1",
  );

});
