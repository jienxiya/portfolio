<template>
  <div class="wrapper">
    <div class="md-layout">
      <div data-aos="flip-up" class="md-layout-item" v-for="item in projects" v-bind:key="item.image">
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="mx-auto" max-width="344" min-height="450px">
              <v-img
                :src="require(`@/assets/img/${item.image}`)"
                alt="Rounded Image"
                class="img-raised rounded img-fluid"
                style="height:31%;"
              ></v-img>

              <v-card-text>
                <h2 class="title primary--text">{{item.title}}</h2>
                {{item.description}}
              </v-card-text>

              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <v-btn :href="`${item.link}`" target="_blank">
                    <i class="fa fa-clone" aria-hidden="true"></i> View Project
                  </v-btn>
                </v-overlay>
              </v-fade-transition>
            </v-card>
          </template>
        </v-hover>
        <br/>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "projects",
  components: {},
  data: () => ({
    overlay: false,
    projects: [
      {
        title: "Russle Garma",
        image: "russle-web.png",
        description:
          "A personal website for blogging. This project used Angular platform and hosted by Firebase. I was part in developing this project as a front end developer.",
        link: 'https://deexplorer.web.app/'
      },
      {
        title: "PNP Events",
        image: "pnp-events.png",
        description:
          "PNP Events is a web application that records and organizes all the PN Events. This project used Angular platform and hosted by Firebase. I made this project during our training in Angular and Firebase.",
        link: "https://pnp-event.web.app/"
      },
      {
        title: "ChatTalk",
        image: "socket.png",
        description:
          "ChatTalk is a chat application that uses Socket.io to make a real time chat application. This project is hosted by Heroku.",
        link: "https://heroku-sample-jane.herokuapp.com/"
      }
    ]
  })
};
</script>
<style lang="scss">
@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>