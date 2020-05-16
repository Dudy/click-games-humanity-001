import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        message: null,
        numberOfHouses: 1,
        numberOfPeople: 1,
        amountOfWood: 0.0,
        costOfHouse: 10,
        numberOfLumberjacks: 0,
        woodproduction: 0.0
    },
    mutations: {
        addPeople(state, number) {
            if (state.numberOfPeople + number <= state.numberOfHouses * 10) {
                state.numberOfPeople += number
            } else {
                state.message = 'you don\'t have enough housing'
            }
        },
        addHouse(state) {
            if (state.amountOfWood >= state.costOfHouse) {
                state.numberOfHouses += 1
                state.amountOfWood -= state.costOfHouse
            } else {
                state.message = 'you don\'t have enough wood'
            }
        },
        addWood(state, amount) {
            state.amountOfWood += amount
        },
        addLumberjack(state) {
            if (state.numberOfLumberjacks < state.numberOfPeople) {
                state.numberOfLumberjacks += 1
                state.woodproduction += 0.1
            } else {
                state.message = 'you don\'t have enough people'
            }
        },
        tick(state) {
            state.amountOfWood += state.woodproduction
        },
        setMessage(state, message) {
            state.message = message
        }
    },
    actions: {
        tick(context) {
            context.commit('tick')
        },
        setMessage(context, message) {
            context.commit('setMessage', message)
        },
        deleteMessage(context) {
            context.commit('setMessage', null)
        }
    },
    modules: {
    }
})
