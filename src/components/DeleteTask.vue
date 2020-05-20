<template>
    <div class='main-delete-div'>
        <h1 class='header-delete'>Delete Page for - {{ taskObject.title }}</h1>
        <hr class='hr-in-div'>
        <div class='btns-div'>
            <router-link tag='button' class='btn btn-primary' to='/task-list'>Cancel</router-link>
            <button class='btn btn-primary' @click='deleteTask'>Delete Task</button>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            taskObject() {
                return this.$store.state.tasks.find(taskObject => taskObject.id.toString() === this.$route.params.id);
            }
        },
        methods: {
            deleteTask(id) {
                this.$store.commit('deleteTask', { id });
                this.$router.push('/task-list');
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

    .btns-div button {
        width: 25%;
    }

    .hr-in-div {
        width: 100%;
    }

    .header-delete {
        font-size: 3rem;
        padding-bottom: 1rem;
        width: 100%;
        text-align: center;
    }

    .intro-paragraph {
        font-size: 2.25rem;
    }

    .main-delete-div {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
    }
</style>