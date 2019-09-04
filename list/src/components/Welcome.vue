<template>
  <div class="hello">
    <h1>Welcome to this page</h1> <br/> 
    <input class="input-text" type="text" v-model="value"/><br/>
    <button @click="start">let's start</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  },
  methods:{
      start(){
          this.$router.push("/home"); 
          this.$store.commit('setUsername',this.value)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  padding: 4px 15px 4px 0;
  margin-bottom: 10px;
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
h1 {
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
