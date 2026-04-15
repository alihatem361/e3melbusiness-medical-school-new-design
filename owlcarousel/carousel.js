$(document).ready(function () {
  function dataNumber($element, key, fallback) {
    var value = parseInt($element.data(key), 10);
    return isNaN(value) ? fallback : value;
  }

  function dataBoolean($element, key, fallback) {
    var value = $element.data(key);

    if (typeof value === "undefined") {
      return fallback;
    }

    if (typeof value === "boolean") {
      return value;
    }

    return String(value).toLowerCase() === "true";
  }

  $(".owl-carousel")
    .not(".team-carousel, .what-we-do-slider")
    .each(function () {
      var $owl = $(this);
      var margin = dataNumber($owl, "margin", 30);
      var tablet = dataNumber($owl, "tablet", 2);
      var mobile = dataNumber($owl, "mobile", 1);
      var desktop = dataNumber($owl, "desktop", 3);

      $owl.owlCarousel({
        items: desktop,
        loop: dataBoolean($owl, "loop", true),
        margin: margin,
        autoplay: dataBoolean($owl, "autoplay", false),
        autoplayTimeout: dataNumber($owl, "autoplay-timeout", 2500),
        rtl: dataBoolean($owl, "rtl", true),
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: mobile,
          },
          600: {
            items: tablet,
          },
          1300: {
            items: desktop,
          },
        },
      });

      $(".play").on("click", function () {
        $owl.trigger("play.owl.autoplay", [1000]);
      });

      $(".stop").on("click", function () {
        $owl.trigger("stop.owl.autoplay");
      });
    });

  $(".team-carousel").each(function () {
    var $carousel = $(this);

    $carousel.owlCarousel({
      items: dataNumber($carousel, "desktop", 4),
      loop: dataBoolean($carousel, "loop", true),
      margin: dataNumber($carousel, "margin", 20),
      autoplay: dataBoolean($carousel, "autoplay", false),
      rtl: dataBoolean($carousel, "rtl", true),
      autoplayTimeout: dataNumber($carousel, "autoplay-timeout", 2500),
      autoplayHoverPause: true,
      nav: dataBoolean($carousel, "nav", false),
      dots: dataBoolean($carousel, "dots", true),
      navContainer: $carousel.data("nav-container") || false,
      navText: [
        '<i class="fas fa-arrow-left" aria-hidden="true"></i>',
        '<i class="fas fa-arrow-right" aria-hidden="true"></i>',
      ],
      responsive: {
        0: {
          items: dataNumber($carousel, "mobile", 1),
        },
        600: {
          items: dataNumber($carousel, "tablet", 2),
        },
        1300: {
          items: dataNumber($carousel, "desktop", 4),
        },
      },
    });
  });
});
