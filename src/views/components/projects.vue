<template>
    <div class="md-layout">
            <div data-aos="flip-left" class="md-layout-item">
              <a href="https://deexplorer.web.app/" target="_blank">
                <img 
                :src="russle" 
                alt="Rounded Image" 
                class="img-raised rounded img-fluid" 
                style="height:31%;"
                />
              </a>
              <md-button
                href="https://deexplorer.web.app/"
                target="_blank"
                class="md-accent"
              >View Project</md-button>
            </div>
            <div data-aos="flip-right" class="md-layout-item">
              <a href="https://pnp-event.web.app/" target="_blank">
                <img
                  :src="pnpEvents"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                  style="height:31%;"
                />
              </a>
              <md-button
                href="https://pnp-event.web.app/"
                target="_blank"
                class="md-accent"
              >View Project</md-button>
            </div>
            <div data-aos="flip-up" class="md-layout-item">
              <a href="https://heroku-sample-jane.herokuapp.com/" target="_blank">
                <img
                  :src="socket"
                  alt="Rounded Image"
                  class="img-raised rounded img-fluid"
                  style="height:31%;"
                />
              </a>
              <md-button
                href="https://heroku-sample-jane.herokuapp.com/"
                target="_blank"
                class="md-accent"
              >View Project</md-button>
            </div>
          </div>
</template>

<script>
export default {
  name: "projects",
  props: {
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
};
</script>
<style lang="scss">
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}

</style>