<script lang="ts">
export default{
  data(){
    return {
      text:''
    }
  }
}
</script>

<template>
  <div class="card">
    <input v-model="text"> 
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
