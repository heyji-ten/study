<template>

<transition name="fade">
<Modal :onerooms="onerooms" :clickNum="clickNum" :modalOpen="modalOpen" @closeModal="modalOpen = false"/>
</transition>

  <div class="menu">
    <a v-for="(a,i) in menus" :key="i">{{ a }}</a>
  </div>

  <Discount v-if="showDiscount == true" :percente="percente"/>

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>
  <button @click="priceBig">가격역순</button>
  <button @click="nameSort">가나다순</button>
  <button @click="price">50만원이하</button>

  <Card @openModal="modalOpen = true; clickNum = $event" v-for="(database,i) in onerooms" :key="i" :onerooms="onerooms[i]"/>
</template>

<script>

import data from './assets/data.js';
import Discount from './Discount.vue';
import Modal from './Modals.vue';
import Card from './Card.vue';


export default {
  name: 'App',
  data(){
    return {
      percente : 30,
      showDiscount : true,
      originOnerooms : [...data],
      clickNum : 0,
      onerooms : data,
      modalOpen : false,
      numbers : [0, 0, 0],
      menus : ['Home', 'Shop', 'About' ],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },

  methods : {
    increase(){
      this.numbers[0] += 1;
    },
    increase2(){
      this.numbers[1] += 1;
    },
    increase3(){
      this.numbers[2] += 1;
    },

    priceSort(){
      this.onerooms.sort(function(a,b){
        return a.price - b.price
      })
    },
    sortBack(){
      this.onerooms = [...this.originOnerooms];
    },
    priceBig(){
      this.onerooms.sort(function(a,b){
        return b.price - a.price
      })
    },
    nameSort(){
      this.onerooms.sort(function(a,b){
        return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
      })
    },
    price(){
      this.onerooms.filter(function(a){
        return a.price < '500000';
      })
    },
  },

  mounted(){
    setInterval(()=>{
      this.percente = this.percente - 1;
    },1000);
  },

  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 0.5s;
}
.fade-leave-to {
  opacity: 0;
}


</style>
