gsap.from('.fly', { duration: 2, delay: .9, x: '-100vw', ease: 'power2.in', opacity: 0 })
gsap.from(".ll", {opacity: 0, duration: 2, delay: 1, stagger: .6})
gsap.from(".ww", {opacity: 0, duration: 2, delay: 1, stagger: .6})
gsap.to(".five", {x:1, rotation:360, duration:1.5, delay: .5, stagger: .3, scale:1,repeat:1, })