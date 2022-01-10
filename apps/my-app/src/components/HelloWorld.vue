<template>
  <div class="hello">
    <Header/>
    <h1>Plop</h1>
    <toto></toto>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toto from '../../../footer/src/Toto.vue'
import Header from '../../../header/src/Header.vue'

export default Vue.extend({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Toto,
    Header
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
