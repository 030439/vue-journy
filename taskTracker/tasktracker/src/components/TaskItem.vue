<template>
  <div @dblclick="toggleReminderS(task.id)" :class="[task.reminder?'reminder':'','task']" >
    <h3>{{ task.text }}
    <i @click="onDelete(task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
  </template>
  
  <script>
  export default {
    name: "TaskItem", // Adjusted the component name to match with the import in TasksArray
    props: {
      task: Object,
    },
    methods:{
        onDelete(id){
            this.$emit('delete-task',id)
        },
        toggleReminderS(id){
            this.$emit('toggle-reminder',id)
        },
    }
  };
  </script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
  