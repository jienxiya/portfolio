<template>
  <div class="wrapper">
    <div id="progress-pagination">
      <div class="md-layout text-center">
        <!-- major skills -->
        <div class="md-layout-item md-size-20" v-for="item in major" v-bind:key="item.images" v-on:mouseover="mouseOver">
          <div  data-aos="fade-up" data-aos-duration="1000">
            <img
              :src="require(`@/assets/img/skills/${item.images}`)"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <!-- <div class="overlay">
              <div class="text">{{ item.title}}</div>
            </div> -->
            <md-tooltip md-direction="top">{{item.title}}</md-tooltip>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "core-skills",
  data() {
    return {
      major: [
        { title: "HTML", images: "html.png" },
        { title: "CSS", images: "css.png" },
        { title: "SASS", images: "sass.png" },
        { title: "Vuejs", images: "vue.png" },
        { title: "Angular", images: "angular.png" },
        { title: "Python", images: "python.png" },
        { title: "Java", images: "java.png" },
        { title: "PHP", images: "php.png" },
        { title: "ASP.net|MVC", images: "asp.png" },
        { title: "Laravel", images: "laravel.png" },
        { title: "Mysql", images: "mysql.png" },
        { title: "Microsoft SQL Server", images: "sqlserver.png" }
      ]
    };
  },
  methods: {
    mouseOver: function(event) {
      event.target.classList.add("fade");
      // document.getElementById("target").style.opacity="2"
    }
  }
};
</script>

<style lang="scss" scoped>
@keyframes icon-move {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.6;
  }
  //  50% {opacity: 0.4;}
  //  75% {opacity: 0.2;}
  //  100% {opacity: 0;}
}
.fade:hover {
  -webkit-animation-name: icon-move;
  animation-duration: 5s;
}

.vertical-center {
  display: flex;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
