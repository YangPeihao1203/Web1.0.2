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
        }
    }
})