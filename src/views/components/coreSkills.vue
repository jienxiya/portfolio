<template>
  <div class="wrapper">
    <div id="progress-pagination">
      <div class="md-layout text-center">

        <div class="md-layout-item md-size-20">
          <div data-aos="fade-up" data-aos-duration="1000">
            <img
              src="@/assets/img/skills/html.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">HTML</md-tooltip>
          </div>
          <br/>
          <div data-aos="zoom-in-right">
            <img src="@/assets/img/skills/python.png" class="img-raised rounded img-fluid" style="padding:5px; height:100px; width:auto;" />
            <md-tooltip md-direction="right">Python</md-tooltip>
          </div>
          <br/>
          <div data-aos="zoom-out-left">
            <img
              src="@/assets/img/skills/sqlserver.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">Microsoft SQL Server</md-tooltip>
          </div>
        </div>

        <div class="md-layout-item md-size-20">
          <div data-aos="zoom-in-right">
            <img
              src="@/assets/img/skills/css.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">CSS</md-tooltip>
          </div>
          <br/>
          <div data-aos="zoom-out-left">
            <img src="@/assets/img/skills/java.png" class="img-raised rounded img-fluid" style="padding:5px; height:100px; width:auto;" />
            <md-tooltip md-direction="right">Java</md-tooltip>
          </div>
          <br/>
          <div data-aos="zoom-out-right">
            <img
              src="@/assets/img/skills/mysql.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">Mysql</md-tooltip>
          </div>
          
        </div>

        <div class="md-layout-item md-size-20">
          <div data-aos="zoom-out-left">
            <img
              src="@/assets/img/skills/sass.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">SASS</md-tooltip>
          </div>
          <br/>
           <div data-aos="zoom-in-right">
            <img src="@/assets/img/skills/php.png" class="img-raised rounded img-fluid" style="padding:5px; height:100px; width:auto;" />
            <md-tooltip md-direction="right">PHP</md-tooltip>
          </div>
          <br/>
           <div data-aos="zoom-in-right">
            <img src="@/assets/img/skills/raspberrypi.png" class="img-raised rounded img-fluid" style="padding:5px; height:100px; width:auto;" />
            <md-tooltip md-direction="right">Raspberry Pi</md-tooltip>
          </div>
        </div>

        <div class="md-layout-item md-size-20">
          <div data-aos="zoom-in-right">
            <img
              src="@/assets/img/skills/vue.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">Vuejs</md-tooltip>
          </div>
          <br/>
          <div data-aos="zoom-out-left">
            <img src="@/assets/img/skills/laravel.png" class="img-raised rounded img-fluid" style="padding:5px; height:100px; width:auto;" />
            <md-tooltip md-direction="right">laravel</md-tooltip>
          </div>
          <br/>
          <div data-aos="zoom-out-right">
            <img src="@/assets/img/skills/socketio.png" class="img-raised rounded img-fluid" style="padding:5px; height:100px; width:auto;" />
            <md-tooltip md-direction="right">Socket.io</md-tooltip>
          </div>
        </div>


        <div class="md-layout-item md-size-20">
          <div data-aos="zoom-out-left">
            <img
              src="@/assets/img/skills/angular.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">Angular</md-tooltip>
          </div>
          <br/>
            <div data-aos="zoom-out-left">
            <img
              src="@/assets/img/skills/asp.png"
              class="img-raised rounded img-fluid"
              style="height:100px; width:auto; padding:5px;"
            />
            <md-tooltip md-direction="right">ASP.net MVC</md-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "core-skills"
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
