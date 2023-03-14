<script lang="ts">
import TodoTask from "./TodoTask.vue";

class TodoTaskObject {
  constructor(
    public isEditing: boolean, 
    public id: number
  ) {}
}

export default {
  components:{
    TodoTask
  },
  data(){
    return {
      todos: [new TodoTaskObject(false, 0)]
    }
  },
  methods:{
    addTodo(){
      this.todos.push(
        new TodoTaskObject(true, this.todos.length-1)
      )
    }
  }
}
</script>

<template>
  <div class="card">
    <ul>
      <li v-for="todo in todos">
        <TodoTask :editing="todo.isEditing"></TodoTask>
        <button @click="todo.isEditing = !todo.isEditing">edit</button>
        <button>delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
