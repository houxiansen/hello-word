<template>
  <div class="not-fond">
    <Button type="primary" @click="refreshBg">切换为白色背景</Button>
  </div>
</template>
<script>
export default {
  name: 'user-1',
  data() {
    return {}
  },
  methods: {
    refreshBg() {
      this.$store.commit('UPDATE_COLOR', '#fff');
    }
  }
}
</script>
<style lang="less" scoped>
</style>
