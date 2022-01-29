<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "box-bg-white",
};
</script>

<style>
.box {
  box-shadow: 0px 0px 30px rgb(0 0 0 / 5%);
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}
</style>
