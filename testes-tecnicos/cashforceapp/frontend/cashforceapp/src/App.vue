<script setup>
  import NotasFiscaisTable from './components/NotasFiscaisTable.vue';
</script>

<template>

  <header></header>

  <main>
    <NotasFiscaisTable/>
  </main>
</template>

<style scoped>

main {
  box-shadow: 0px 10px 30px black;
}

header {
  position: fixed;
  width: 100%;
  height: 60px;
  border: 1px solid #DFE2EB;
}

</style>
