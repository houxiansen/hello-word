<template>
  <div class="not-fond">
    <Button type="primary" @click="refreshBg">切换为黑色背景</Button>
    <div>
      <button @click="change">b to 3</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user-2',
  data() {
    return {
      foo: {
        a: '1',
        b: '2'
      },
      fooObj: null
    }
  },
  methods: {
    refreshBg() {
      this.$store.commit('UPDATE_COLOR', '#000');
    },
    change() {
      this.fooObj = JSON.parse(JSON.stringify(this.foo));
      this.foo.b = '3';
    }
  },
  watch: {
    foo: {
      handler: function(val, oldval) {
        console.log(val);
        console.log(oldval);
        console.log(this.fooObj);
      },
      deep: true
    }
  }
}
</script>
<style lang="less" scoped>
</style>
