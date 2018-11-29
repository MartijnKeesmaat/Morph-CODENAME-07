var tl = new TimelineMax({ repeat: -1, repeatDelay: 1, delay: 2 });

tl.to('#a', 1, {
  morphSVG: '#a'
})
  .to('#a', 1, {
    morphSVG: '#x'
  })
  .to('#a', 1, {
    morphSVG: '#x'
  })
  .to('#a', 1, {
    morphSVG: '#x'
  })
  .to('#a', 1, {
    morphSVG: '#a'
  });
