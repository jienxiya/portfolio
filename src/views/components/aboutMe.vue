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
                    href="https://github.com/jienxiya?tab=repositories"
                    target="_blank"
                    class="md-just-icon md-github"
                    ><i class="fab fa-github"></i
                  ></md-button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <md-button
                    href="https://www.linkedin.com/in/mary-paller-72b015196/"
                    target="_blank"
                    class="md-just-icon md-linkedin-in"
                    ><i class="fab fa-linkedin-in"></i
                  ></md-button>&nbsp;&nbsp;&nbsp;&nbsp;
                  <md-button
                    href="https://www.facebook.com/profile.php?id=100007313656252"
                    target="_blank"
                    class="md-just-icon md-facebook"
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
