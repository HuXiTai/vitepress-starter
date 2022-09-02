<template>
  <a href="#box1">box1</a>
  <a href="#box2">box2</a> <br /><br />

  <div id="box1">1</div>
  <br />
  <div id="box2">2</div>
</template>

<script></script>

<style scoped type="text/css">
div {
  width: 100px;
  height: 100px;
  background-color: red;
}
#box1:target {
  background-color: #00ffff;
}
#box2:target {
  background-color: #00ffff;
}
</style>
