<template>
    <div>
      <h1>{{ title}}</h1>
      <!-- Other content goes here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageHeader',
    props:{
        title:String,
    }
  };
  </script>
  
  <style>
  /* Your styles go here */
  </style>
  