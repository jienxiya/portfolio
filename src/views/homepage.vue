<template>
  <div class="wrapper">
    <parallax id="header-page" class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <!-- <h1>Mary Jane Cajes Paller</h1> -->
              <h3>"New idea can be a great innovation"</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div id="AboutMeSection" class="section profile-content">
        <div class="container">
          <aboutMe/>
        </div>
      </div>
      <div id="CoreSkillsSection" class="section section-basic">
        <div class="container">
          <div class="title text-center">
            <h2>Core Skills</h2>
          </div>
          <coreSkills></coreSkills>
        </div>
      </div>

      <div id="ProjectsSection" class="section section-examples">
        <div class="container-fluid text-center">
          <div class="title">
            <h2>Projects</h2>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <a href="https://deexplorer.web.app/" target="_blank">
                <img
                  :src="russle"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="https://deexplorer.web.app/" target="_blank" class="md-accent">View Project</md-button>
            </div>
            <div class="md-layout-item">
              <a href="https://pnp-event.web.app/" target="_blank">
                <img
                  :src="pnpEvents"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                  style="height:31%;"
                />
              </a>
              <md-button href="https://pnp-event.web.app/" target="_blank" class="md-accent"
                >View Project</md-button>
            </div>
            <div class="md-layout-item">
              <a href="https://heroku-sample-jane.herokuapp.com/" target="_blank">
                <img
                  :src="socket"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                  style="height:31%;"
                />
              </a>
              <md-button href="https://heroku-sample-jane.herokuapp.com/" target="_blank" class="md-accent"
                >View Project</md-button
              >
            </div>  
          </div>
        </div>
      </div>

      <div id="ContactSection" class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Contact Me</h2>
              <div class="md-layout">
                <div class="md-layout-item">
                    <h3><i class="fas fa-envelope"></i> Email</h3>
                    <p>maryjane.paller@student.passerellesnumeriques.org</p>
                </div>
                <div class="md-layout-item">
                    <h3><i class="fas fa-phone-square"></i> Phone Number</h3>
                    <p>09123456789</p>
                </div>
                <div class="md-layout-item">
                  <h3><i class="fab fa-facebook"></i> Facebook Account</h3>
                    <p>Mary Jane Cajes Paller</p>
                </div>
              </div>
                <!-- <div>
                    <h3><i class="fas fa-envelope"></i> Email</h3>
                    <p>maryjane.paller@student.passerellesnumeriques.org</p>
                </div>
                <div>
                    <h3><i class="fas fa-phone-square"></i> Phone Number</h3>
                    <p>09123456789</p>
                </div>
                <div>
                    <h3><i class="fab fa-facebook"></i> Facebook Account</h3>
                    <p>Mary Jane Cajes Paller</p>
                </div> -->
                <!-- <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-envelope"
                    ><i class="fas fa-envelope"></i
                  ></md-button> -->
            </div>
          </div>
        </div>
      </div>
      <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutMe from "./components/aboutMe";
import coreSkills from "./components/coreSkills";

export default {
  components: {
    aboutMe,
    coreSkills
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    russle: {
      type: String,
      default: require("@/assets/img/russle-web.png")
    },
    pnpEvents: {
      type: String,
      default: require("@/assets/img/pnp-events.png")
    },
    socket: {
      type: String,
      default: require("@/assets/img/socket.png")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
#header-page{
  height: 700px;
}
</style>
