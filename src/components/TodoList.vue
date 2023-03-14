<script lang="ts">
import TodoTask from "./TodoTask.vue";

export default {
  components:{
    TodoTask
  },
  data(){
    return {
      todos: []
    }
  }
}
</script>

<template>
  <div class="card">
    <ul>
      <li v-for="todo in todos">

      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
