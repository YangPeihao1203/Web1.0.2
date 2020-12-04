<template>
    <div>
        <v-list class="mt-8">
            <v-list-item>
            <v-avatar size='140' class="avatar ma-4">
                <!--v-show相当于切换display属性的值 -->
                <!-- :src 是v-bind:src的缩写 -->
                <!-- $store.state.l.表示引用我们的状态树 -->
                <v-img 
                v-show="$store.state.localStorage.status"
                :src="user.avatar||'127.0.0.1:8181:default_avatar.png'"
                alt="头像">
                </v-img>
            </v-avatar>
        </v-list-item>



      <v-list-item link>
        <v-list-item-content class="px-4 py-8">
          <v-list-item-title class="text-h6 mb-2">
            {{ user.name || '匿名' }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-subtitle-1">
            {{ user.bio || '未设置签名' }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>


   <v-list nav>
      <v-list-item-group>
        <NuxtLink id="nav-home" to="/" class="text-decoration-none">
          <v-list-item nuxt class="py-1 px-2">
            <v-list-item-action>
              <v-icon>mdi-view-dashboard-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title>主页</v-list-item-title>
          </v-list-item>
        </NuxtLink>

        <NuxtLink id="nav-profile" to="/profile" class="text-decoration-none">
          <v-list-item nuxt class="py-1 px-2">
            <v-list-item-action>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title>个人资料</v-list-item-title>
          </v-list-item>
        </NuxtLink>

        <NuxtLink id="nav-settings" to="/settings" class="text-decoration-none">
          <v-list-item nuxt class="py-1 px-2">
            <v-list-item-action>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title>设置</v-list-item-title>
          </v-list-item>
        </NuxtLink>

        <NuxtLink id="nav-about" to="/about" class="text-decoration-none">
          <v-list-item nuxt class="py-1 px-2">
            <v-list-item-action>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title>关于 ChatCat</v-list-item-title>
          </v-list-item>
        </NuxtLink>
      </v-list-item-group>
  <v-list-item-group>
        <v-list-item
          id="switch-account"
          nuxt
          class="mt-4 mb-0 py-1 px-2"
          @click="switchAccount"
        >
          <v-list-item-action>
            <v-icon>mdi-account-supervisor-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>切换账号</v-list-item-title>
        </v-list-item>
        <v-list-item id="logout" nuxt class="py-1 px-2" @click="logout">
          <v-list-item-action>
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title>退出登录</v-list-item-title>
        </v-list-item>
    </v-list-item-group>
    </v-list>
    </div>

</template>

<script>
export default {
    props:{
        u:{
            type:Object,
            default(){
                return(
                    this.$store.state.localStorage.userData||
                    this.$store.state.localStorage.default.userData
                )
            },
        },
    },
    data(){
        return{
            user:
            this.u||
            this.$store.state.localStorage.userData||
            this.$store.state.localStorage.default.userData

        }
    },
    methods: {
        async logout(){
            await this.$axios
            .$post('localhost:8181:8000/logout',{})
            .then(()=>{
                console.log('Logout')
            })
            .catch((err)=>{
                console.error(err)
            })
            .finally(()=>{
                this.$router.push({path:'/welcome'})
                localStorage.clear()
            })
       },
       async switchAccount(){
           await this.$axios
           .post('localhost:8811/logout',{})
           .then(()=>{
               console.log('Switch Account')
           })
            .catch((err)=>{
                console.error(err)
            })
            .finally(()=>{
                this.$router.push({path:'/welcome'})
                localStorage.clear()
            })
       }
        
    }


}
</script>
<style scoped>
.avatar{
    box-shadow: 0 0 24px rgba(0,0,0,0.1);
}
</style>