<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <!-- <h3 class="md-title">Vue Material Kit</h3> -->
        <img style="width:80px; height: auto;" src="../assets/img/mj-logo.png" alt="mj-logo" class="mj-logo" />
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>

              <md-list-item  @click="scrollToHome()">
                <p>HOME</p>
              </md-list-item>

              <md-list-item  @click="scrollToAboutMe()">
                <p>ABOUT ME</p>
              </md-list-item>

              <md-list-item  @click="scrollToCoreSkills()">
                <p>CORE SKILLS</p>
              </md-list-item>

              <md-list-item  @click="scrollToProjects()">
                <p>PROJECTS</p>
              </md-list-item>

              <md-list-item  @click="scrollToContact()">
                <p>CONTACT</p>
              </md-list-item>

            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  // computed: {
  //   showDownload() {
  //     const excludedRoutes = ["login", "landing", "profile"];
  //     return excludedRoutes.every(r => r !== this.$route.name);
  //   }
  // },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
      // console.log("current scroll value: ", this.currentScrollValue);
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToContact() {
      let element_id = document.getElementById("ContactSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    scrollToProjects() {
      let element_id = document.getElementById("ProjectsSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    scrollToCoreSkills() {
      let element_id = document.getElementById("CoreSkillsSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    },
    scrollToAboutMe() {
      let element_id = document.getElementById("AboutMeSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
    scrollToHome() {
      // document.getElement.scrollTop;
      let element_id = document.getElementById("Home");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
<style >

</style>