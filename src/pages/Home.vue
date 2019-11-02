<template>
  <el-container class="wrapper">
    <el-aside width="200px">
      <el-row>
        <el-col>
          <div class="title">黑马程序</div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#f09f34"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">文章列表</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">发布文章</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 头部,拿到本地存储的user转对象, 在这判断if有头像加这个ip地址加头像,如果没有就默认一个头像, 用户名也渲染上 -->
         <img class="avatar" v-if="user.head_img" :src="$axios.defaults.baseURL+user.head_img" alt="">
         <img class="avatar" v-else src="../assets/logo.png" alt="">
         <span class="nickname">用户名: {{user.nickname}}</span>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    data(){
      return{
        user:JSON.parse(localStorage.getItem('user'))
      }
    }
  };
</script>

<style lang="less" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .el-aside {
    background: rgb(240, 159, 52);
  }
  .el-menu{
    position: relative;
    width: 100%;
    top: 0;
  }
  .title{
   width: 200px;
   height: 60px;
   line-height: 60px;
   text-align: center;
   font-size: 30px;
  }
  .el-header {
    background: rgb(255, 199, 95);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .avatar{
      width: 45px;
      height: 45px;
      border-radius:23px;
      margin-right: 20px;
    }
  }
</style>