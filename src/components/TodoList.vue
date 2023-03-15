<script lang="ts">
import TodoTask from "./TodoTask.vue";

class TodoTaskObject {
  constructor(
    public isEditing: boolean, 
    public id: number
  ) {}
}

let id = 1

export default {
  components:{
    TodoTask
  },
  data(){
    return {
      todos: [new TodoTaskObject(false, id)]
    }
  },
  methods:{
    addTodo(){
      id++
      this.todos.push(
        new TodoTaskObject(true, id)
      )
    },
    deleteTodo(todoId: TodoTaskObject){
      console.log(todoId.id)
      this.todos = this.todos.filter((val: TodoTaskObject)=>val.id !==todoId.id)
    }   
  }
}
</script>

<template>
  <div class="card">
    <button @click="addTodo">Add todo</button>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <TodoTask :editing="todo.isEditing"></TodoTask>
        <button @click="todo.isEditing = !todo.isEditing">
          {{ todo.isEditing? 'done': 'edit' }}
        </button>
        <button @click="deleteTodo(todo)">
          delete
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
