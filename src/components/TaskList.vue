<template>
    <div class='task-list-div'>
        <h2 class='header-text'>Task List</h2>
        <task class='task' v-for='taskObject in tasks' :key='taskObject.id' :taskObject='taskObject'></task>
    </div>
</template>

<script>
    import Task from './Task.vue';

    export default {
        data() {
            return {
                tasks: [
                    { id: 1, title: 'Sample Task 1', content: 'Walk the dog.' },
                    { id: 2, title: 'Sample Task 2', content: 'Do Load of Laundry' }
                ]
            };
        },
        components: {
            task: Task
        }
    }
</script>

<style scoped>
    .task {
        padding-left: 1rem;
        width: 100%;
        border-top: 1pt solid black;
    }

    .task-list-div {
        display: flex;
        flex-direction: column;
        width: 70%;
        height: auto;
        align-items: flex-start;
        border: 2pt solid black;
        background-color: #fff;
    }

    .header-text {
        align-self: center;
    }
</style>