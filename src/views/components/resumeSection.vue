<template>
    <div class="wrapper">
        <div class="md-layout">
            <!-- <v-btn :href="`${publicPath}resume.pdf`" download="Mary's Resume" class="ma-2" rounded outlined color="teal" dark>
               <i class="fa fa-download" aria-hidden="true"></i>
                  Download My Resume
            </v-btn>-->
            <div class="md-layout-item md-size-50">
              <v-card
                id="card"
                class="d-inline-block mx-auto"
                style="background-color:transparent;"
              >
                <v-container>
                  <v-row justify="space-between">
                    <v-col cols="6">
                      <v-img
                        class="img-raised rounded img-fluid"
                        :src="require(`@/assets/img/resume.png`)"
                      ></v-img>
                    </v-col>

                    <v-col cols="auto" class="text-center pl-0">
                      <v-row class="flex-column ma-0 fill-height" justify="center">
                        <v-col>
                          <v-btn
                            :href="`${publicPath}resume.pdf`"
                            download="Mary's Resume"
                            class="ma-2"
                            rounded
                            outlined
                            color="teal"
                            dark
                            style="margin-top:120px;"
                          >
                            <i class="fa fa-download" aria-hidden="true"></i>
                            Download My Resume
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card>
            </div>

            <div class="md-layout-item md-size-50">
              <v-card
                id="card"
                class="d-inline-block mx-auto"
                style="background-color:transparent;"
                min-height="400px"
              >
                <!-- <div> -->

                <!-- </div> -->
                <v-form style="padding:20px;" ref="form" v-model="valid" lazy-validation>
                  <h4>Email Me</h4>
                  <v-text-field
                    v-model="name"
                    :counter="10"
                    :rules="nameRules"
                    label="Name"
                    required
                  ></v-text-field>

                  <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                  <v-textarea label="Message" no-resize rows="1" :value="value"></v-textarea>

                  <v-btn class="ma-2"
                            rounded
                            outlined color="indigo" style="float:right;"  @click="validate">Send</v-btn> 
<!-- :disabled="!valid"  -->
                  <v-btn class="ma-2"
                            rounded
                            outlined style="float:left;" color="indigo" @click="reset">Reset Form</v-btn>
                </v-form>
              </v-card>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name: "resumeSection"
}
</script>