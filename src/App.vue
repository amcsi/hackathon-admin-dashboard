<template>
  <div id="app">
    <header>
      DASHBOARD
    </header>
    <div style="height: 100px"></div>

    <toilet-section :toilets="toilets"></toilet-section>
    <kitchen-section :kitchen="kitchen" :coffee="coffee" :milk="milk"></kitchen-section>
  </div>
</template>

<script>
  /* eslint no-console:0 */
  import ToiletSection from './components/ToiletSection';
  import KitchenSection from './components/KitchenSection';
  import toiletsService from './api/toilets';
  import kitchenService from './api/kitchen';

  const headers = new Headers({
  });

  /**
   * Call a callback right now and also every n milliseconds.
   *
   * @param cb
   * @param delay
   * @return {*|number}
   */
  function nowAndEvery(delay, cb) {
    cb();
    return setInterval(cb, delay);
  }

  export default {
    name: 'app',
    components: {
      ToiletSection,
      KitchenSection,
    },
    data() {
      return {
        toilets: [],
        kitchen: {
          microwaves: [true, true, true],
          coffee: 0.1,
          milk: 0.1,
        },
      };
    },
    created() {
      nowAndEvery(5000, () => {
        toiletsService().then(toilets => this.toilets = toilets);
        kitchenService().then(kitchen => this.kitchen = kitchen);
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
