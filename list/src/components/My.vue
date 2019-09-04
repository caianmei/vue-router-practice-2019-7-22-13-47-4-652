<template>
  <div class="my">
      <span>头像：</span>&ensp;
      <img alt="Vue logo" src="../assets/logo.png" />&ensp;&ensp;
      <span>姓名：{{this.$store.getters.getUsername}}</span>&ensp;
      <span>电话：15245987515</span>
  </div>
  
</template>

<script>
export default {
  name: "HomePage",
  props: {},
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
