<template>
  <div class="row">
    <div class="p-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-light pt-5 pb-5">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/LOg777o.png"
              alt=""
              width="56"
              height="30"
              class=""
              @click="onclick"
            />
            Game Store</a
          >

          <div class="" id="navbarText">
            <span class="text-left" style="float: left">
              <a href="#" v-on:click="myFunction()" class="search">
                <!-- <img src="../assets/loupe.png" width="18" /> -->
                <i class="fas fa-search"></i>
              </a>

              <a href="#" class="dots" v-on:click="myFunction2()">
                <i class="fas fa-ellipsis-v"></i>
              </a>
            </span>
          </div>
        </div>
      </nav>

      <div style="position: absolute; width: 100%; top: 99px" id="myDIV">
        <span class="search-icon">
          <!-- <img src="../assets/loupe.png" width="18" /> -->
          <i class="fas fa-search"></i>
        </span>
        <input
          type="text"
          placeholder=" Search for a game ..."
          class="col-lg-12 form-control bl"
        />
      </div>

      <div class="container-fluid" id="mylogin">
        <div class="row">
          <div class="mt-1">
            <form class="col-lg-4">
              <div class="mt-4">
                <p class="" style="color: gray; text-align: left">
                  please add your account details
                </p>
              </div>

              <div class="text-start mb-3">
                <label class="form-label">Username/Email</label>
                <input
                  type="email"
                  class="form-control fl"
                  id="exampleInputEmail1"
                  placeholder="Type your username here "
                  required
                />
              </div>
              <div class="text-start mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control fl"
                  id="exampleInputPassword1"
                  placeholder="Type your Password"
                  required
                />
              </div>
              <div class="mb-3 FPass">
                <a href="#" class="FPassl"> Forgot Password? </a>
              </div>

              <button type="submit" class="btn col-lg-12">LOGIN</button>

              <div class="mb-3 mt-4">
                <a href="#" class="FPassl">Dont have an account? sign up! </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    myFunction: function () {
      var x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    myFunction2: function () {
      var x = document.getElementById("mylogin");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },

    dd: function () {
      document.addEventListener("click", (e) => {
        const toggle = document.querySelector(".search__toggle");
        const input = document.querySelector(".search__input");
        const clickedElement = e.target;

        if (clickedElement == toggle) {
          input.value = "";
          return;
        }

        const isSearchField = clickedElement.closest(".search__field");

        if (!isSearchField) {
          toggle.checked = false;
          input.value = "";
        }
      });
    },
    onclick() {
      let self = this;
      self.$router.replace({ path: "/" });
    },
  },

  mounted: function () {
    this.dd();
  },
};
</script>

<style scoped>
#navbarText {
  margin-right: 7%;
}
.fa-search {
  color: #572589 !important;
}
.search-icon {
  position: absolute;
  top: 16%;
  left: 15%;
}
.search {
  transition: all 0.5s;
}
.navbar-light .navbar-brand {
  color: #572589 !important;
}

.navbar-brand {
  font-size: 19px !important;
  margin-left: 6%;
}

.bl {
  border-bottom: 1px solid #ced4da !important;
  border-top: 1px solid #ced4da !important;
  border-left: none !important;
  border-right: none !important;
  padding-left: 50px !important;
  transition: 3s;
  text-indent: 14%;
}
#myDIV {
  display: none;
}

.fl {
  font-size: 20px !important;
}

.form-label {
  font-size: 11px;
}
.form-control {
  border: none;
  border-bottom: 1px solid #000;
}

form {
  border-radius: 5px;
  padding: 10px 25px;
  box-shadow: 5px 10px 18px #888888;
  position: absolute;
  right: 8rem !important;
  background-color: #fff;
  z-index: 1000;
  top: 91px;
}
#mylogin {
  display: none;
}

.FPass {
  text-align: end;
}

.btn {
  background-color: #572589 !important;
  color: #fff !important;
}
.FPassl {
  text-decoration: none;
  color: #572589;
}

.dots {
  font-size: 18px;
  padding-left: 32px;
  color: #572589;
}
.bg-light {
  background-color: #fff !important;
}
</style>