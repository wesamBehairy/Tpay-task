<template>
  <div>
    <!-- :src="game.thumbnail" -->
    <!-- src="../assets/01.png" -->
    <!-- game banner -->
    <div
      class="col-lg-9 col-md-12 col-sm-12 mx-auto shadow br mt-5"
      style="background-color: #fff"
    >
      <div class="row">
        <!-- <div class="col-lg-9" v-for="game in games.slice(0, 1)" :key="game.id" style="height:200px"> -->
        <img
          v-for="game in games.slice(300, 301)"
          :key="game.id"
          :src="game.thumbnail"
          alt=" Slider1 image"
          class="col-lg-8 col-md img-fluid"
          style="height: 280px"
        />
        <!-- </div> -->

        <div
          class="col-lg-3 col-md mx-auto txt-left pt-3"
          v-for="game in games.slice(300, 301)"
          :key="game.id"
        >
          <h4 class="hbanner">{{ game.title }}</h4>

          <p class="">{{ game.genre }}</p>

          <p class="pbanner">{{ game.short_description }}</p>

          <router-link :to="'/details/' + game.id" class="btn btn-bg col-lg-10">
            MORE INFO
          </router-link>
        </div>
      </div>
    </div>

    <MostRecommended :recommendedGame="games" />

    <Popular :populardGame="games" />
  </div>
</template>

<script>
import MostRecommended from "./MostRecommended";
import Popular from "./Popular.vue";

export default {
  name: "Game",
  components: {
    Popular,
    MostRecommended,
  },
  methods: {
    loadposts() {
      fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "0044251e5cmsh8b9baa2395fc468p104f8ajsna37719349f39",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          // this.games = [...this.games , data]
          this.games = data;
        });
    },
  },

  mounted: function () {
    this.loadposts();
  },

  data() {
    return {
      games: [],
      index: 0,
    };
  },
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

.slider1 {
  box-shadow: 5px 10px 18px #888888;
}
.ss {
  margin-top: 9rem;
}
.btn-bg {
  background-color: #572589;
  color: #fff;
}
.txt-left {
  text-align: left;
}
.lstyle {
  float: right;
  margin-top: -34px;
  margin-right: 29px;
  text-decoration: none;
  color: #572589;
  font-size: 18px;
}

.br {
  border-radius: 5px;
}
@media only screen and (max-width: 992px) {
  .txt-left {
    padding: 35px;
  }
}
@media only screen and (max-width: 1305px) {
  .hbanner {
    /* font-size: 1rem; */
  }
}
/* @media only screen and (max-width: 1156px) {
  .pbanner {
    font-size: 15px;
  }
} */

/* @media only screen and (max-width: 1113px) {
  .pbanner {
    font-size: 12px;
  }
} */
/* 
@media only screen and (max-width: 1036px) {
  .pbanner {
    font-size: 10px;
  }
}

@media only screen and (max-width: 992px) {
  .pbanner {
    font-size: 10px;
  }
} */
</style>