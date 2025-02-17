<!-- components/Layout.vue -->
<template>
  <div class="layout">
    <!-- Header -->
    <header>
      <h1>Header</h1>
    </header>
    <div class="content">
      <aside>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        </ul>
      </aside>

      <!-- 内容区 -->
      <main>
        <router-view></router-view>
      </main>
    </div>
    <!-- 侧边栏 -->
    
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh; /* 使布局容器高度填满浏览器 */
}

/* Header 样式 */
header {
  background-color: #f0f0f0;
  padding: 10px;
}

/* 内容区样式 */
.content {
  display: flex;
  flex: 1; /* 填充剩余空间 */
}

/* 侧边栏样式 */
aside {
  width: 200px;
  background-color: #e0e0e0;
  padding: 10px;
}

/* 主内容样式 */
main {
  flex: 1; /* 填充剩余空间 */
  padding: 10px;
  background-color: #fff;
}

</style>