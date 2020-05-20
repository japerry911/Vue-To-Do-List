import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [
            { id: 1, title: 'Sample Task 1', content: 'Walk the dog.' },
            { id: 2, title: 'Sample Task 2', content: 'Do Load of Laundry' }
        ]
    },
    mutations: {
        deleteTask(state, { id }) {
            state.tasks.splice(state.tasks.findIndex(taskObject => taskObject.id === id), 1);
        }
    }
});