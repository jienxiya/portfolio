<template>
  <div class="wrapper">
    <parallax id="header-page" class="page-header header-filter" :style="headerStyle">
      <div id="Home" class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <div class="brand">
              <!-- <h1>Mary Jane Cajes Paller</h1> -->
              <!-- <vue-typed-js 
                :strings="['awesome', 'brilliant']" 
                :typeSpeed="0" 
                :smartBackspace="true"
                :loop="true" 
                @onComplete="doSmth()">
                <h2>
                  We are a
                  <span class="typing">|</span> company!
                </h2>
              </vue-typed-js>-->
              <!-- <div class="typed-element" ref="typedElement">
                <slot></slot>
              </div> -->
              <h1><i class="fas fa-quote-left"></i>New idea can be a great Innovation</h1>
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
          <coreSkills></coreSkills>
        </div>
      </div>

      <div id="ProjectsSection" class="section section-examples">
        <div class="container-fluid text-center">
          <div class="title">
            <h2>Projects</h2>
          </div>
          <projects/>
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
import projects from "./components/projects";
// import Typed from 'typed.js'
// import { props, getEventHandlers } from '../config/typed-component.config'

export default {
  components: {
    aboutMe,
    coreSkills,
    projects
  },
  name: "index",
  // name: 'vue-typed-js',
  // props,
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
      // typedObj: null
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
  // methods: {
  //   throwError: function (message) {
  //     throw new TypeError(message)
  //   },
  //   initTypedJS: function () {
  //     const $typed = this.$refs.typedElement.querySelector('.typing')
  //     if (this.$slots.default.length > 1) {
  //       this.throwError(`Just one child element allowed inside <${this.$options.name}> component.`)
  //     } else if (this.$slots.default.length === 1) {
  //       let typedConfig = this.$props
  //       typedConfig = getEventHandlers(this, typedConfig)
  //       this.typedObj = new Typed($typed, typedConfig)
  //     }
  //   },
  // },
  // mounted () {
  //   this.initTypedJS()
  // },
  // destroyed () {
  //   this.typedObj.destroy()
  // },
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

// .typed-element {
//   display: flex;
//   align-items: center;
//   .typed-cursor {
//     opacity: 1;
//     animation: typedjsBlink 0.7s infinite;
//   }
// }
// @keyframes typedjsBlink{
//   50% { opacity: 0.0; }
// }
</style>
