// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-kit
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-kit/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import MaterialKit from "./plugins/material-kit";
import AOS from 'aos';
import 'aos/dist/aos.css'

import { VueTypedJs } from 'vue-typed-js'
Vue.use(VueTypedJs)

import vuetify from '@/plugins/vuetify' 

Vue.config.productionTip = false;

Vue.use(MaterialKit);

AOS.init();

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  created: function(){
    AOS.init();
  },
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
