<template>
  <div class="box">
    <div class="login-container">
      <h2>登录</h2>
      <form>
        <div class="form-group">
          <label for="username">账号：</label>
          <el-input v-model="userName" style="width: 240px" placeholder="Please input userName" />
        </div>
        <div class="form-group">
          <label for="password">密码：</label>
          <el-input
            v-model="passWord"
            style="width: 240px"
            placeholder="Please input Password"
            type="password"
          />
        </div>
        <el-button type="primary">登陆</el-button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('')
const passWord = ref('')
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.login-container {
  width: 350px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
  display: flex;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
