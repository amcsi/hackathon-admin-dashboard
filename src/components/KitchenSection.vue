<template>
  <titled-section :title="'KITCHEN'">
    <div class="kitchen-list">
      <div class="microwave" v-for="available in kitchen.microwaves">
        <div class="microwave-availability" :class="{'microwave-availability__on': available}"></div>
      </div>
    </div>
  </titled-section>
</template>
<script>
  import TitledSection from './TitledSection';
  /** @class KitchenSection */
  export default {
    props: {
      kitchen: Object,
    },
    components: { TitledSection },
  };
</script>
<style>
  .kitchen-list {
    display: flex;
    flex-direction: row;
  }

  .microwave {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 110px;
    width: 100px;
    background-image: url(../assets/Microwave.png);
    background-repeat: no-repeat;
    background-position: 30px center;
  }

  .microwave-availability {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: #d0021b;
  }

  .microwave-availability__on {
    background-color: #7ed321;
  }
</style>
