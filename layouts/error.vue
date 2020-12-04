<template>
  <v-app>
    <div
      class="d-flex align-center pa-4"
      style="height: 100%; min-height: 100vh"
    >
      <v-card
        elevation="0"
        class="grey full-width lighten-4 d-flex flex-column align-start justify-space-between"
      >
        <v-card-subtitle> Error {{ error.statusCode }} </v-card-subtitle>
        <v-card-title> 程序遇到了一些错误 </v-card-title>
        <v-card-subtitle>
          请查看控制台中的错误信息，或者尝试点击下面的链接回到主页
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="primary" text>
            <NuxtLink to="/" class="text-decoration-none"> 返回主页 </NuxtLink>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>


<script>
export default {
    props:{
        error:{
            type:Object,
            default:null,
        },
    },
    data(){
        return {
            pageNotFound:'404 Not Found',
            otherError:'An error occurred',
        }
    },
    head(){
        const title=
            this.error.statusCode===404?this.pageNotFound: this.otherError
            return {
                title
            }
    }
}
</script>