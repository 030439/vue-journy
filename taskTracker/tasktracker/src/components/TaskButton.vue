<template>
<button class="btn">Add Task</button>
</template>
<script>
export default{
    name:'TaskButton',
    props:{
        text:String,
        color:String,
    }
}
</script>