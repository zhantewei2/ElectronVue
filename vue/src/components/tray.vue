<template>
  <div class="tray">

    <md-list>
      <md-list-item v-for="i in list">
        <md-icon>{{i.icon}}</md-icon>
        <span>{{i.name}}</span>
      </md-list-item>
    </md-list>
  </div>

</template>

<script>
  export default {
    data:function(){
      return {
        list:[
          {icon:'person_pin',name:'个人中心'},
          {icon:'message',name:'消息记录'},
          {icon:'exit_to_app',name:'退出'}
        ]
      }
    }
  }
</script>

<style scoped>
  .tray{
    color:black;
    border-radius:5px;
    height:100%;
    width:100%;

    position:fixed;
  }
</style>
