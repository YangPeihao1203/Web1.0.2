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





    











  </div>


</template>