import TaskList from './components/TaskList.vue';
import AddTask from './components/AddTask.vue';
import DeleteTask from './components/DeleteTask.vue';
import EditTask from './components/EditTask.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '/task-list', component: TaskList },
    { path: '/tasks/:id/edit', component: EditTask },
    { path: '/tasks/:id/delete', component: DeleteTask },
    { path: '/add-task', component: AddTask },
    { path: '/', component: Home },
    { path: '*', redirect: '/' }
];