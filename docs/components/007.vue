<template>
   <hr>
  <p data-foo="hello">world</p>
</template>

<script></script>

<style scoped>
[data-foo]::before {
  content: attr(data-foo) " ";
}
</style>
