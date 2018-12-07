<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            首页
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            设置
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider :style="{background: '#fff'}">
          <Menu theme="light" width="auto" active-name="1-0" @on-select="menuClick">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                用户
              </template>
              <MenuItem name="user-1">用户一</MenuItem>
              <MenuItem name="user-2">用户二</MenuItem>
              <MenuItem name="1-3">子菜单3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                菜单二
              </template>
              <MenuItem name="2-1">子菜单1</MenuItem>
              <MenuItem name="2-2">子菜单2</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '500px', background: bgColor}">
            <router-view/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  computed: {
    bgColor() {
      return this.$store.state.color;
    }
  },
  methods: {
    menuClick (name) {
      this.$router.push({
        name: name
      })
    }
  }
}
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
