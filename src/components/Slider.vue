 <!--<template>
  <div>
    <div class="slider shadow" style="background-color : #fff;">
      <div class="slider-inner">
        <div class="slide align-middle">
          <div class="slide__img">
            <button class="btn">Action</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Arcade</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn ">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn b-active">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Adventure</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
        <div class="slide">
          <div class="slide__img">
            <button class="btn">Sports</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->


 <!-- <script scoped> -->
// export default {
//   name: "Slider",
//   methods: {
//     draggableSlider() {
//       // DOM element(s)
//       let slider = document.querySelector(".slider"),
//         innerSlider = document.querySelector(".slider-inner");

//       // Slider variables
//       let pressed = false,
//         startX,
//         x;

//       // Mousedown eventlistener
//       slider.addEventListener("mousedown", (e) => {
//         pressed = true;
//         startX = e.offsetX - innerSlider.offsetLeft;
//         slider.style.cursor = "grabbing";
//       });

//       // mouseneter
//       slider.addEventListener("mouseenter", () => {
//         slider.style.cursor = "grab";
//       });

//       // mouseup
//       slider.addEventListener("mouseup", () => {
//         slider.style.cursor = "grab";
//       });

//       // window
//       window.addEventListener("mouseup", () => {
//         pressed = false;
//       });

//       // Slider mousemove event listener
//       slider.addEventListener("mousemove", (e) => {
//         if (!pressed) return;
//         e.preventDefault();

//         x = e.offsetX;

//         innerSlider.style.left = `${x - startX}px`;

//         checkBoundry();
//       });

//       // Check boundry of outer and inner sliders
//       function checkBoundry() {
//         let outer = slider.getBoundingClientRect(),
//           inner = innerSlider.getBoundingClientRect();

//         if (parseInt(innerSlider.style.left) > 0) {
//           innerSlider.style.left = "0px";
       <!-- } else if (inner.right < outer.right) { -->
//           innerSlider.style.left = `-${inner.width - outer.width}px`;
//         }
//       }
//     },
//   },
//   mounted: function () {
//     this.draggableSlider();
//   },
// };
 <!-- </script> -->

 <!-- <style scoped> -->
// .slider {
//   position: absolute;
//   left: 0;
//   top: 22%;
//   width: 100%;
//   height: 10vh;
//   overflow: hidden;
// }

// .slider-inner {
//   position: absolute;
//   left: 0;
//   top: 0;
//   height: 100%;
//   width: 200%;
//   display: grid;
//   grid-template-columns: repeat(30, 1fr);
//   gap: 0.5rem;
//   pointer-events: none;
//   transition: 0s ease-in;
// }

// .slide {
//   height: 100%;
//   margin-top: 12px;
// }

// .slide__img {
//   width: 100%;
//   height: 100%;
// }

// .btn {
//   border: 1px solid lightgray !important;
//   border-radius: 17px !important;
// }
// .b-active {
//   background-color: #572589 !important;
//   color: #fff !important;
// }
 <!-- </style> -->

 <template>
  <div class="row p-0 m-0">
    <div class="col-lg-12 shadow bg-light p-2 m-0">
      <p>the slider will be here</p>
    </div>
  </div>
</template>

 
 <script>
export default {};
</script>
 
 <style>
</style>