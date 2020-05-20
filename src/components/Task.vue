<template>
    <div class='task-div'>
        <p class='task-title'>{{ taskObject.title }}</p>
        <p class='task-description'>{{ taskObject.content }}</p>
        <div class='icons-div'>
            <svg @click='editTask' class="bi bi-pencil-square svg-clickable" width="2em" height="2em" viewBox="0 0 16 16" fill="limegreen" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clip-rule="evenodd"/>
            </svg>
            <svg @click='deleteTask' class="bi bi-trash svg-clickable" width="2em" height="2em" viewBox="0 0 16 16" fill="lightcoral" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" clip-rule="evenodd"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            taskObject: Object
        },
        methods: {
            editTask() {
                this.$router.push(`/tasks/${this.taskObject.id}/edit`);
            },
            deleteTask() {
                this.$router.push(`/tasks/${this.taskObject.id}/delete`)
            }
        }
    }
</script>

<style scoped>
    .svg-clickable {
        cursor: pointer;
        margin: 0 1rem;
    }

    .task-title {
        margin: 0;
        font-size: 2.5rem;
        font-weight: bold;
        width: 20%;
    }

    .task-description {
        margin: 0;
        font-size: 1.55rem;
        width: 60%;
        text-align: center;
    }

    .task-div {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }

    .icons-div {
        width: 20%;
        display: flex;
        justify-content: flex-end;
        align-items: center
    }
</style>