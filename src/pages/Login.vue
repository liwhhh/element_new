<template>
  <el-row type="flex" justify="center" align="middle" class="wrapper">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input type="text" v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="Login">登录</el-button>
        <el-button @click="clreaForm">重置</el-button>
      </el-form-item>
    </el-form>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: "100862",
          password: "123"
        }
      };
    },
    methods: {
      Login() {
        if (!this.form.username || !this.form.password) {//空的时候提示错误
          this.$message.error("请输入手机号和密码");
          return;
        }
        this.$axios({
          url: "/login",
          method: "post",
          data: this.form
        }).then(res => {
          // const {message}=res.data;
          // console.log(JSON.stringify(res.data.data.token))
          // console.log(JSON.stringify(res.data.data.user))
          // console.log(message)
          if (res.data.message == "登录成功") {
            //登录成功,把token和user存储到本地存储用字符串格式存储
            // 然后跳转到主页
            localStorage.setItem("token", JSON.stringify(res.data.data.token));
            localStorage.setItem("user", JSON.stringify(res.data.data.user));
            this.$router.push("/");
          }
        });
      },
      clreaForm() {
        //重置
        this.form = {
          username: "",
          password: ""
        };
      }
    }
  };
</script>

<style lang="less" scoped>
  .wrapper {
    //让表单居中
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
  }
</style>