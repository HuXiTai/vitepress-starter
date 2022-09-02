<template>
  <input type="radio" name="sex" id="man" /><span>男</span>
  <input type="radio" name="sex" id="woman" /><span>女</span>
</template>

<script></script>

<style scoped>
#man:checked + span {
  background-color: #00ffff;
}

#man:checked + span::after {
  content: "被选中";
}

#woman:checked + span {
  background-color: pink;
}

#woman:checked + span::after {
  content: "被选中";
}
</style>
