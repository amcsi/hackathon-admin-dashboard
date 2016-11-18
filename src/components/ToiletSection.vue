<template>
  <titled-section :title="'TOILETS'">
    <div class="toilet-list">
      <div class="toilet" :class="{'toilet__urinal': toilet.urinal}" v-for="toilet in toilets">
        <div class="toilet-availability" :class="{'toilet-availability__on': toilet.available}"></div>
      </div>
    </div>
  </titled-section>
</template>
<script>
  import TitledSection from './TitledSection';
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

    components: { TitledSection },
  };
</script>
<style>
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
