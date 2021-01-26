gsap.to('.dark_overlay_for_nice_start_up_animation', {
    delay: 0.5,
    duration: 2,
    opacity: 0,
    ease: 'power1.inOut',
});

gsap.from('.home--text_', {
    delay: 2.5,
    opacity: 0,
    y: '5em',
    stagger: 0.627,
    ease: 'power7.inOut',
});

// *SCROLLTRIGGER FOR THE HISTORY PAGE

gsap.from('#image', {
    scrollTrigger: { scrub: 1, trigger: '#image', start: 'top center' },
    y: 150,
    opacity: 0,
    stagger: 0.5,
    ease: 'power7.inInOut',
});
gsap.from('.history--info_text', {
    scrollTrigger: {
        scrub: 1,
        trigger: '.history--info_text',
        start: 'top center',
    },
    y: 50,
    opacity: 0,
    stagger: 0.5,
    ease: 'power7.inInOut',
});

gsap.from('.img', {
    scrollTrigger: { scrub: 1 },
    scale: 1.035,
    ease: 'power1.inInOut',
});

gsap.from('.last_text', {
    delay: 2.5,
    opacity: 0,
    y: '5em',
    ease: 'power7.inOut',
});

// *LAST PAGE
for (let i = 0; i < 70; i++) {
    let bars = document.createElement('span');
    document.querySelector('.container').appendChild(bars);
}

gsap.from('.container span', {
    scrollTrigger: { scrub: 6, start: 'bottom bottom' },
    transform: 'translateZ(1000px)',
    stagger: {
        from: 'random',
        amount: 0.8,
    },
    ease: 'power7.inOut',
});

gsap.from('.wheel', {
    scrollTrigger: { scrub: true, start: 'bottom bottom' },
    opacity: 0,
    delay: 6,
});

// gsap.from('.last__text_', {
//     scrollTrigger: { scrub: 1, start: 'bottom bottom' },
//     opacity: 0,
// });
