<template>
 <hr>
 <div class="box1"></div>
 <hr>
 <div class="box2"></div>
</template>

<script></script>

<style scoped>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
      }

      .box1 {
        transition-property: all;
        transition-duration: 3000ms;
        transition-delay: 1s;
        transition-timing-function: ease;
      }

      .box2 {
        /* 复合属性 */
        transition: all 3000ms cubic-bezier(.13,.87,.83,.17) 1s;
      }

      div:hover {
        width: 200px;
        height: 200px;
      }
</style>
