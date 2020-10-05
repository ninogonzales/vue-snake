<template>
  <div id="main-menu">
    <h1 class="text-h1 secondary--text">SNAKE</h1>
    <div class="menu__buttons">
      <v-btn to="/game" color="primary">START</v-btn>
      <v-btn to="/options" color="primary">OPTIONS</v-btn>
      <v-btn to="/highscores" color="primary">HIGH SCORES</v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  h1 {
    margin: 64px 0;
    color: var(--v-primary-base);
  }

  .menu__buttons {
    margin: 48px auto;
    min-width: 30%;

    .v-btn {
      margin-bottom: 24px;
      width: 100%;
    }
  }
}
</style>
