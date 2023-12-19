<template>
    <form @submit="onSubmit" class="add-form">
        <div class="from-control">
            <label>Task</label>
            <input type="text" v-model="text" name="text" placeholder="Add Task">
        </div>
        <div class="from-control">
            <label>Day</label>
            <input type="text" name="day" v-model="day" placeholder="Add Task">
        </div>
        <div class="from-control from-control-check">
            <label>Select Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>
        <input type="submit" value="Save Task" class="btn btn-block">
    </form>
</template>
<script>
export default{
    name:"AddTask",
    data(){
        return{
            text:'',
            day:'',
            reminder:false
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            if(!this.text){
                alert("please enter text");
                return
            }
            const newTask={
                id:Math.floor(Math.random()*1000000),
                text:this.text,
                day:this.day,
                reminder:this.reminder
            }
            this.$emit('add-task',newTask),
            this.text='',
            this.day='',
            this.reminder=false
        }
    }
}
</script>

<style scoped>
.add-form{
    margin-bottom: 40px;
}
.from-control{
    margin: 5px 0px;
}
.from-control label{
    display: block;
}
.from-control input{
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}
.from-control-check{
   display: flex;
   align-items: center;
   justify-content: space-between;
}
.from-control-check input{
   flex: 2;
   height: 20px;
   margin-bottom: 10px;
}
</style>