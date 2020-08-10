<template>
  <div class="wrapper">
    <!-- <div class="space-50"></div> -->

    <!-- Progress/Pagination -->
    <div id="progress-pagination">
      <div class="md-layout text-center">
        <div class="md-layout-item md-size-25 md-xsmall-size-100">
          <div class="title">
            <h3>Skills</h3>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
              <img  src="@/assets/img/skills/html.png" style="height:50px; width:auto;">
              <md-tooltip md-direction="right">HTML</md-tooltip>
          </div>
          <div data-aos="zoom-in-right" >
              <img src="@/assets/img/skills/css.png" style="height:40px; width:auto;">
              <md-tooltip md-direction="right">CSS</md-tooltip>
          </div>
          <div data-aos="zoom-out-left">
              <img src="@/assets/img/skills/sass.png" style="height:40px; width:auto;">
              <md-tooltip md-direction="right">SASS</md-tooltip>
          </div>
          <div data-aos="zoom-in-right">
              <img src="@/assets/img/skills/vue.png" style="height:50px; width:auto;">
              <md-tooltip md-direction="right">Vuejs</md-tooltip>
          </div>
          <div data-aos="zoom-out-left">
              <img src="@/assets/img/skills/angular.png" style="height:50px; width:auto;">
              <md-tooltip md-direction="right">Angular</md-tooltip>
          </div>
          <div data-aos="zoom-in-right">
              <img src="@/assets/img/skills/python.png" style="height:40px; width:auto;">
              <md-tooltip md-direction="right">Python</md-tooltip>
          </div>
          <div data-aos="zoom-out-left">
              <img src="@/assets/img/skills/java.png" style="height:60px; width:auto;">
              <md-tooltip md-direction="right">Java</md-tooltip>
          </div>
          <div data-aos="zoom-in-right">
              <img src="@/assets/img/skills/php.png" style="height:40px; width:auto;">
              <md-tooltip md-direction="right">PHP</md-tooltip>
          </div>
          <div data-aos="zoom-out-left">
              <img src="@/assets/img/skills/laravel.png" style="height:50px; width:auto;">
              <md-tooltip md-direction="right">laravel</md-tooltip>
          </div>
        </div>

        <div class="md-layout-item md-size-75 md-xsmall-size-100">
          <div class="title">
            <h3>Rate</h3>
          </div>
          <br/>
          <!-- html -->
          <div data-aos="fade-up" data-aos-duration="1000">
            <md-progress-bar
              class="md-warning"
              md-mode="buffer"
              :md-value="amount8"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- css -->
          <div data-aos="zoom-in-right">
            <md-progress-bar
              class="md-info"
              md-mode="buffer"
              :md-value="amount7"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- sass -->
          <div data-aos="zoom-out-left">
            <md-progress-bar
              class="md-primary"
              md-mode="buffer"
              :md-value="amount4"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- vue  -->
          <div data-aos="zoom-in-right">
            <md-progress-bar
              class="md-success"
              md-mode="buffer"
              :md-value="amount7"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- angular -->
          <div data-aos="zoom-out-left">
            <md-progress-bar
              class="md-danger"
              md-mode="buffer"
              :md-value="amount5"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- pyhton -->
          <div data-aos="zoom-in-right">
            <md-progress-bar
              class="md-primary"
              md-mode="buffer"
              :md-value="amount6"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- java -->
          <div data-aos="zoom-out-left">
            <md-progress-bar
              class="md-warning"
              md-mode="buffer"
              :md-value="amount7"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- php -->
          <div data-aos="zoom-in-right">
            <md-progress-bar
              class="md-info"
              md-mode="buffer"
              :md-value="amount5"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
          <br/>
          <!-- laravel -->
          <div data-aos="zoom-out-left">
            <md-progress-bar
              class="md-danger"
              md-mode="buffer"
              :md-value="amount6"
              :md-buffer="buffer"
            ></md-progress-bar>
          </div>
        </div>
      </div>
    </div>
    <!-- end progress/pagination -->

    <!-- <div class="space-50"></div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      amount1: 10,
      amount2: 20,
      amount3: 30,
      amount4: 40,
      amount5: 50,
      amount6: 60,
      amount7: 70,
      amount8: 80,
      amount9: 90,
      amount10: 100,
      buffer: 40
    };
  }
};
</script>

<style lang="scss" scoped>
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
