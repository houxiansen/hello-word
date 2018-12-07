<template>
  <div class="login">
    <p>登录</p>
    <Form :model="formItem" :label-width="80">
      <FormItem label="用户名：">
        <Input v-model="formItem.name" placeholder="请输入用户名"></Input>
      </FormItem>
      <FormItem label="密码：">
        <Input v-model="formItem.password" placeholder="请输入密码"></Input>
      </FormItem>
    </Form>
    <Button type="success" long @click="login">登录</Button>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      formItem: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // 假设登录成功
      window.sessionStorage.setItem('user', 'success')
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login {
  padding: 20px;
  width: 300px;
  border: 1px solid #ddd;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
}
</style>
