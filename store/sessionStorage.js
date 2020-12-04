export const state=()=>({
    roomData:{
        id:null,
        creator:null,
        title:null,
        description:null,
        date:null,
    },
    default:{
        roomData:{
        id:-1,
        creator:'未知',
        title:'聊天室',
        description:'咩有描述',
        date:'未知时间',
    },
    }
})
export const mutations={
    setRoomData(state,data){
        state.roomData.id=data.id
        state.roomData.creator=data.creator
        state.roomData.title=data.title
        state.roomData.description=data.description
        state.roomData.date=data.date
    }
}