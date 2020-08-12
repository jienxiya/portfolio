<template>
  <div class="wrapper">
    <parallax id="header-page" class="page-header header-filter" :style="headerStyle">
      <div id="Home" class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <h2 style="font-size:4em; font-weight:bold; color:yellow;">
                <sup><i class="fas fa-quote-left"></i></sup>
                DEVELOPERS can make a difference in the WORLD
                <sup><i class="fas fa-quote-right"></i></sup>
              </h2>

              <div>
                <!-- infinite loop -->
                <vue-typed-js
                  :strings="['LIVE  LOVE  CODE']"
                  :loop="true"
                  :typeSpeed="100"
                  :smartBackspace="true" 
                  :backDelay="1000"
                  id="typed"
                >
                  <h2 >
                    <span class="typing"></span>
                  </h2>
                </vue-typed-js>
              </div>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div data-aos="zoom-in-down" id="AboutMeSection" class="section profile-content">
        <div class="container">
          <aboutMe />
        </div>
      </div>
      <div id="CoreSkillsSection" class="section section-basic">
        <div class="container">
          <div class="title text-center">
            <h2>Core Skills</h2>
          </div>
          <div>
            <coreSkills></coreSkills>
          </div>
          <div class="title text-center">
            <h2>Minor Skills</h2>
          </div>
          <div>
            <minorSkills></minorSkills>
          </div>
        </div>
      </div>

      <div id="ProjectsSection" class="section section-examples">
        <div class="container-fluid text-center">
          <div class="title">
            <h2>Projects</h2>
          </div>
          <projects />
        </div>
      </div>

      <div id="ContactSection" class="section">
        <div class="container text-center">
          <h2>Contact Me</h2>
          <div class="space-50"></div>
          <div class="md-layout">
            <div data-aos="zoom-in-down" class="md-layout-item">
              <h3>
                <i class="fas fa-envelope"></i> Email
              </h3>
              <p>maryjane.paller@student.passerellesnumeriques.org</p>
            </div>
            <div data-aos="zoom-in-down" class="md-layout-item">
              <h3>
                <i class="fas fa-phone-square"></i> Phone Number
              </h3>
              <p>09123456789</p>
            </div>
            <div data-aos="zoom-in-down" class="md-layout-item">
              <h3>
                <i class="fab fa-facebook"></i> Facebook Account
              </h3>
              <p>Mary Jane Cajes Paller</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import aboutMe from "./components/aboutMe";
import coreSkills from "./components/coreSkills";
import minorSkills from "./components/minorSkills";
import projects from "./components/projects";
import  VueTypedJs  from "./components/VueTypedJs";

export default {
  components: {
    aboutMe,
    coreSkills,
    minorSkills,
    projects,
    VueTypedJs
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
    }
  },
  data() {
    return {
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
  },

};
</script>
<style lang="scss">
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
#header-page {
  height: 700px;
}
 #typed{
   
   text-align: center !important;
   justify-content: center;
   display: center;
   h2{
     font-weight: bold !important;
   }
 }
</style>
