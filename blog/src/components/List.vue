<template>
  <div v-for="(blog,i) in blogData" :key="i">
    <h5 @click="$router.push('/detail/'+blog.number)">{{blog.title}}</h5>
    <p>{{blog.date}}</p>
  </div>
</template>

<script>
export default {
    name : 'blogList',
    props: {
      blogData:Array,
    }
}
</script>

<style>

</style>