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
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {};
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
  }
</style>