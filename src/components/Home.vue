<template>
    <div class='home-div'>
        <h1 class='header-home'>The Home Page</h1>
        <hr class='hr-in-div'>
        <p class='intro-paragraph'>Keep track of your tasks with the 'Task App'. This product will make sure you never lose a task and that you are always succeed.
            Start succeeding today and join and use 'Task App'! We already have 4 billion active users, what are you waiting for?
        </p>
        <hr class='hr-in-div'>
        <router-link tag='button' to='add-task' class='btn btn-primary button'>Start Your Task List today!</router-link>
    </div>
</template>

<style scoped>
    .hr-in-div {
        width: 100%;
    }

    .header-home {
        font-size: 5rem;
        padding-bottom: 1rem;
        width: 100%;
        text-align: center;
    }

    .intro-paragraph {
        font-size: 2.25rem;
    }

    .home-div {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
    }

    .button {
        margin-top: 2rem;
        padding: 2rem;
        display: flex;
        justify-content: center;
        width: 25%;
    }
</style>