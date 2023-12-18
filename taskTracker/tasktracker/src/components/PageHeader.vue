<template>
    <div>
      <h1>{{ title}}</h1> 
      <TaskButton  text="Add Task" color="green"/>
      <!-- Other content goes here -->
    </div>
  </template>
  
  <script>
  import TaskButton from './TaskButton'
  export default {
    name: 'PageHeader',
    props:{
        title:String,
    },
    components:{
        TaskButton,
    }
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  