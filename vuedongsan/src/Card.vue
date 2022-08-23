<template>
  <div >
    <img :src="onerooms.image" alt="" class="room-img">
    <h4 @click="send">{{ onerooms.title }}</h4>
    <p>{{ onerooms.price }} 원</p>
  </div>
</template>

<script>
export default {
name : "CardVue",
props : {
    onerooms:Object,
},
methods : {
    send() {
this.$emit('openModal',this.onerooms.id)
    }
}
}
</script>

<style>

</style>