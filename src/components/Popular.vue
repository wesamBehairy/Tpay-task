<template>
  <div
    class="col-lg-9 col-md-12 col-sm-12 mx-auto p-3 mt-5 mb-5 shadow br"
    style="background-color: #fff"
  >
    <h5 style="text-align: left">Most Popular</h5>

    <span class="">
      <a href="#" class="lstyle">
        SEE ALL
        <i class="fas fa-chevron-right"></i>
      </a>
    </span>

    <div class="row mt-4">
      <div
        class="card col-lg col-md-3 col-sm-4 mb-4"
        v-for="game in populardGame.slice(10, 15)"
        :key="game.id"
      >
        <img
          class="card-img-top mx-auto br w-100"
          :src="game.thumbnail"
          alt="Card image cap"
          style="height: 9rem"
        />
        <span class="rate-style">
          <i class="fas fa-star"></i>
          {{ game.id }}
        </span>
        <div class="card-body">
          <h6 class="card-title">{{ game.title }}</h6>
        </div>
        <div class="">
          <router-link
            :to="'/details/' + game.id"
            class="btn btn-bg col-lg-12 col-md-12 col-sm-12"
          >
            MORE INFO
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popular",
  props: ["populardGame"],
};
</script>

<style scoped>
.rate-style {
  top: 13px;
  width: 50px;
  border-radius: 4px;
  position: absolute;
  left: 30px;
  background-color: #fff;
}
.lstyle {
  float: right;
  margin-top: -34px;
  margin-right: 29px;
  text-decoration: none;
  color: #572589;
  font-size: 18px;
}
.card {
  border: none !important;
}
.card-title,
.card-text {
  text-align: left !important;
}
.card-body {
  padding: 1rem 0rem !important;
}
.btn-bg {
  background-color: #572589;
  color: #fff;
}

.br {
  border-radius: 10px;
}
@media (max-width: 575px) {
  .card {
    width: 50%;
  }
  .btn{
    width: 100%;
  }
}

@media (max-width: 470px) {
  .card {
    width: 100%;
  }
  .lstyle{
    display: none;

  }
}
</style>