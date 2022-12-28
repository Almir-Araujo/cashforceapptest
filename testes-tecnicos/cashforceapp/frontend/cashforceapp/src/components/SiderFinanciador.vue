<template>
  <div class="sider-container">
    <img class="sider-logo" alt="Logo Cash Force" src="/cashforceLogo.svg">
      <button class="sider-btn">
        <img class="hands-icon" src="/Vector.png">
        Notas Fiscais
      </button>
  </div>
</template>

<style scoped>

.sider-container {
  flex-direction: column;
  height: 100%;
  background-color: #FBFDFE;
}

  .sider-logo {
    padding: 6px 8px 6px 16px;
    display: block;
    margin: 20px;
  }

  .hands-icon {
    padding-left: 20px;
  }

  .sider-btn {
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color:#00AD8C;
    padding: 6px 8px 6px 16px;
    display: block;
    background-color: #FBFDFE;
    border-left: 6px solid #00AD8C;
    border-bottom: none;
    border-top: none;
    border-right: none;
    border-radius: 5px;
    height: 80px;
  }

</style>