(function() {
  $(function() {
    var SMC, featherTween, page1, page2, page3_feather, page3_leftBlock;
    SMC = new ScrollMagic.Controller();
    page1 = new ScrollMagic.Scene({
      triggerElement: "#banner",
      duration: $("#banner").height(),
      offset: $(window).height() / 2 - 1
    }).setTween("#banner", {
      backgroundPosition: '0 ' + ($("#banner").height() - 110) + 'px',
      ease: Linear.easeNone
    }).addIndicators({
      name: 'parallax1'
    }).addTo(SMC);
    page2 = new ScrollMagic.Scene({
      triggerElement: '#SM_haunting-leftBlock',
      duration: $("#SM_haunting-rightBlock").height() - $("#SM_haunting-leftBlock").height(),
      offset: 40
    }).setPin('#SM_haunting-leftBlock').addIndicators({
      name: '1 (duration: 900)'
    }).addTo(SMC);
    featherTween = TweenMax.fromTo('#SM_goals-feather', 1, {
      left: -100
    }, {
      left: 100,
      repeat: -1,
      yoyo: true
    });
    page3_feather = new ScrollMagic.Scene({
      triggerElement: "#SM_goals-leftBlock",
      duration: $("#SM_goals-rightBlock").height() - $("#SM_goals-leftBlock").height(),
      offset: 40
    }).setTween(featherTween).addIndicators({
      name: '1 (feather)'
    }).addTo(SMC);
    page3_leftBlock = new ScrollMagic.Scene({
      triggerElement: '#SM_goals-leftBlock',
      duration: $("#SM_goals-rightBlock").height() - $("#SM_goals-leftBlock").height(),
      offset: 40
    }).setPin('#SM_goals-leftBlock').addIndicators({
      name: '1 (duration: 900)'
    }).addTo(SMC);
    return $(".indicator").hide();
  });

}).call(this);
