<template>
  <div class="TodoList">
    <div>
      <h2>Vue To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
      </p>
      <input class="input-text" type="text" v-model="value"/>
      <button @click="add">Add</button>
      <ol>
        <div v-for="(item,index) in items" :key="index">
          <li style="align:left">
            <input id="check" type="checkbox" v-model="item.ischeck" @click="check(item)"/>
            <span>{{item.name}}</span>
          </li>
        </div>
      </ol>
      <span class="bottom">
        <button @click="all">All</button>
        <button @click="active">Active</button>
        <button @click="complete">Complete</button>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    todoList: Number
  },
  data() {
    return {
        value:"",
        items:this.$store.getters.getCheckBoxs
    };
  },
  methods: {
    add:function() {
         this.$store.dispatch('add',this.value)
    },
    all:function() {
        this.items = this.$store.getters.getCheckBoxs;
    },
    active:function() {
        this.items = this.$store.getters.getCheckBoxs.filter(item => item.checked===false);
    },
    complete:function() {
        this.items = this.$store.getters.getCheckBoxs.filter(item => item.checked===true);
    },
    check:function(item){
        this.$store.commit('check',item.id)
    }
  }
};
</script>

<style scoped>
.TodoList {
  display: flex;
  justify-content: center;
}
.input-text {
  width: 70%;
}
input {
  padding: 4px 15px 4px 0;
}
button {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
#button:hover {
  opacity: 0.7;
  cursor: pointer;
}
.list {
  margin: 20px;
}
.bottom {
  display:block;
  flex-wrap: nowrap;
}
.bottom div {
  padding: 10px;
  margin: 5px 10px;
  color: #fc999b;
}
.bottom div:hover {
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
}
</style>
