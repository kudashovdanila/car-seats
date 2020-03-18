$(document).ready(function () {


  $(".recall-modal-link").click(function () {
    $(".modal-bg").toggleClass("modal-bg-active");
    return false;
  });

  $(".recall-modal-link").click(function () {
    $(".scroll").toggleClass("scroll-hidden");
    return false;
  });

  $(".recall-modal-close").click(function () {
    $(".modal-bg").toggleClass("modal-bg-active");
    return false;
  });

  $(".recall-modal-close").click(function () {
    $(".scroll").toggleClass("scroll-hidden");
    return false;
  });



  $(".thank-modal-link").click(function () {
    $(".thank-modal-bg").toggleClass("thank-modal-bg-active");
    return false;
  });

  $(".thank-modal-link").click(function () {
    $(".scroll").toggleClass("scroll-hidden");
    return false;
  });

  $(".thank-modal-close").click(function () {
    $(".thank-modal-bg").toggleClass("thank-modal-bg-active");
    return false;
  });

  $(".thank-modal-close").click(function () {
    $(".scroll").toggleClass("scroll-hidden");
    return false;
  });

  $(".thank-modal-link_form").click(function () {
    $(".thank-modal-bg").toggleClass("thank-modal-bg-active");
    return false;
  });

  $(".thank-modal-link_form").click(function () {
    $(".modal-bg").toggleClass("modal-bg-active");
    return false;
  });


  $('.input-phone').mask('+7 (000) 000-00-00');
  new WOW().init();
});

