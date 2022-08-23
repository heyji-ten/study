<template>
  <div class="black-bg" v-if="modalOpen == true">
  <div class="white-bg" >
    <h4>{{onerooms[clickNum].title}}</h4>
    <img :src="onerooms[clickNum].image" alt="" style="width:100%">
    <p>{{onerooms[clickNum].content}}</p>

    <input v-model.number="month">
    <p> {{month}}개월 선택함 : {{onerooms[clickNum].price * month}} 원</p>
    
    <button @click="$emit('closeModal')">닫기</button>
  </div>
</div>
</template>

<script>
export default {
    name : 'ModalVue',
    data(){
      return{
        month:1,
      }
    },
    watch : {
      month(a){
        if (isNaN(a) == true) {
          alert('no');
          this.month = 1;
        }
      },
    },
    props : {
        onerooms : Array,
        clickNum : Number,
        modalOpen : Boolean,
    },

    beforeUpdate(){
      if(this.month == 2){
        alert('no');
        this.month = 3;
      }
    }
}
</script>

<style>

</style>