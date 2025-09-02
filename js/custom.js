$(document).ready(function () {
  if ($(".rustic-slider").length > 0) {
    const swiper = new Swiper(".rustic-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: ".rustic-slider .swiperBtnPrev",
        nextEl: ".rustic-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 120,
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
    });
  }

  if ($(".contruction-slider").length > 0) {
    const swiper = new Swiper(".contruction-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        prevEl: ".contruction-slider .swiperBtnPrev",
        nextEl: ".contruction-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 120,
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
    });
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
                slidesPerView: 1.15,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1550: {
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
                slidesPerView: 1.15,
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
          slidesPerView: 1.15,
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
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

      // Привязка контекста для обработчиков
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
      this.minThumb.addEventListener("mousedown", (e) =>
        this.startDrag("min", e)
      );
      this.maxThumb.addEventListener("mousedown", (e) =>
        this.startDrag("max", e)
      );
      this.minThumb.addEventListener("touchstart", (e) =>
        this.startDrag("min", e)
      );
      this.maxThumb.addEventListener("touchstart", (e) =>
        this.startDrag("max", e)
      );
      this.minThumb.addEventListener("keydown", (e) =>
        this.handleKeyDown("min", e)
      );
      this.maxThumb.addEventListener("keydown", (e) =>
        this.handleKeyDown("max", e)
      );
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
      e.preventDefault();
      this.activeThumb = thumb;
      this[`${thumb}Thumb`].classList.add("price-range__thumb--active");

      // Добавляем обработчики
      document.addEventListener("mouseup", this.handleMouseUp);
      document.addEventListener("touchend", this.handleTouchEnd);
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("touchmove", this.handleTouchMove);
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
      this.drag(e.changedTouches[0]);
    }

    drag(e) {
      if (!this.activeThumb) return;

      e.preventDefault();
      const clientX = e.clientX;
      this.moveThumb(clientX);
    }

    moveThumb(clientX) {
      const rect = this.track.getBoundingClientRect();
      let newPos = ((clientX - rect.left) / rect.width) * 100;

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

        this[`${this.activeThumb}Thumb`].classList.remove(
          "price-range__thumb--active"
        );
        this.activeThumb = null;
      }
    }

    handleTrackClick(e) {
      const rect = this.track.getBoundingClientRect();
      const clickPos = ((e.clientX - rect.left) / rect.width) * 100;

      if (
        Math.abs(clickPos - this.minPosition) <
        Math.abs(clickPos - this.maxPosition)
      ) {
        this.activeThumb = "min";
        this.moveThumb(e.clientX);
      } else {
        this.activeThumb = "max";
        this.moveThumb(e.clientX);
      }
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

      newValue = Math.max(this.minValue, Math.min(this.maxValue, newValue));

      if (thumb === "min") {
        newValue = Math.min(
          newValue,
          this.getValueFromPosition(this.maxPosition) - 0.5
        );
        this.minPosition = this.getPositionFromValue(newValue);
      } else {
        newValue = Math.max(
          newValue,
          this.getValueFromPosition(this.minPosition) + 0.5
        );
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
});
