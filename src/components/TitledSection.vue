<template>
  <section class="section">
    <div class="section-title">
      {{ title }}
    </div>
    <div class="section-content">
      <slot></slot>
    </div>
  </section>
</template>
<script>
  /** @class TitledSection */
  export default {
    props: {
      title: String,
    },
  }
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
</style>
