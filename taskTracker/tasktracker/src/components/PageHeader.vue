<template>
    <div>
      <h1>{{ title}}</h1> 
      <TaskButton @btn-click="$emit('toggle-add-task')" 
                  :text="ChangeBtn ? 'Close' :'Add Task'"
                  :color="ChangeBtn ? 'red' : 'green'"/>
      <!-- Other content goes here -->
    </div>
  </template>
  
  <script>
  import TaskButton from './TaskButton'
  export default {
    name: 'PageHeader',
    props:{
        title:String,
        ChangeBtn:Boolean,
    },
    components:{
        TaskButton,
    }
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  