<template>
  <div style="position: relative; min-height: 100vh">
    <!-- v-app-bar标签是vuetify的内容，我们不用管 -->
    <v-app-bar flat elevation="0" color="white" style="z-index: 1000">
       <v-app-bar-nav-icon
       id="button-menu"
       @click="drawer=true"></v-app-bar-nav-icon>
       <v-toolbar-title class="text-h6">关于</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-app-bar>
      <v-navigation-drawer
    v-model="drawer"
    absolute
    light
    temporary
    style="heigh: 100vh; z-index: 2000"
    >
    <v-drawer v-if="drawer"></v-drawer>
    </v-navigation-drawer>

<v-main>
      <article class="pa-8">
        <!-- <v-img src="banner_light.png" class="banner mb-6"></v-img> -->
        <h2 class="pt-4 pb-8">这是什么？</h2>
        <p>
          这是一个小组合作的课程设计，目标是完成一个具有注册和登录功能的 Web
          应用，然后进行测试。
        </p>
        <h2 class="pt-4 pb-8">目前完成了哪些功能？</h2>
        <p>
          详见我们在 GitHub 上的看板：
          <a
            href="https://github.com/orgs/ChatCat-Team/projects/1"
            target="_blank"
            rel="noopener noreferrer"
            class="text-decoration-none"
            >ChatCat-Team/Projects</a
          >
        </p>
        <h2 class="pt-4 pb-8">网站用什么做的？</h2>
        <p>
          网站采用了前后端分离的技术，前端用的是基于 Vue2 的 Nuxt.js 框架，UI
          部分用的是 Vuetify，后端使用 Java 的 Spring 框架实现，数据库选择的是
          MySQL，网站的图标是用 Figma 画的。
        </p>
        <p>
          由于是聊天室，所以主要用到了 WebSocket 技术来实现消息的发送和接收。
        </p>
        <h2 class="pt-4 pb-8">在哪可以找到我们？</h2>
        <p>
          我们小组的页面是：
          <a
            href="https://github.com/ChatCat-Team"
            target="_blank"
            rel="noopener noreferrer"
            class="text-decoration-none"
            >ChatCat-Team</a
          >
          <br />
          前端部分的仓库：
          <a
            href="https://github.com/ChatCat-Team/Web"
            target="_blank"
            rel="noopener noreferrer"
            class="text-decoration-none"
            >ChatCat-Team/Web</a
          >
          <br />
          后端部分的仓库：
          <a
            href="https://github.com/ChatCat-Team/Server"
            target="_blank"
            rel="noopener noreferrer"
            class="text-decoration-none"
            >ChatCat-Team/Server</a
          >
        </p>
        <h2 class="pt-4 pb-8">开源协议？</h2>
        <p>MIT License</p>
      </article>
    </v-main>

  </div>

</template>

<script>
 import drawerItem from "../components/drawer";
export default {
    middleware:['fetch'],
    components:{
      'v-drawer':drawerItem
    },
    data:()=>({
      drawer:false
    })
}
</script>
<style scoped>
h2{
  font-weight: 500;
}
</style>