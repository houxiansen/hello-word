<template>
  <div class="not-fond">
    你在外太空!!!
  </div>
</template>
<script>
export default {
  name: 'not-found',
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
.not-fond {
  text-align: center;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
