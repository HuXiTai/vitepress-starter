<template>
  <div class="box1"></div>
  <br />
  <div class="box2"></div>
  <br />
  <div class="box3"></div>
  <br />
  <div class="box4">
    <div class="circle"></div>
  </div>
  <br />
  <div class="box5"></div>
</template>

<script></script>

<style scoped>
.box1 {
  width: 200px;
  height: 100px;
  background-color: #88daf2;
  border-radius: 100px 100px 0 0;
}

.box2 {
  width: 100px;
  height: 100px;
  background-color: #de8650;
  border-radius: 0 100px 0 0;
}

.box3 {
  width: 0px;
  height: 0px;
  border: 50px solid;
  border-color: aqua;
  border-radius: 50px;
  border-left-color: transparent;
  border-right-color: transparent;
}

.box4 {
  position: relative;
  width: 0px;
  height: 0px;
  border: 50px solid;
  border-color: aqua;
  border-radius: 50px;
  border-right-color: transparent;
}

.circle {
  position: absolute;
  left: -5px;
  top: -35px;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 5px;
}
.box5 {
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50px;
  border-bottom-right-radius: 0;
}
</style>
