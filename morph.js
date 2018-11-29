var tl = new TimelineMax({ repeat: -1, repeatDelay: 4, delay: 2 });

tl.to('#a', 1, {
  morphSVG: '#a',
  shapeIndex: 1
})
  .to('#a', 1, {
    morphSVG: '#x',
    shapeIndex: 1
  })
  .to('#a', 1, {
    morphSVG: '#a',
    shapeIndex: 1
  });
