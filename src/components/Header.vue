<template>
    <ul class="nav nav-pills">
        <router-link to='/' tag='li' active-class='active' exact><a>Home</a></router-link>
        <router-link to='/task-list' tag='li' active-class='active' exact><a>Task List</a></router-link>
        <router-link to='/add-task' tag='li' active-class='active' exact><a>Add Task</a></router-link>
    </ul>
</template>