<template>
   
  <div class="container">
    <PageHeader @toggle-add-task="toggleAddTask" 
                title="Task Tracker"
                :ChangeBtn="showTask"/>
    <div v-show="showTask">
      <AddTask @add-task="addTask"/>
    </div>
    <TasksArray @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
 
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import TasksArray from './components/TasksArray.vue';
import AddTask from './components/AddTask.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    TasksArray,
    AddTask,
  },
  data(){
    return {
      tasks:[],
      showTask: true
    }
  },
  methods:{
    toggleAddTask(){
      this.showTask=!this.showTask
    },
    async addTask(task){
    this.tasks=[...this.tasks,task]
    },
    deleteTask(id){
     this.tasks=this.tasks.filter((task)=> task.id !==id);
    },
    toggleReminder(id){
   this.tasks=this.tasks.map((task)=>task.id==id ? {...task, reminder: !task.reminder }:task)
    },
    async fetchTask(){
      const res=await fetch('http://localhost:300/tasks')
      const data =await res.json()
      return data
    },
    async fetchSingleTask(id){
      const res=await fetch(`api/tasks/${id}`)
      const data =await res.json()
      return data
    }
  },
  async created(){
    this.tasks= await this.fetchTask()
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
