<script lang="ts">
export default{
  props: {
    editing: Boolean
  },
  data(){
    return {
      text:''
    }
  }
}
</script>

<template>
  <div class="card">
    <input v-if='editing' v-model="text"> 
    <input v-else v-model="text" readonly> 
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
