<template>
  <div class="wrapper">
    <parallax id="header-page" class="page-header header-filter">
      <!-- :style="headerStyle" -->
      <div id="Home" class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <!-- <h2 style="font-size:4em; font-weight:bold; color:yellow;">
                <sup><i class="fas fa-quote-left"></i></sup>
                DEVELOPERS can make a difference in the WORLD
                <sup><i class="fas fa-quote-right"></i></sup>
              </h2>-->

              <div>
                <!-- infinite loop -->
                <vue-typed-js
                  :strings="['Mary Jane Cajes Paller', 'a Web Developer']"
                  :loop="true"
                  :typeSpeed="100"
                  :smartBackspace="true"
                  :backDelay="2000"
                  id="typed"
                >
                  <h2>
                    <sup>
                      <i class="fas fa-quote-left"></i>
                    </sup>
                    I am
                    <span class="typing"></span>
                    <sup>
                      <i class="fas fa-quote-right"></i>
                    </sup>
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
          <div class="title">
            <h2>Contact Me</h2>
          </div>
          <contacts />
        </div>
      </div>
      <div class="section section-signup page-header" id="gradientSection">
        <div class="container">
          <resume />
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
import VueTypedJs from "./components/VueTypedJs";
import contacts from "./components/contactSection";
import resume from "./components/resumeSection";

export default {
  components: {
    aboutMe,
    coreSkills,
    minorSkills,
    projects,
    VueTypedJs,
    contacts,
    resume
  },
  name: "index",
  bodyClass: "index-page",
  data() {
    return {
      // pdfLink: require("@/assets/resume.pdf"),
      publicPath: process.env.BASE_URL,

      valid: true,
      name: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      select: null,
      items: ["Item 1", "Item 2", "Item 3", "Item 4"],
      checkbox: false
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
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
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
  background-image: linear-gradient(#80dfff, white);
}
#typed {
  text-align: center !important;
  justify-content: center;
  display: center;
  h2 {
    font-weight: bold !important;
    font-size: 4em;
    //  font-family:"Comic Sans MS", cursive, sans-serif;
    font-family: "Roboto Slab", "Times New Roman", serif;

    span {
      color: black;
      // font-family: "Roboto Slab", "Times New Roman", serif;
    }
  }
}

#gradientSection {
  background-image: linear-gradient(white, #80dfff);
  height: 500px;
}
</style>
