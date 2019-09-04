<template>
  <div class="hello">
    <div>
    <!-- <h2>Vue To Do List</h2>
      <p>
        <em>Simple Todo List with adding and filter by diff status.</em>
    </p>-->
    <button id="back" @click="back">back</button>&nbsp;&nbsp;&nbsp;
    <span>{{name}}</span></div>
    <div>
      <p><router-link to="/my">我的</router-link>&ensp;&ensp;&ensp;</p>
      <p><router-link to="/list">TODOList列表</router-link>&ensp;&ensp;&ensp;</p>
    </div>
    <div><ToDoList/></div>
  </div>
  
</template>

<script>
import ToDoList from './ToDoList'
export default {
  name: "HomePage",
  props: {},
  components:{
    ToDoList
  },
  data(){
    return{
      name:this.$store.getters.getUsername
    }
  },
  methods: {
    back() {
      if (confirm("返回首页") == true) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#back {
  display: inline-block;
  background-color: #fc999b;
  color: #ffffff;
  border-radius: 5px;
  text-align: center;
  margin-top: 2px;
  padding: 5px 15px;
}
div{
  padding-left: 10px
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
