<template>
  <input v-model="title" placeholder="제목"/>
  <textarea v-model="content" placeholder="내용"/>
  <button @click="write">작성</button>
</template>

<script>
export default {
    name : "blogWrite",
    data() {
        return {
            title : "",
            content: "",
        }
    },
    props: {
      blogData:Array,
    },
}
</script>

<style>

</style>