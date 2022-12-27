<script setup>
import NotasFiscaisTable from './components/NotasFiscaisTable.vue';
import SiderFinanciador from './components/SiderFinanciador.vue';

</script>

<template>
  <header class="blank-header">
  </header>

  <main>
    <SiderFinanciador/>
    <NotasFiscaisTable/>
  </main>
</template>

<style scoped>

  .blank-header {
    width: 80%;
    float: right;
    height: 64px;
    margin: 0px;
    padding: 0px;
    /* padding: 16px 46px 16px 46px; */
    /* gap: 10px; */
  };

</style>
