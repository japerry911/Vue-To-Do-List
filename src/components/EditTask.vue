<template>
    <div class='edit-task-div'>
        <h1 class='header-edit'>Edit Task</h1>
        <hr class='hr-in-div'>
        <form>
            <div class='form-group'>
                <label for='task-title'>Task Title</label>
                <input
                    type='text'
                    id='task-title'
                    class='form-control'
                    v-model='task.taskTitle'
                >
            </div>
            <div class='form-group'>
                <label for='task-content'>Task Content</label>
                <input
                    type='text'
                    id='task-content'
                    class='form-control'
                    v-model='task.taskContent'
                >
            </div>
            <div class='btns-div'>
                <router-link tag='button' class='btn btn-primary' to='/task-list'>Cancel</router-link>
                <button @click.prevent='submitted' class='btn btn-primary'>Update Task</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                task: {
                    taskTitle: '',
                    taskContent: ''
                }
            };
        },
        mounted() {
            const currentTask = this.$store.getters.task(this.$route.params.id);

            this.task.taskTitle = currentTask.title;
            this.task.taskContent = currentTask.content;
        },
        methods: {
            submitted() {
                if (this.task.taskTitle === '' || this.task.taskContent === '') {
                    alert('Please fill in both Task Title and Task Content.');
                } else {
                    this.$store.commit('updateTask', { id: this.$route.params.id, title: this.task.taskTitle, content: this.task.taskContent });
                    this.$router.push('/task-list');
                }
            }
        }
    }
</script>

<style scoped>
    .btns-div {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    form {
        width: 100%;
    }

    .btns-div button {
        width: 25%;
    }

    .hr-in-div {
        width: 100%;
    }

    .header-edit {
        font-size: 3rem;
        padding-bottom: 1rem;
        width: 100%;
        text-align: center;
    }

    .edit-task-div {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
    }
</style>