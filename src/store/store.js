import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            { id: '1', title: 'Sample Task 1', content: 'Walk the dog.' },
            { id: '2', title: 'Sample Task 2', content: 'Do Load of Laundry' }
        ]
    },
    getters: {
        task: state => id => state.tasks.find(taskObject => taskObject.id === id)
    },
    mutations: {
        deleteTask(state, { id }) {
            state.tasks.splice(state.tasks.findIndex(taskObject => taskObject.id === id), 1);
        },
        addTask(state, payload) {
            const id = Math.floor(Math.random() * 100000).toString();
            state.tasks.push({ id, title: payload.taskTitle, content: payload.taskContent });
        },
        updateTask(state, payload) {
            const indexToUpdate = state.tasks.findIndex(taskObject => taskObject.id === payload.id);

            state.tasks[indexToUpdate] = { id: payload.id, title: payload.title, content: payload.content };
        }
    }
});