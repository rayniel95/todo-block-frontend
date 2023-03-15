<script lang="ts">
import TodoTask from "./TodoTask.vue";

class TodoTaskObject {
  constructor(
    public isEditing: boolean, 
    public id: number
  ) {}
}

let id = 0

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
      this.todos.push(
        new TodoTaskObject(true, this.todos.length-1)
      )
      id++
    },
    deleteTodo(id: number){
      this.todos = this.todos.filter((val: TodoTaskObject)=>val.id !==id)
    }   
  }
}
</script>

<template>
  <div class="card">
    <ul>
      <li v-for="todo in todos">
        <TodoTask :editing="todo.isEditing"></TodoTask>
        <button @click="todo.isEditing = !todo.isEditing">
          {{ todo.isEditing? 'done': 'edit' }}
        </button>
        <button @click="deleteTodo(todo.id)">delete</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
