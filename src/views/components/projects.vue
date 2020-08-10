<template>
  <div class="wrapper">
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
        <md-button href="https://deexplorer.web.app/" target="_blank" class="md-accent">View Project</md-button>
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
        <md-button href="https://pnp-event.web.app/" target="_blank" class="md-accent">View Project</md-button>
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
    <!-- vuetify -->
    <!-- <div>
      <v-card max-width="344" class="mx-auto">
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
            <v-list-item-subtitle>by Kurt Wagner</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

        <v-card-text>Visit ten places on our planet that are undergoing the biggest changes today.</v-card-text>

        <v-card-actions>
          <v-btn text color="deep-purple accent-4">Read</v-btn>
          <v-btn text color="deep-purple accent-4">Bookmark</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div> -->
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
  }
};
</script>
<style lang="scss">
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>