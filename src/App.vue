<template>
  <div id="app">
    <header>
      DASHBOARD
    </header>
    <div style="height: 100px"></div>

    <toilet-section></toilet-section>
  </div>
</template>

<script>
  import ToiletSection from './components/ToiletSection';

  export default {
    name: 'app',
    components: {
      ToiletSection,
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  header {
    display: flex;
    height: 92px;
    background-color: #0091de;
    color: white;
    align-items: center;
    justify-content: center;
  }

  .section {
    height: 110px;
  }
</style>
