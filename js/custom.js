$(document).ready(function () {
  if ($(".picture-slider").length > 0) {
    const sliders = document.querySelectorAll(".picture-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find(".picture-slider .next")[0];
          navPrev = $(slider).closest('section').find(".picture-slider .prev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 26,
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1201: {
                spaceBetween: 26
              }
            },
            navigation: {
              nextEl: navNext,
              prevEl: navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".reviews__slider").length > 0) {
    const sliders = document.querySelectorAll(".reviews__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find(".reviews__slider .next")[0];
          navPrev = $(slider).closest('section').find(".reviews__slider .prev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 26,
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              769: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1201: {
                spaceBetween: 26
              }
            },
            navigation: {
              nextEl: navNext,
              prevEl: navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".full-pic__slider").length > 0) {
    const sliders = document.querySelectorAll(".full-pic__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find(".full-pic__slider .swiperBtnNext")[0];
          navPrev = $(slider).closest('section').find(".full-pic__slider .swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 300,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              769: {
                // spaceBetween: 16,
              },
              1201: {
                spaceBetween: 300
              }
            },
            navigation: {
              nextEl: navNext,
              prevEl: navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".special-slider").length > 0) {
    const sliders = document.querySelectorAll(".special-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find(".special-slider .swiperBtnNext--dark")[0];
          navPrev = $(slider).closest('section').find(".special-slider .swiperBtnPrev--dark")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            speed: 1000,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              769: {
                // spaceBetween: 16,
              },
              1201: {
                spaceBetween: 86
              }
            },
            navigation: {
              nextEl: navNext,
              prevEl: navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".technologia-slider").length > 0) {
    const sliders = document.querySelectorAll(".technologia-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find(".technologia__block .swiperBtnNext")[0];
          navPrev = $(slider).closest('section').find(".technologia__block .swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1.1,
            spaceBetween: 24,
            speed: 1000,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              769: {
                // spaceBetween: 16,
              },
              1201: {
                slidesPerView: 1.1,
                spaceBetween: 24
              }
            },
            navigation: {
              nextEl: navNext,
              prevEl: navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".hero-block__slider ").length > 0) {

    const swiper = new Swiper(".hero-block__slider .swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 500,
      navigation: {
        prevEl: ".hero-block__slider  .swiperBtnPrev",
        nextEl: ".hero-block__slider  .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 120,
          autoplay: false,
        },
      },
    });
  }


  if ($(".rustic-slider").length > 0) {
    let lastIndex;
    const swiper = new Swiper(".rustic-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 500,
      navigation: {
        prevEl: ".rustic-slider .swiperBtnPrev",
        nextEl: ".rustic-slider .swiperBtnNext",
      },
      pagination: {
        el: $('.rustic-slider .slider-nav').find('.slider-dots')[0],
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 120,
          autoplay: false,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 180,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 280,
        },
        1550: {
          slidesPerView: 1,
          spaceBetween: 175,
        },
        1800: {
          slidesPerView: 1,
          spaceBetween: 180,
        },
      },

      on: {
        activeIndexChange: function(q) {
          var $zeroEl = $('.rustic-slider .slider-nav'),
              $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+1)+')'),
              $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+2)+')'),
              activeBulPos = $activeBull.position().left;
          if($prevActiveBull.length > 0) {
            var prevActiveBulPos = $prevActiveBull.position().left;
          }

          if(activeBulPos > center) {
            $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft  - center;
          }
          if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex+1) {
            $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft  - 15 - center;
          }
          lastIndex = q.activeIndex+1;
        }
      }
    });
    if($('.rustic-slider .slider-nav').find('.slider-dots .swiper-pagination-bullet:nth-child(2)').length > 0) {
      var center = $('.rustic-slider .slider-nav').find('.slider-dots .swiper-pagination-bullet:nth-child(2)').position().left;
    }
  }

  if ($(".contruction-slider").length > 0) {
    let lastIndex;
    const swiper = new Swiper(".contruction-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 500,
      navigation: {
        prevEl: ".contruction-slider .swiperBtnPrev",
        nextEl: ".contruction-slider .swiperBtnNext",
      },
      pagination: {
        el: $('.contruction-slider .slider-nav').find('.slider-dots')[0],
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 120,
          autoplay: false,
        },
        1200: {
          slidesPerView: 1,
          spaceBetween: 180,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 280,
        },
        1550: {
          slidesPerView: 1,
          spaceBetween: 175,
        },
        1800: {
          slidesPerView: 1,
          spaceBetween: 180,
        },
      },
      on: {
        activeIndexChange: function(q) {
          var $zeroEl = $('.contruction-slider .slider-nav'),
              $activeBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+1)+')'),
              $prevActiveBull = $zeroEl.find('.swiper-pagination-bullet:nth-child('+(+q.activeIndex+2)+')'),
              activeBulPos = $activeBull.position().left;
          if($prevActiveBull.length > 0) {
            var prevActiveBulPos = $prevActiveBull.position().left;
          }

          if(activeBulPos > center) {
            $zeroEl.find('.slider-dots')[0].scrollLeft = activeBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft  - center;
          }
          if ($prevActiveBull.length > 0 && lastIndex > q.activeIndex+1) {
            $zeroEl.find('.slider-dots')[0].scrollLeft = prevActiveBulPos + $zeroEl.find('.slider-dots')[0].scrollLeft  - 15 - center;
          }
          lastIndex = q.activeIndex+1;
        }
      }
    });
    if($('.contruction-slider .slider-nav').find('.slider-dots .swiper-pagination-bullet:nth-child(2)').length > 0) {
      var center = $('.contruction-slider .slider-nav').find('.slider-dots .swiper-pagination-bullet:nth-child(2)').position().left;
    }
  }

  if ($(".news-slider:not(.news-slider-detail):not(.news-slider-text-detail):not(#sales-news)").length > 0) {
    const sliders = document.querySelectorAll(".news-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }
  if ($(".news-slider-detail").length > 0) {
    const sliders = document.querySelectorAll(".news-slider-detail");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find("#news-slider-detail-controls .swiperBtnNext")[0];
          navPrev = $(slider).closest('section').find("#news-slider-detail-controls .swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
              0: {
                      slidesPerView: 1.1,
                      spaceBetween: 10,
                    },
                    550: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    769: {
                      spaceBetween: 16,
                    },
                    1201: {
                      spaceBetween: 24
                    }
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }
  if ($(".news-slider-text-detail").length > 0) {
    const sliders = document.querySelectorAll(".news-slider-text-detail");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find("#news-slider-text-detail-controls .swiperBtnNext")[0];
          navPrev = $(slider).closest('section').find("#news-slider-text-detail-controls .swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                spaceBetween: 10,
              },
              650: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              769: {
                spaceBetween: 16,
              },
              1201: {
                spaceBetween: 24
              }
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($("#sales-news").length > 0) {
    const sliders = document.querySelectorAll("#sales-news");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).closest('section').find("#sales-slider-detail-controls .swiperBtnNext")[0];
          navPrev = $(slider).closest('section').find("#sales-slider-detail-controls .swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              769: {
                spaceBetween: 20,
              },
              1201: {
                spaceBetween: 24
              }
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".rutube-reviews-slider").length > 0) {
    const sliders = document.querySelectorAll(".rutube-reviews-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(".rutube-reviews").find(".swiperBtnNext")[0];
          navPrev = $(".rutube-reviews").find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

    if ($(".news-slider-text").length > 0) {
    const sliders = document.querySelectorAll(".news-slider-text");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 24,
            breakpoints: {
              0: {
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1550: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }



  if ($(".leisure-slider").length > 0) {
    const sliders = document.querySelectorAll(".leisure-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(".leisure").find(".swiperBtnNext")[0];
          navPrev = $(".leisure").find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1.1,
                spaceBetween: 11,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".hang-slider").length > 0) {
    const sliders = document.querySelectorAll(".hang-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(".hang").find(".swiperBtnNext")[0];
          navPrev = $(".hang").find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 2,
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".detail-home-slider").length > 0) {
    const sliders = document.querySelectorAll(".detail-home-slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 500,
            on: {
              init: function () {
                updateSliderCounter(this);
              },
              slideChange: function () {
                updateSliderCounter(this);
              },
            },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    function updateSliderCounter(swiper) {
      let parents = $(swiper.wrapperEl).parents(".swiper");

      let currentSlide = parents.find(".curent-slide")[0];
      let totalSlides = parents.find(".total-slide")[0];

      if (currentSlide && totalSlides) {
        currentSlide.textContent = swiper.realIndex + 1;
        totalSlides.textContent = swiper.slides.length;
      }
    }

    sliders.length && sliderinit();
  }

  if ($(".projects-slider").length > 0) {
    const swiper = new Swiper(".projects-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation: {
        prevEl: ".projects .swiperBtnPrev",
        nextEl: ".projects .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // 768: {
        //   slidesPerView: 2,
        //   spaceBetween: 20,
        // },
        // 1200: {
        //   slidesPerView: 3,
        //   spaceBetween: 20,
        // },
      },
    });
  }

  // if ($(".projects-slider").length > 0) {
  //   const sliders = document.querySelectorAll(".projects-slider");
  //   let mySwipers = [];

  //   function sliderinit() {
  //     sliders.forEach((slider, index) => {
  //       let navNext = undefined;
  //       let navPrev = undefined;

  //       if (!slider.swiper) {
  //         navNext = $(".projects").find(".swiperBtnNext")[0];
  //         navPrev = $(".projects").find(".swiperBtnPrev")[0];

  //         mySwipers[index] = new Swiper(slider, {
  //           slidesPerView: 3,
  //           spaceBetween: 20,
  //           breakpoints: {
  //             0: {
  //               slidesPerView: 1.15,
  //               spaceBetween: 16,
  //             },
  //             640: {
  //               slidesPerView: 2,
  //               spaceBetween: 20,
  //             },
  //             768: {
  //               slidesPerView: 2,
  //               spaceBetween: 20,
  //             },
  //             1200: {
  //               slidesPerView: 3,
  //               spaceBetween: 20,
  //             },
  //           },
  //           navigation: {
  //             nextEl: navNext && navNext,
  //             prevEl: navPrev && navPrev,
  //           },
  //         });
  //       } else {
  //         return;
  //       }
  //     });
  //   }

  //   sliders.length && sliderinit();
  // }

  // КАСТОМНЫЙ SELECT - DROPDOWN
  const customSelects = document.querySelectorAll(
    ".projects-navigation__item.custom-select"
  );

  customSelects.forEach((select) => {
    const head = select.querySelector(".custom-select__head");
    const options = select.querySelector(".custom-select__options");
    const items = select.querySelectorAll(".custom-select__item");

    // Обработчик клика по родительскому элементу
    select.addEventListener("click", function (e) {
      // Проверяем, что клик не по самому пункту меню
      if (!e.target.classList.contains("custom-select__item")) {
        e.stopPropagation();
        options.classList.toggle("--open");
        head.classList.toggle("--active");
      }
    });

    // Обработчики клика по пунктам
    items.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.stopPropagation();

        // Обновляем текст в заголовке
        head.textContent = this.textContent;

        // Закрываем выпадающее меню
        options.classList.remove("--open");
        head.classList.remove("--active");

        // Получаем выбранное значение
        const selectedFloor = this.getAttribute("data-floor");
        console.log("Выбрано этажей:", selectedFloor);

        // Помечаем выбранный пункт (опционально)
        items.forEach((i) => i.classList.remove("--selected"));
        this.classList.add("--selected");
      });
    });

    // Закрытие при клике вне селекта
    document.addEventListener("click", function () {
      options.classList.remove("--open");
      head.classList.remove("--active");
    });
  });

  // КАСТОМНЫЙ ЧЕКБОКС - ПЕРЕКЛЮЧАТЕЛЬ
  const checkboxes = document.querySelectorAll(".custom-checkbox");

  checkboxes.forEach((checkbox) => {
    const checker = checkbox.querySelector(".custom-checkbox__checker");

    checker.addEventListener("click", function (e) {
      e.stopPropagation(); // Предотвращаем всплытие
      checkbox.classList.toggle("--active");

      // Можно добавить обработку состояния
      console.log(
        "Состояние:",
        checkbox.classList.contains("--active") ? "активно" : "неактивно"
      );
    });

    // Обработчик для клика по всему элементу (опционально)
    checkbox.addEventListener("click", function () {
      if (e.target !== checker) {
        checkbox.classList.toggle("--active");
      }
    });
  });

  // КАСТОМНЫЙ RANGE
  class PriceRange {
    constructor(container) {
      this.container = container;
      this.minValue = 3;
      this.maxValue = 30;
      this.minPosition = 0;
      this.maxPosition = 100;
      this.activeThumb = null;

      // Привязка контекста
      this.handleMouseUp = this.handleMouseUp.bind(this);
      this.handleTouchEnd = this.handleTouchEnd.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleTouchMove = this.handleTouchMove.bind(this);

      this.initElements();
      this.initEvents();
      this.update();
    }

    initElements() {
      this.track = this.container.querySelector(".price-range__track");
      this.progress = this.container.querySelector(".price-range__progress");
      this.minWrapper = this.container.querySelector(
          ".price-range__thumb-wrapper--min"
      );
      this.maxWrapper = this.container.querySelector(
          ".price-range__thumb-wrapper--max"
      );
      this.minThumb = this.minWrapper.querySelector(".price-range__thumb");
      this.maxThumb = this.maxWrapper.querySelector(".price-range__thumb");
      this.minValueDisplay = this.minWrapper.querySelector(
          ".price-range__thumb-value"
      );
      this.maxValueDisplay = this.maxWrapper.querySelector(
          ".price-range__thumb-value"
      );
      this.minInput = this.container.querySelector('input[name="min_price"]');
      this.maxInput = this.container.querySelector('input[name="max_price"]');
    }

    initEvents() {
      // Мышь
      this.minThumb.addEventListener("mousedown", (e) => this.startDrag("min", e));
      this.maxThumb.addEventListener("mousedown", (e) => this.startDrag("max", e));

      // Касание — важно: passive: false, чтобы можно было вызвать preventDefault
      this.minThumb.addEventListener("touchstart", (e) => this.startDrag("min", e), { passive: false });
      this.maxThumb.addEventListener("touchstart", (e) => this.startDrag("max", e), { passive: false });

      // Клавиатура
      this.minThumb.addEventListener("keydown", (e) => this.handleKeyDown("min", e));
      this.maxThumb.addEventListener("keydown", (e) => this.handleKeyDown("max", e));

      // Клик по треку
      this.track.addEventListener("click", (e) => this.handleTrackClick(e));
    }

    formatValue(value) {
      if (Number.isInteger(value)) {
        return `${value} млн.`;
      } else {
        const formatted = value.toFixed(1);
        return formatted.endsWith(".0")
            ? `${formatted.split(".")[0]} млн.`
            : `${formatted} млн.`;
      }
    }

    getValueFromPosition(position) {
      const value =
          this.minValue + (this.maxValue - this.minValue) * (position / 100);
      return Math.round(value * 10) / 10;
    }

    getPositionFromValue(value) {
      return ((value - this.minValue) / (this.maxValue - this.minValue)) * 100;
    }

    startDrag(thumb, e) {
      e.preventDefault(); // ← предотвращаем скролл/зум на мобильных
      this.activeThumb = thumb;
      this[`${thumb}Thumb`].classList.add("price-range__thumb--active");

      // Добавляем глобальные обработчики
      document.addEventListener("mouseup", this.handleMouseUp);
      document.addEventListener("touchend", this.handleTouchEnd);
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("touchmove", this.handleTouchMove, { passive: false });
    }

    handleMouseUp() {
      this.endDrag();
    }

    handleTouchEnd() {
      this.endDrag();
    }

    handleMouseMove(e) {
      this.drag(e);
    }

    handleTouchMove(e) {
      e.preventDefault(); // ← критично: предотвращаем скролл страницы при перетаскивании
      const touch = e.changedTouches[0];
      this.drag(touch);
    }

    drag(e) {
      if (!this.activeThumb) return;

      const clientX = e.clientX; // ← работает и для MouseEvent, и для Touch
      this.moveThumb(clientX);
    }

    moveThumb(clientX) {
      const rect = this.track.getBoundingClientRect();
      let newPos = ((clientX - rect.left) / rect.width) * 100;

      // Ограничиваем позицию и не даём ползункам пересекаться
      if (this.activeThumb === "min") {
        newPos = Math.max(0, Math.min(newPos, this.maxPosition - 5));
        this.minPosition = newPos;
      } else {
        newPos = Math.min(100, Math.max(newPos, this.minPosition + 5));
        this.maxPosition = newPos;
      }

      this.update();
    }

    endDrag() {
      if (this.activeThumb) {
        // Удаляем обработчики
        document.removeEventListener("mouseup", this.handleMouseUp);
        document.removeEventListener("touchend", this.handleTouchEnd);
        document.removeEventListener("mousemove", this.handleMouseMove);
        document.removeEventListener("touchmove", this.handleTouchMove);

        this[`${this.activeThumb}Thumb`].classList.remove("price-range__thumb--active");
        this.activeThumb = null;
      }
    }

    handleTrackClick(e) {
      e.preventDefault(); // ← предотвращаем возможный скролл
      const rect = this.track.getBoundingClientRect();
      const clickPos = ((e.clientX - rect.left) / rect.width) * 100;

      // Определяем, какой ползунок ближе к клику
      if (
          Math.abs(clickPos - this.minPosition) <
          Math.abs(clickPos - this.maxPosition)
      ) {
        this.activeThumb = "min";
      } else {
        this.activeThumb = "max";
      }

      this.moveThumb(e.clientX);
    }

    handleKeyDown(thumb, e) {
      const step = 0.5;
      let newValue;

      if (thumb === "min") {
        newValue = this.getValueFromPosition(this.minPosition);
      } else {
        newValue = this.getValueFromPosition(this.maxPosition);
      }

      switch (e.key) {
        case "ArrowLeft":
        case "ArrowDown":
          newValue -= step;
          e.preventDefault();
          break;
        case "ArrowRight":
        case "ArrowUp":
          newValue += step;
          e.preventDefault();
          break;
        case "Home":
          newValue = this.minValue;
          e.preventDefault();
          break;
        case "End":
          newValue = this.maxValue;
          e.preventDefault();
          break;
        default:
          return;
      }

      // Ограничиваем диапазон
      newValue = Math.max(this.minValue, Math.min(this.maxValue, newValue));

      // Не даём ползункам пересекаться
      if (thumb === "min") {
        const maxVal = this.getValueFromPosition(this.maxPosition);
        newValue = Math.min(newValue, maxVal - 0.5);
        this.minPosition = this.getPositionFromValue(newValue);
      } else {
        const minVal = this.getValueFromPosition(this.minPosition);
        newValue = Math.max(newValue, minVal + 0.5);
        this.maxPosition = this.getPositionFromValue(newValue);
      }

      this.update();
    }

    update() {
      this.minWrapper.style.left = `${this.minPosition}%`;
      this.maxWrapper.style.left = `${this.maxPosition}%`;
      this.progress.style.left = `${this.minPosition}%`;
      this.progress.style.right = `${100 - this.maxPosition}%`;

      const currentMin = this.getValueFromPosition(this.minPosition);
      const currentMax = this.getValueFromPosition(this.maxPosition);

      this.minValueDisplay.textContent = this.formatValue(currentMin);
      this.maxValueDisplay.textContent = this.formatValue(currentMax);
      this.minInput.value = currentMin;
      this.maxInput.value = currentMax;

      // Уведомляем внешний код об изменении
      this.container.dispatchEvent(
          new CustomEvent("change", {
            detail: {
              min: currentMin,
              max: currentMax,
            },
          })
      );
    }
  }

  // Инициализация всех ползунков на странице
  document.querySelectorAll(".price-range").forEach((container) => {
    new PriceRange(container);
  });

  // КАРТА

  if ($("#yandex-map").length > 0) {
    ymaps.ready(init);

    function init() {
      // Создаем карту с центром в Москве
      var map = new ymaps.Map("yandex-map", {
        center: [55.751574, 37.573856], // Координаты Москвы
        zoom: 10,
        controls: ["fullscreenControl"],
      });

      // Отключаем зуммирование
      map.behaviors.disable([
        "scrollZoom",
        "dblClickZoom",
        "multiTouchZoom",
        "rightMouseButtonMagnifier",
      ]);

      // Base64-изображение маркера (пример с красным маркером)
      var base64Icon =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjExOCIgdmlld0JveD0iMCAwIDEwNyAxMTgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjEwIiB5PSIxNSIgd2lkdGg9Ijg1IiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTAuNSAxMThDNTAuNSAxMTEuMiA0MS44MzMzIDEwNy44MzMgMzcuNSAxMDdINjNDNTMgMTA4LjYgNTAuNSAxMTUgNTAuNSAxMThaIiBmaWxsPSIjRjU5RTExIi8+CjxwYXRoIGQ9Ik05MC45NDkyIDBDOTkuODEyMyAwIDEwNyA3LjE4NjcxIDEwNyAxNi4wNDk4VjkwLjk0OTJDMTA3IDk5LjgxMjQgOTkuODEyNCAxMDcgOTAuOTQ5MiAxMDdIMTYuMDUwOEM3LjE4NzU5IDEwNyAwIDk5LjgxMjQgMCA5MC45NDkyVjE2LjA0OThDMC4wMDAxMDkzODIgNy4xODY3MSA3LjE4NzY2IDAgMTYuMDUwOCAwSDkwLjk0OTJaTTU5LjExMzMgODAuMDA5OEM1OS4wNzU1IDgwLjYwNjIgNTguOTkyIDgwLjkzMDcgNTguNzA1MSA4MS4xNTcySDU4LjQxODlWODIuOTE2SDU5LjQwMDRWODIuMDU1N0g2Mi4wNDJWODIuOTE2SDYzLjAyMzRWODEuMTU3Mkg2Mi40ODgzVjc3LjY3NjhINTkuMjU2OEw1OS4xMTMzIDgwLjAwOThaTTI2Ljg0NjcgNzcuNTcxM0MyNS42NTc2IDc3LjU3MTMgMjQuODc5NiA3OC4zMjc5IDI0Ljc4NzEgNzkuNjA0NUwyNC43NzczIDc5Ljg4MThDMjQuNzc3NCA4MS4zMTYxIDI1Ljc4MjIgODIuMTc2OCAyNi44NDY3IDgyLjE3NjhDMjcuOTExIDgyLjE3NjYgMjguNjY1OCA4MS40OTcgMjguNzcxNSA4MC41MTU2SDI3LjcwN0MyNy42MDEzIDgwLjk2ODYgMjcuNDE5NyA4MS4yNTU5IDI2LjgyMzIgODEuMjU1OUMyNi4yMzQ2IDgxLjI1NTYgMjUuODY1MyA4MC43NDIyIDI1Ljg2NTIgNzkuODgxOEMyNS44NjUyIDc5LjAyMTQgMjYuMzcwNCA3OC41MDgxIDI2LjgyMzIgNzguNTA3OEMyNy4yNzYxIDc4LjUwNzggMjcuNjIzOSA3OC43OTQzIDI3LjcwNyA3OS4yNDcxSDI4Ljc3MTVDMjguNjg4MyA3OC4yNjU5IDI4LjExNDYgNzcuNTcxNCAyNi44NDY3IDc3LjU3MTNaTTU0Ljk1MzEgNzcuNTcxM0M1My43NjQyIDc3LjU3MTQgNTIuOTg3MSA3OC4zMjggNTIuODk0NSA3OS42MDQ1TDUyLjg4NDggNzkuODgxOEM1Mi44ODQ5IDgxLjMxNiA1My44ODg4IDgyLjE3NjYgNTQuOTUzMSA4Mi4xNzY4QzU2LjAxNzYgODIuMTc2OCA1Ni43NzMyIDgxLjQ5NzEgNTYuODc4OSA4MC41MTU2SDU1LjgxNDVDNTUuNzA4OCA4MC45Njg2IDU1LjUyNzEgODEuMjU1OSA1NC45MzA3IDgxLjI1NTlDNTQuMzQxOSA4MS4yNTU4IDUzLjk3MTcgODAuNzQyMyA1My45NzE3IDc5Ljg4MThDNTMuOTcxNyA3OS4wMjEyIDU0LjQ3NzcgNzguNTA3OSA1NC45MzA3IDc4LjUwNzhDNTUuMzgzNSA3OC41MDc4IDU1LjczMTMgNzguNzk0MyA1NS44MTQ1IDc5LjI0NzFINTYuODc4OUM1Ni43OTU4IDc4LjI2NTggNTYuMjIxMyA3Ny41NzEzIDU0Ljk1MzEgNzcuNTcxM1pNMzkuMDkxOCA3Ny41OTM4QzM3LjgwMDkgNzcuNTkzOCAzNi45ODU0IDc4LjQ1NDYgMzYuOTg1NCA3OS44NjYyQzM2Ljk4NTQgODEuMjc4IDM3LjgwMDggODIuMTM4NyAzOS4wOTE4IDgyLjEzODdDNDAuMzgyOCA4Mi4xMzg3IDQxLjE5ODIgODEuMjU1MyA0MS4xOTgyIDc5Ljg2NjJDNDEuMTk4MSA3OC40NzcyIDQwLjM3NTEgNzcuNTkzOCAzOS4wOTE4IDc3LjU5MzhaTTc1LjYxNjIgNzcuNTkzOEM3NC4zMjU0IDc3LjU5MzggNzMuNTA5OSA3OC40NTQ2IDczLjUwOTggNzkuODY2MkM3My41MDk4IDgxLjI3NzkgNzQuMzI1MyA4Mi4xMzg2IDc1LjYxNjIgODIuMTM4N0M3Ni45MDcyIDgyLjEzODcgNzcuNzIyNyA4MS4yNTUzIDc3LjcyMjcgNzkuODY2MkM3Ny43MjI2IDc4LjQ3NzIgNzYuODk5NiA3Ny41OTM4IDc1LjYxNjIgNzcuNTkzOFpNNjQuNTkzOCA4MC45MjM4QzY0LjQ1MDMgODEuMTM0OCA2NC4yMjQgODEuMTcyOSA2NC4wNDMgODEuMTcyOUM2My44NjE4IDgxLjE3MjggNjMuNzc4MyA4MS4xNTA0IDYzLjc3ODMgODEuMTUwNFY4Mi4wMzMyQzYzLjc2MzEgODIuMDM0OSA2My4zODgxIDgyLjA3ODEgNjQuMjE2OCA4Mi4wNzgxQzY1LjA2MjMgODIuMDc4MSA2NS40NzAxIDgxLjYyNTEgNjUuODE3NCA4MC43ODcxTDY3LjEyMyA3Ny42NTQzSDY1Ljk3NTZMNjUuMTk4MiA3OS44ODg3SDY1LjE3NThMNjQuMzUyNSA3Ny42NTQzSDYzLjIwNTFMNjQuNTkzOCA4MC45MjM4Wk0yOS4wNTg2IDc4LjU3NTJIMzAuMjQzMlY4Mi4wNTU3SDMxLjMzMTFWNzguNTc1MkgzMi41MTU2Vjc3LjY3NjhIMjkuMDU4NlY3OC41NzUyWk0zMy4wOTc3IDgyLjA1NTdIMzQuMTg0NlY4MC43NjQ2SDM0LjkwMTRDMzUuODQ1IDgwLjc2NDYgMzYuNTAxOSA4MC4xNzYgMzYuNTAyIDc5LjIzMjRDMzYuNTAyIDc4LjI4ODcgMzUuODkwOCA3Ny42NzY4IDM0Ljk2OTcgNzcuNjc2OEgzMy4wOTc3VjgyLjA1NTdaTTQxLjc4NzEgODIuMDU1N0g0Mi44MzU5TDQ0LjU3MjMgNzkuMzc2SDQ0LjYxODJWODIuMDU1N0g0NS42OTczVjc3LjY3NjhINDQuNjU1M0w0Mi45MTIxIDgwLjM1NzRINDIuODc0Vjc3LjY3NjhINDEuNzg3MVY4Mi4wNTU3Wk00Ni4zOTI2IDgyLjA1NTdINDcuMzU4NFY3OS4zMTU0SDQ3LjM4MDlMNDguNDIyOSA4MS45OTUxSDQ5LjA1NzZMNTAuMDk4NiA3OS4zMTU0SDUwLjEyMjFWODIuMDU1N0g1MS4wODAxVjc3LjY3NjhINDkuODM1TDQ4Ljc0OCA4MC40Nzc1SDQ4LjczMjRMNDcuNjQ1NSA3Ny42NzY4SDQ2LjM5MjZWODIuMDU1N1pNNjcuNTg0IDgyLjA1NTdINzIuOTA2MlY3Ny42NzY4SDcxLjgyNjJWODEuMTU3Mkg3MC43NzczVjc3LjY3NjhINjkuNzEyOVY4MS4xNTcySDY4LjY3MDlWNzcuNjc2OEg2Ny41ODRWODIuMDU1N1pNNzguMzE5MyA3Ny42NzY4VjgyLjA1NTdINzkuMzYxM0w4MS4wOTc3IDc5LjM3Nkg4MS4xMjAxVjgyLjA1NTdIODIuMjA3Vjc3LjY3NjhIODEuMTY1TDc5LjQyODcgODAuMzU3NEg3OS40MDYyVjc3LjY3NjhINzguMzE5M1pNMzkuMDg0IDc4LjQ5MjJDMzkuNjk1NCA3OC40OTIyIDQwLjA4NzggNzkuMDUxIDQwLjA4NzkgNzkuODY2MkM0MC4wODc5IDgwLjY4OTEgMzkuNjk1NSA4MS4yMTc4IDM5LjA4NCA4MS4yMTc4QzM4LjQ2NTEgODEuMjE3NiAzOC4wODAxIDgwLjcwNDEgMzguMDgwMSA3OS44NjYyQzM4LjA4MDIgNzkuMDI4NSAzOC40NzI3IDc4LjQ5MjMgMzkuMDg0IDc4LjQ5MjJaTTc1LjYwODQgNzguNDkyMkM3Ni4yMTk4IDc4LjQ5MjIgNzYuNjEzMiA3OS4wNTEgNzYuNjEzMyA3OS44NjYyQzc2LjYxMzMgODAuNjg5MSA3Ni4yMTk5IDgxLjIxNzggNzUuNjA4NCA4MS4yMTc4Qzc0Ljk4OTYgODEuMjE3NiA3NC42MDQ1IDgwLjcwNCA3NC42MDQ1IDc5Ljg2NjJDNzQuNjA0NiA3OS4wMjg1IDc0Ljk5NzIgNzguNDkyNCA3NS42MDg0IDc4LjQ5MjJaTTYxLjQwMDQgODEuMTU3MkM2MS4zNzU4IDgxLjE1NzIgNTkuODI2NSA4MS4xNTcyIDU5LjgyMzIgODEuMTM0OEM1OS45ODkyIDgwLjkzMSA2MC4wNzIxIDgwLjYwNjMgNjAuMDk0NyA4MC4xMDg0TDYwLjE5MjQgNzguNTc1Mkg2MS40MDA0VjgxLjE1NzJaTTM0LjY4MjYgNzguNTM4MUMzNS4xNTgyIDc4LjUzODEgMzUuNDIyOSA3OC43Nzk0IDM1LjQyMjkgNzkuMjMyNEMzNS40MjI4IDc5LjY4NTMgMzUuMTUwNiA3OS45MjY4IDM0LjY4MjYgNzkuOTI2OEgzNC4xOTI0Vjc4LjUzODFIMzQuNjgyNlpNNzkuMTc5NyA3Ni40ODQ0Qzc5LjE3OTcgNzcuMDgwNiA3OS42MzI3IDc3LjQ1IDgwLjI2NjYgNzcuNDUwMkM4MC45MDA3IDc3LjQ1MDIgODEuMzU0NCA3Ny4wODA3IDgxLjM1NDUgNzYuNDg0NEg4MC43NDIyQzgwLjc0MjEgNzYuNzcxMiA4MC41Mzg2IDc2LjkzNzUgODAuMjc0NCA3Ni45Mzc1QzgwLjAxMDMgNzYuOTM3NCA3OS44MDY3IDc2Ljc3MTEgNzkuODA2NiA3Ni40ODQ0SDc5LjE3OTdaTTMwLjA2MjUgMzguNTg1OVYzMi4zNzk5SDI0Ljc3MDVWNDEuNzQxMkwxNi4wMjczIDQ2Ljg5NzVMMTguNjY5OSA1MS41ODU5TDI0Ljc3MDUgNDcuOTg0NFY3NS4wNDk4SDMwLjA1NDdWNjMuNjA0NUgzNC43MDUxVjc1LjA0OThINTAuNTUxOFY0Ny45ODQ0SDM0LjcwNTFWNTkuMjEwOUgzMC4wNTQ3VjQ0Ljg1OTRMNTMuNDk2MSAzMC4zODY3TDgyLjIyMjcgNDcuOTY5N0g2Ni4zNzZWNTcuMTQyNkw2Mi4yMzgzIDYxLjM3NzlMNjYuMzc2IDY1LjYxMzNWNzUuMDExN0g4Mi4yMjk1VjQ3Ljk0NzNMODguMzMwMSA1MS41NDc5TDkwLjk3MjcgNDYuODU5NEw1My41MDM5IDI0LjExMzNMMzAuMDYyNSAzOC41ODU5Wk01NS44MTQ1IDc1LjAyNzNINjEuMDk4NlY2Ni43NTI5TDU4LjAwMjkgNjMuNTgySDU1LjgxNDVWNzUuMDI3M1pNNDUuMjY3NiA2OS42MDY0SDM5Ljk4MjRWNTMuMzY3Mkg0NS4yNjc2VjY5LjYwNjRaTTc2Ljk0NTMgNjkuNjA2NEg3MS42NjAyVjUzLjM2NzJINzYuOTQ1M1Y2OS42MDY0Wk01NS44MTQ1IDU5LjE4MDdINTguMDAyOUw2MS4wOTg2IDU2LjAwOThWNDcuOTYxOUg1NS44MTQ1VjU5LjE4MDdaIiBmaWxsPSIjRjU5RTExIi8+Cjwvc3ZnPgo=";

      // Координаты Одинцово
      var odintsovoCoords = [55.677981, 37.277683];

      // [56.120156, 36.911632]; - координаты для квартал дачной застройки Журавли, 27/20, городской округ Солнечногорск.

      // Создаем кастомный маркер с base64 иконкой
      var customMarker = new ymaps.Placemark(
        odintsovoCoords,
        {
          hintContent: "Одинцово",
          balloonContent: "Город Одинцово",
        },
        {
          iconLayout: "default#image",
          iconImageHref: base64Icon,
          iconImageSize: [107, 118],
          iconImageOffset: [-53.5, -118],
        }
      );

      // Добавляем маркер на карту (балун не открывается автоматически)
      map.geoObjects.add(customMarker);

      // Если нужно открыть балун при клике на маркер:
      customMarker.events.add("click", function () {
        customMarker.balloon.open();
      });
    }
  }
  const $parallaxBlocks = $(".parallax-item");

  function parallaxEffect() {
    const scrollY = $(window).scrollTop();
    const windowHeight = $(window).height();

    $parallaxBlocks.each(function () {
      const $block = $(this);
      const blockOffsetTop = $block.offset().top;
      const blockHeight = $block.outerHeight();
      const $dragon = $block.find("img");

      if (scrollY + windowHeight > blockOffsetTop && scrollY < blockOffsetTop + blockHeight) {
        const progress = (scrollY + windowHeight - blockOffsetTop) / windowHeight;
        $dragon.css("transform", `translateY(${progress * 150}px)`);
      }
    });
  }

  let ticking = false;
  $(window).on("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        parallaxEffect();
        ticking = false;
      });
      ticking = true;
    }
  });

  parallaxEffect();

});
// Инициализация
// (function(){
//   // Параметры
//   var ENABLE_ON_MOBILE = false; // true чтобы включить и на мобайле
//   var MOBILE_MAX_WIDTH = 768;
//   var DEFAULT_SPEED = 60; // пикселей макс смещение (если data-speed не задан)
//
//   // DOM
//   var items = Array.prototype.slice.call(document.querySelectorAll('.parallax-item'));
//
//   if (!items.length) return;
//
//   // Состояние
//   var activeItems = new Set(); // элементы, которые сейчас в viewport (или рядом)
//   var latestScroll = window.scrollY || window.pageYOffset;
//   var winH = window.innerHeight;
//   var ticking = false;
//   var enabled = true;
//
//   // включаем/выключаем эффект на мобиле, если нужно
//   function checkEnabled() {
//     if (!ENABLE_ON_MOBILE && window.innerWidth <= MOBILE_MAX_WIDTH) {
//       enabled = false;
//       // сбросим трансформы
//       items.forEach(function(it){
//         var img = it.querySelector('.parallax-img');
//         if (img) img.style.transform = '';
//       });
//     } else {
//       enabled = true;
//     }
//   }
//
//   // IntersectionObserver — добавляет/удаляет элементы в activeItems
//   var ioOptions = {
//     root: null,
//     rootMargin: '200px 0px 200px 0px', // небольшой запас — чтобы начать эффект чуть раньше
//     threshold: [0, 0.01] // сигнал при появлении/исчезновении
//   };
//
//   var io = new IntersectionObserver(function(entries){
//     entries.forEach(function(entry){
//       var el = entry.target;
//       if (entry.isIntersecting) {
//         activeItems.add(el);
//       } else {
//         activeItems.delete(el);
//         // сброс трансформации, чтобы картинка вернулась в исходное положение
//         var img = el.querySelector('.parallax-img');
//         if (img) img.style.transform = '';
//       }
//     });
//     // если появились активные элементы, запустить рендер (если не запущен)
//     if (!ticking && activeItems.size > 0) {
//       ticking = true;
//       requestAnimationFrame(render);
//     }
//   }, ioOptions);
//
//   items.forEach(function(it){
//     io.observe(it);
//   });
//
//   // Скролл (passive) — сохраняет значение прокрутки и стартует rAF, если нужно
//   function onScroll() {
//     latestScroll = window.scrollY || window.pageYOffset;
//     if (!ticking && activeItems.size > 0 && enabled) {
//       ticking = true;
//       requestAnimationFrame(render);
//     }
//   }
//   window.addEventListener('scroll', onScroll, { passive: true });
//
//   // Resize — обновляем размеры окна и возможно переключаем включение
//   function onResize() {
//     winH = window.innerHeight;
//     checkEnabled();
//   }
//   window.addEventListener('resize', onResize, { passive: true });
//
//   // Основной рендер — обходит только activeItems
//   function render() {
//     if (!enabled) {
//       ticking = false;
//       return;
//     }
//
//     var winCenter = winH / 2;
//
//     // Обходим Set activeItems (обычно маленький)
//     activeItems.forEach(function(el){
//       var img = el.querySelector('.parallax-img');
//       if (!img) return;
//
//       var speedAttr = parseFloat(el.getAttribute('data-speed'));
//       var maxShift = isNaN(speedAttr) ? DEFAULT_SPEED : speedAttr;
//
//       // Используем getBoundingClientRect (cheap для малого числа элементов)
//       var rect = el.getBoundingClientRect();
//       var elCenter = rect.top + rect.height / 2;
//
//       // расстояние центра элемента от центра окна (px)
//       var distance = elCenter - winCenter;
//
//       // нормализуем в -1..1
//       var norm = distance / winCenter;
//       if (norm > 1) norm = 1;
//       if (norm < -1) norm = -1;
//
//       // переводим в смещение (обратите внимание на знак)
//       var translateY = - norm * maxShift;
//
//       // применяем GPU-ускоренный transform
//       img.style.transform = 'translate3d(0,' + translateY + 'px,0)';
//     });
//
//     // сбрасываем флаг — следующие изменения запустят рендер заново
//     ticking = false;
//   }
//
//   // инициализация
//   checkEnabled();
//   // первые проверки (иногда элементы уже в viewport)
//   latestScroll = window.scrollY || window.pageYOffset;
//   winH = window.innerHeight;
//   // запустим рендер, если есть активные
//   if (activeItems.size > 0 && enabled) {
//     requestAnimationFrame(render);
//   }
//
// })();
// $(function() {
//   var $win = $(window);
//   var $items = $('.parallax-item');
//
//   $win.on('scroll', function() {
//     var scrollTop = $win.scrollTop();
//     var winH = $win.height();
//
//     $items.each(function() {
//       var $el = $(this);
//       var $img = $el.find('.parallax-img');
//       var speed = parseFloat($el.data('speed')) || 0.3; // 0.2–0.5 = мягкий эффект
//       var offsetTop = $el.offset().top;
//       var elHeight = $el.outerHeight();
//
//       // Насколько элемент видим в окне
//       var visible = (scrollTop + winH) - offsetTop;
//       if (visible > 0 && visible < winH + elHeight) {
//         // Рассчёт смещения (просто пропорция)
//         var move = (scrollTop - offsetTop) * speed;
//         $img.css('transform', 'translateY(' + move + 'px)');
//       }
//     });
//   });
//
// });
// (function($){
//   var items = Array.prototype.slice.call(document.querySelectorAll('.parallax-item'));
//   if (!items.length) return;
//
//   // Подготовка: хранит maxShift (data-speed) и ссылку на img
//   items = items.map(function(el){
//     return {
//       el: el,
//       img: el.querySelector('.parallax-img'),
//       maxShift: parseFloat(el.getAttribute('data-speed')) || 60
//     };
//   });
//
//   var latestScroll = window.scrollY || window.pageYOffset;
//   var latestWinH = window.innerHeight;
//   var ticking = false;
//
//   function onScrollNative() {
//     latestScroll = window.scrollY || window.pageYOffset;
//     // запустить рендер, если ещё не запущен
//     if (!ticking) {
//       ticking = true;
//       requestAnimationFrame(render);
//     }
//   }
//
//   function onResize() {
//     latestWinH = window.innerHeight;
//     // при ресайзе лучше сразу обновить позицию
//     latestScroll = window.scrollY || window.pageYOffset;
//     if (!ticking) {
//       ticking = true;
//       requestAnimationFrame(render);
//     }
//   }
//
//   function render() {
//     // для каждого элемента получаем rect (cheap для 3 элементов) и считаем смещение
//     var winCenter = latestWinH / 2;
//     items.forEach(function(it){
//       var rect = it.el.getBoundingClientRect();
//       var elCenter = rect.top + rect.height / 2;
//       // расстояние центра элемента от центра окна (в px, положительное — элемент ниже центра окна)
//       var distance = elCenter - winCenter;
//       // нормируем в примерно -1..1
//       var norm = distance / winCenter;
//       // итоговое смещение: отрицательный, чтобы картинка двигалась «назад» при прокрутке вниз
//       var translateY = - norm * it.maxShift;
//       // применяем transform (GPU-accelerated)
//       it.img.style.transform = 'translate3d(0,' + translateY + 'px,0)';
//     });
//
//     ticking = false;
//   }
//
//   // passive scroll listener чтобы не блокировать wheel/touch
//   window.addEventListener('scroll', onScrollNative, { passive: true });
//   window.addEventListener('resize', onResize, { passive: true });
//
//   // инициализация сразу (если изображения уже загружены)
//   if (document.readyState === 'complete') {
//     latestWinH = window.innerHeight;
//     latestScroll = window.scrollY || window.pageYOffset;
//     requestAnimationFrame(render);
//   } else {
//     // если нужно — дождёмся load (чтобы размеры картинок уже были)
//     window.addEventListener('load', function(){
//       latestWinH = window.innerHeight;
//       latestScroll = window.scrollY || window.pageYOffset;
//       requestAnimationFrame(render);
//     }, { passive: true });
//   }
//
// })(jQuery);