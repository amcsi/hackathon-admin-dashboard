<template>
  <section class="section">
    <div class="section-title">
      TOILETS
    </div>
    <div class="section-content">
      <div class="toilet-list">
        <div class="toilet" :class="{'toilet__urinal': toilet.urinal}" v-for="toilet in toilets">
          <div class="toilet-availability" :class="{'toilet-availability__on': toilet.available}"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  /** @class ToiletSection */
  export default {
    props: {
      toilets: Array
    },
    data() {
      return {
        msg: 'hello vue',
      };
    },

    components: {},
  };
</script>
<style>
  .section {
    display: flex;
  }

  .section-title {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    font-size: 30px;
    color: #0091de;
  }

  .section-content {
    flex: 2;
  }

  .toilet-list {
    display: flex;
    flex-direction: row;
  }

  .toilet {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 110px;
    width: 100px;
    background-image: url(../assets/noun_12853_cc.png);
    background-repeat: no-repeat;
    background-position: top center;
  }

  .toilet__urinal {
    background-image: url(../assets/noun_138361_cc.png);
  }


  .toilet-availability {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #d0021b;
  }

  .toilet-availability__on {
    background-color: #7ed321;
  }
</style>
