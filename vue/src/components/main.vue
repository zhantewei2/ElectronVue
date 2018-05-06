<template>
  <div>
    <div class="head-title between">
      <span class="title-brand">
        <md-icon>account_balance</md-icon>
      </span>
      <span>
        <md-button @click="min" class="md-icon-button">
          <md-icon>remove</md-icon>
        </md-button>
        <md-button @click="max" class="md-icon-button">
          <md-icon>{{isMax?'filter_none':'crop_square'}}</md-icon>
        </md-button>
        <md-button class="md-icon-button">
          <md-icon>close</md-icon>
        </md-button>
      </span>

  </div>
  <div class="flex">
    <div class="nav">
      <div class="nav-content"></div>
    </div>
    <div class="container">

      <h1>Windows H5 桌面应用</h1>
      <md-button class="md-raised" @click="send">send</md-button>
      <div>vue</div>
    </div>
  </div>

  </div>

</template>

<script>
  export default {
    data:function(){
      return {
        name:1,
        isMax:false
      }
    },
    methods:{
      send:function(){
        socket.emit('message','ss')
      },
      min:function(){
        socket.emit('minimize','');
      },
      max:function(){
        socket.emit(!this.isMax?'maximize':'unmaximize','hi',(state)=>{
          this.isMax=state==='max';
        });
      }

    }
  }
</script>

<style scoped>
  .nav{
    width:70px;
  }
  .nav-content{
    display:block;
    position:absolute;
    background-color:rgba(0,0,0,.6);
    width:70px;
    height:calc(100% - 50px);
    top:50px;
    left:0;
  }
  .container{
    flex:1;
    padding:5px 10px;
    text-align:center;

  }
  .title-brand{
    padding:7px;
  }
  </style>
