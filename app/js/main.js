$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow left"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow right"></img>',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    asNavFor: ".header__slider",
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 961,
        settings: "unslick",
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow left"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow right"></img>',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 721,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".holder__slider, .shop__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="arrow left"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="arrow right"></img>',
  });

  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // let summ =
  //   $(".nights").val() * $(".summ").data("nights") +
  //   ($(".guests").val() - 1) * $(".summ").data("guests");
  // $(".summ").html("$" + summ);

  // 1
  // изначальный просчёт цены по умолчанию
  var parents = $(this).parents(".holder-slider__info");
  let summ =
    $(".guests", parents).val() *
    $(".summ", parents).data("nights") *
    $(".nights", parents).val();
  $(".summ", parents).html("$" + summ.toFixed(0));

  // изменение цены при клике для каждого слайда
  $(".quantity-button").on("click", function () {
    var parents = $(this).parents(".slick-current");
    let summ =
      $(".guests", parents).val() *
      $(".summ", parents).data("nights") *
      $(".nights", parents).val();
    $(".summ", parents).html("$" + summ.toFixed(0));
  });

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn, .menu a").on("click", function () {
    $(".menu").toggleClass("active");
  });

  $(".menu a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  new WOW().init();
});

// 2

// $(".quantity-button").on("click", function () {
//   var parents = $(this).parents(".holder-slider__info");
//   let summ =
//     $(".summ", parents).data("nights")
//     * $(".nights", parents).val() *
//     $(".guests", parents).val();

//   $(".summ", parents).html("$" + summ);
// });

// // здесь рассчитывает сумму с исходными значениями !
// $(".quantity").each(function () {
//   var parents = $(this).parents(".holder-slider__info");
//   let summ =
//     $(".summ", parents).data("nights") * $(".nights", parents).val()  * $(".guests", parents).val();
//   $(".summ", parents).html("$" + summ);
// });
