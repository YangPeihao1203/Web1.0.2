// vuex 状态树，
//该vuex为了实现数据的复用，用来表示
//用户的信息的存储和修改
export const state=()=>({
    userData:{
        id:null,
        avatar:null,
        name:null,
        bio:null,
        location:null,
        phone:null,
    },
    settings:{
        themeColor:null,
        fontSize:null,
        enableSearchHistory:null,
    },
    default:{
        userData:{
            id:-1,
            avatar:'http://192.144.239.108:8181/default.png',
            name:'匿名',
            bio:'未设置',
            location:'地球某处呢',
            phone:'xxxxxx'
        },
        setting:{
            themeColor:'#69c667',
            fontSize:16,
            enableSearchHistory:'enable',
        },
    },
})

// 状态树的方法
export const mutations={
    setUserData(state,data){
        state.userData=data
    },
    setThemeColor(state,data){
        state.themeColor=data
    },
      setFontSize(state,data){
        state.fontSize=data
    },

      setEnableSearchHistory(state,data){
        state.enableSearchHistory=data
    },
}
