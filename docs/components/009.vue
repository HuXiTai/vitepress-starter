<template>
 <hr>
 <div class="box1"></div>
 <hr>
 <div class="box2"></div>
</template>

<script></script>

<style scoped>
.box1 {
	width: 200px;
	height: 200px;
	background-image: radial-gradient(100px 50px at 30% 30%, red 30%,green 60%,yellow 90%);
}
.box2 {
	width: 200px;
	height: 200px;
	background-size: 80px 80px;
	background-image: repeating-radial-gradient(60px 30px, red,green,yellow);
}
</style>
