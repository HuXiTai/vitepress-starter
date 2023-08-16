<template>
    <hr>
    <div class="box1"></div>
    <hr>
    <div class="box2"></div>
    <hr>
    <div class="box3"></div>
    <hr>
    <div class="box4"></div>
</template>

<script></script>

<style scoped>
      div {
        width: 100px;
        height: 100px;
        background-color: red;
        transition: all 3000ms ease 1s;
      }

      /* 平移，x轴y轴的距离，占位不变，行内元素不生效 */
      .box1:hover {
        transform: translate(100px, 0px);
      }

      /* 旋转，默认基点为中心点 */
      .box2:hover {
        transform: rotate(90deg);
        transform-origin: 99px 99px; /* 改变旋转基点 */
      }

      /* 缩放，"0.5"为水平倍数，"1.5"为垂直倍数 */
      .box3:hover {
        transform: scale(0.5, 1.5);
      }

      /* 扭曲，类似于平行四边形 */
      .box4:hover {
        transform: skew(-15deg, -15deg);
      }
</style>
