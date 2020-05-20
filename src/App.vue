<template>
  <div class='main-div'>
      <h1>Task App</h1>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
  import TaskList from './components/TaskList.vue';

  export default {
    components: {
      taskList: TaskList
    }
  }
</script>

<style scoped>
  .main-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background: #D8D8D8;
  }

  hr {
    width: 100%;
  }
</style>
