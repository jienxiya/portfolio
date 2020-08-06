<template>
  <div class="wrapper">
    <div class="space-50"></div>

    <!-- Progress/Pagination -->
    <div id="progress-pagination">
      <div class="md-layout">

        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Skills</h3>
          </div>
         <!-- <img src="@assets/img/html.png"> -->
        </div>

        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Rate</h3>
          </div>
          <md-progress-bar
            class="md-primary"
            md-mode="buffer"
            :md-value="amount"
          ></md-progress-bar>
          <md-progress-bar
            class="md-info"
            md-mode="buffer"
            :md-value="amount2"
          ></md-progress-bar>
          <md-progress-bar
            class="md-warning"
            md-mode="buffer"
            :md-value="buffer"
            :md-buffer="buffer"
          ></md-progress-bar>
        </div>
      </div>
    </div>
    <!-- end progress/pagination -->

    <div class="space-50"></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 30,
      amount2: 60,
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
