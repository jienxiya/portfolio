<template>
  <div class="wrapper">
    <!-- <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax> -->
    <!-- <div class="main main-raised"> -->
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Mary Jane Cajes Paller</h3>
                  <h6>Software Developer</h6>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-github"
                    ><i class="fab fa-github"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-linkedin-in"
                    ><i class="fab fa-linkedin-in"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-facebook"
                    ><i class="fab fa-facebook"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              Hi! I am Mary Jane Cajes Paller, a proud Passerelles Numeriques scholar. I studied in University of San Carlos Talamban Campus, 
              Talamban, Cebu City taking up Certificate of Computer Technology major in Software Development.
            </p>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
  bodyClass: "profile-page",
  props: {
    img: {
      type: String,
      default: require("@/assets/img/faces/mj-profile4.jpg")
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}

</style>
