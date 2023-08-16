<template>
    <hr>
    <div class="box1"></div>
    <hr>
    <div class="box2"></div>
</template>

<script></script>

<style scoped>
            @keyframes test1 {
        from {
          margin-left: 0;
          background-color: orange;
        }

        to {
          margin-left: 400px;
          background-color: red;
        }

      }

      @keyframes test2 {
        0% { margin-left: 0; }
        25% { margin-left: 100px; }
        50% { margin-left: 200px; }
        75% { margin-left: 300px; }
        100% { margin-left: 400px; }
      }

      div {
        background-color: pink;
        width: 100px;
        height: 100px;
      }

      .box1 {
        animation-name: test1; /* 动画名 */
        animation-duration: 2s; /* 播放时间 */
        animation-delay: 1s; /* 延迟时间 */
        animation-timing-function: steps(24, end); /* 24帧播放视频 */
        animation-timing-function: ease; /* 运动曲线 */
        animation-iteration-count: infinite; /* 重复次数，可设置数值，也可设置为无限次 */
        
        animation-direction: alternate-reverse;
        /* 
          运动方向：
          normal //是正常运动
          reverse //反向运动
          alternate //运动完后，动画返回
          alternate-reverse //反向运动完后，动画返回
        */


        animation-play-state: running;        
        /* 
          动画执行状态：
          running //执行
          paused //暂停
        */

        animation-fill-mode: none;
        /* 
          动画填充模式：
          none //默认值，动画执行完毕后回到初始位置
          forwards //等待在初始状态，结束在100%位置
          backwards //等待在第一帧，结束在初始位置
          both //等待在第一帧，结束在100%位置
        */
      }

      /* 复合属性 */
      .box2 {
        animation: test2 1s ease 100ms 10
      }

      /* 暂停 */
      .box1:hover  {
        animation-play-state: paused;
      }
</style>
