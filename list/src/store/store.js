import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        username: "",
        checkBoxs: []
    },
    getters: {
        getUsername: function (state) {
            return state.username
        },
        getCheckBoxs: function (state) {
            return state.checkBoxs
        },
    },
    mutations: {
        setUsername: function (state, username) {
            state.username = username
        },
        setlist: function (state, data) {
            window.console.log(data)
            //state.checkBoxs = data
        }       
    },
    actions: {
        add(store, name) {
            axios({
                method: 'post',
                url: 'http://localhost:8080/lists',
                headers: {
                    'Content-type': 'application/json;charset=UTF-8'
                },
                params: {
                    'id': store.state.checkBoxs.length,
                    'name': name,
                    'isCheck': false
                }
            }).then(function(response) {
                store.state.state.commit('setlist',response.data)
              })
        },
        getlist(store) {
            axios.get("http://localhost:8080/lists").then(function (response) {
                window.console.log(response.data)
                store.state.commit('setlist', response.data)
            });
        },
        check(state, id) {
            axios.put("http://localhost:8080/lists/" + id).then(function (response) {
                state.commit('update', response.data.item)
            });
        }
    }

})

export default store