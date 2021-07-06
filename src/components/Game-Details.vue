<template>
  <!-- :src="game.thumbnail" -->
  <!-- src="../assets/01.png"  -->
  <div>
    <div class="p-0">
      <div
        class="col-lg-9 col-md-9 mx-auto mt-5 shadow p-0 br"
        v-for="game in gamefilter"
        :key="game.id"
      >
        <img
          :src="game.thumbnail"
          class="img-fluid w-100"
          style="height: 250px"
        />
      </div>
    </div>

    <div class="mt-5 mb-5">
      <div
        v-for="game in gamefilter"
        :key="game.id"
        class="col-lg-9 col-md-12 col-sm-12 mx-auto shadow txt-left p-3 br"
        style="background-color: #fff"
      >
        <h4>{{ game.title }}</h4>
        <p>{{ game.genre }}</p>
        <p>{{ game.short_description }}</p>

        <a href="#"> Read More </a>
      </div>
    </div>

    <MostRecommended :recommendedGame="games" class="mb-5" />
  </div>
</template>


<script>
import MostRecommended from "./MostRecommended";

export default {
  name: "GameDetails",
  components: {
    MostRecommended,
  },
  computed: {
    gamefilter() {
      const gameid = this.$route.params.id;
      // console.log(gameid);
      return this.games.filter((game) => game.id == gameid);
    },
  },
  methods: {
    async loadposts() {
      await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "0044251e5cmsh8b9baa2395fc468p104f8ajsna37719349f39",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          // console.log("Data", data);
          // this.games = [...this.games , data]
          this.games = data;
          console.log("games", this.games);
        });
    },
  },
  mounted: function () {
    this.loadposts();
  },
  data() {
    return {
      games: [],
      gameselected: {},
    };
  },
};
</script>

<style scoped>
.txt-left {
  text-align: left;
}
.btn-bg {
  background-color: #572589;
  color: #fff;
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
</style>