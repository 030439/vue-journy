<template>
    <div v-for="singleTask in tasks" :key="singleTask.id">
      <TaskItem @toggle-reminder="$emit('toggle-reminder',singleTask.id)" @delete-task="$emit('delete-task',singleTask.id)" :task="singleTask" />
    </div>
  </template>
  
  <script>
  import TaskItem from './TaskItem.vue';
  
  export default {
    name: 'TasksArray',
    props: {
      tasks: Array,
    },
    components: {
      TaskItem,
    },
    emits:['delete-task','toggle-reminder']
  };
  </script>
  