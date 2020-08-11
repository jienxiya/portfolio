<template>
  <div class="wrapper">
    <div id="progress-pagination">
      <div class="md-layout text-center">
        <!-- minor skills -->
        <div class="md-layout-item md-size-20" v-for="item in minor" v-bind:key="item.images" v-on:mouseover="mouseOver">
            <div  data-aos="fade-up" data-aos-duration="1000">
            <img
              :src="require(`@/assets/img/skills/${item.images}`)"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
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
  name: "minor-skills",
  data() {
    return {
      minor: [
        { title: 'Nodejs', images: "nodejs.png" },
        { title: 'Expressjs', images: "express.png" },
        { title: 'Mongo DB', images: "mongo.png" },
        { title: 'Raspberry Pi 3', images: "raspberrypi.png" },
        { title: 'Socket.io', images: "socketio.png" },
        { title: 'Nodejs', images: "mqtt.png" },
        { title: 'Firebase', images: "firebase.png" },
        { title: 'Heroku', images: "heroku.png" }
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
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
</style>
