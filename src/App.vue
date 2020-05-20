<template>
  <div class='main-div'>
      <h1>Task App</h1>
      <hr>
      <app-header></app-header>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>
  import TaskList from './components/TaskList.vue';
  import Header from './components/Header.vue';

  export default {
    components: {
      appHeader: Header,
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
