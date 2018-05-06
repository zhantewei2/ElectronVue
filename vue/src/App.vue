<template>
  <div id="app" :style="{height:h}">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      h:null
    }
  },
  created(){
    this.h=document.documentElement.offsetHeight+'px';
    window.addEventListener('resize',()=>{
      console.log('resize')
      this.h=document.documentElement.offsetHeight+'px';
    })
  }
}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  border-radius:20px;
  overflow:hidden;
  position:relative;
  background-color:rgba(100,100,100,.5)
}
.flex{
  display:flex;
}
html{
  background-color:transparent !important;
}
  body {
    margin: 0;
    position:relative;
    border-radius:8px;
    overflow:hidden;
  }
  .between{
   display:flex;
    justify-content: space-between;
  }

  *{
    box-sizing:border-box;
  }
  .head-title{
    background-color:rgb(100,100,100);
    padding:5px 10px;
    -webkit-app-region: drag;
  }
  button{
    -webkit-app-region:no-drag;
  }
  .center{
    display:flex;
    justify-content: center;
    align-items: center;
  }
</style>
