<script setup>
import NotasFiscaisTable from './components/NotasFiscaisTable.vue';
import SiderFinanciador from './components/SiderFinanciador.vue';

</script>

<template>
  <header class="blank-header">
    <img alt="Logo Cash Force" src="../cashforceLogo.svg">
  </header>

  <main>
    <SiderFinanciador/>
    <NotasFiscaisTable/>
  </main>
</template>

<style scoped>

  .blank-header {
    width: 1272px;
    height: 64px;
    padding: 16px 46px 16px 46px;
    gap: 10px;
  };

</style>
