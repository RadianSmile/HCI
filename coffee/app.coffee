$ ->

  SMC = new ScrollMagic.Controller()


  page1 = new ScrollMagic.Scene(
    triggerElement : "#banner"
    duration: $("#banner").height()
    offset : $(window).height() / 2 -1
    )
  .setTween("#banner" , backgroundPosition:'0 '+($("#banner").height()-110)+'px' , ease : Linear.easeNone)
  .addIndicators(name: 'parallax1')
  .addTo(SMC)

  page2 = new ScrollMagic.Scene(
    triggerElement: '#SM_haunting-leftBlock'
    duration: $("#SM_haunting-rightBlock").height() - $("#SM_haunting-leftBlock").height()
    offset : 40 )
  .setPin('#SM_haunting-leftBlock')
  .addIndicators(name: '1 (duration: 900)')
  .addTo(SMC)



  featherTween = TweenMax.fromTo '#SM_goals-feather', 1, { left: -100 },
    left: 100
    repeat: -1
    yoyo: true
    # ease: Circ.easeInOut

  page3_feather = new ScrollMagic.Scene(
    triggerElement: "#SM_goals-leftBlock"
    duration: $("#SM_goals-rightBlock").height() - $("#SM_goals-leftBlock").height()
    offset : 40 )
  # .setPin('#SM_goals-feather')
  # .setTween("#SM_goals-feather",
  #
  #   ease : Power1.easeInOut
  #   y : $("#SM_goals-rightBlock").height() - $("#SM_goals-leftBlock").height()
  #   )
  .setTween(featherTween)
  .addIndicators(name: '1 (feather)')
  .addTo(SMC)


  # page3_feather_tween = new ScrollMagic.Scene(
  #   triggerElement: '#SM_goals-feather'
  #   duration: $("#SM_goals-rightBlock").height() - $("#SM_goals-feather").height()
  #   offset : -40 )
  #
  # .addIndicators(name: '1 (duration: 900)')
  # .addTo(SMC)


  page3_leftBlock = new ScrollMagic.Scene(
    triggerElement: '#SM_goals-leftBlock'
    duration: $("#SM_goals-rightBlock").height() - $("#SM_goals-leftBlock").height()
    offset : 40 )
  .setPin('#SM_goals-leftBlock')
  .addIndicators(name: '1 (duration: 900)')
  .addTo(SMC)


  $(".indicator").hide();

  ## parallax .
  # tween = (new TimelineMax).add([
  #   TweenMax.to('#parallaxContainer .layer1', 1,
  #     backgroundPosition: '-40% 0'
  #     ease: Linear.easeNone)
  #   TweenMax.to('#parallaxContainer .layer2', 1,
  #     backgroundPosition: '-500% 0'
  #     ease: Linear.easeNone)
  #   TweenMax.to('#parallaxContainer .layer3', 1,
  #     backgroundPosition: '-225% 0'
  #     ease: Linear.easeNone)
  # ])
  # # build scene
  # scene = new (ScrollMagic.Scene)(
  #   triggerElement: '#parallaxContainer'
  #   duration: 2000
  #   offset: 450).setTween(tween).setPin('#parallaxContainer').addIndicators().addTo(controller)
