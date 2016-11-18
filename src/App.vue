<template>
  <div id="app">
    <header>
      DASHBOARD
    </header>
    <div style="height: 100px"></div>

    <toilet-section :toilets="toilets"></toilet-section>
  </div>
</template>

<script>
  /* global fetch:false */

  /* eslint no-console:0 */
  import ToiletSection from './components/ToiletSection';

  const apiBaseUrl = 'http://10.100.10.112:8080';
  const headers = new Headers({
  });
  const gender = 'men';

  export default {
    name: 'app',
    components: {
      ToiletSection,
    },
    data() {
      return {
        toilets: [],
      };
    },
    created() {
      fetch(`${apiBaseUrl}/toilets`, {
        method: 'OPTIONS',
      }).then((response) => {
        fetch(`${apiBaseUrl}/toilets`, {
          headers,
          mode: 'cors',
        }).then((response) => {
          return response.json();
        }).then((responseBody) => {
          const toilets = [];
          for (let key in responseBody[gender]) {
            let urinal = false;
            if (key.charAt(0) === 'u') {
              urinal = true;
            }
            toilets.push({urinal, available: !!responseBody[gender][key]})
          }
          this.toilets = toilets;
        });
      });
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
