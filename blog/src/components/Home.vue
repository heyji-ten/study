<template>
  <div class="list-card row">
    <div class="list_card_row row">
      <q-card class="my-card" flat v-for="(list,i) in blogData.slice(0,2)" :key="i">
      <router-link :to="'/detail/'+list.number"><img :src="list.image"/></router-link>

      <q-card-section>
        <div class="text-title"><router-link :to="'/detail/'+list.number">{{list.title}}</router-link></div>
        <div class="text-subtitle2"><router-link :to="'/detail/'+list.number">{{list.date}}</router-link></div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <router-link :to="'/detail/'+list.number">{{ list.content }}</router-link>
      </q-card-section>
    </q-card>
    </div>
    <div class="list_card_column">
       <q-card class="my-card" flat v-for="(list,i) in blogData.slice(2,5)" :key="i">
      <q-card-section horizontal>
        <q-card-section>
        <div class="text-title w200">{{list.title}}</div>
        <div class="list_card_column_content w200">{{ list.content }}</div>
        <div class="text-subtitle2 w200">{{list.date}}</div>
      </q-card-section>

        <img
          class="col-5"
          :src="list.image"
        />
      </q-card-section>
    </q-card>
    </div>
  </div>
  <div class="life">
    <p>- 라이프로그.블로그</p>
    <div class="row wrap">
      <div class="col-6" v-for="(list,i) in blogData" :key="i">
        <q-card class="my-card" flat>
      <q-card-section horizontal>
        <img
          class="col-5"
          :src="list.image"
        />
        <q-card-section>
        <div class="text-title w270">{{list.title}}</div>
        <div class="list_card_column_content w270">{{ list.content }}</div>
        <div class="text-subtitle2 w270">{{list.date}}</div>
      </q-card-section>

        
      </q-card-section>
    </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : 'HomeVue',
    props : {
      blogData:Array,
    },
}
</script>

<style>

.list-card .list_card_row {
  margin: 0 0 0 -15px;
}
.list-card .list_card_row .my-card {
  width: 50%;
      padding:  0 15px;
      position:relative;
}

.list-card .list_card_row .my-card::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 290px;
  background: #ddd;
}

.list-card .list_card_row .my-card img {
  width:100%;
  height: 200px;
}

.list_card_row {
  width:60%;
}

.list_card_column {
  width:40%;
  padding:0 15px;
}

.list_card_column .my-card {
  width: 100%;
}

.list_card_column .my-card .w200 {
  max-width: 200px;
}

.list_card_column .my-card img {
  width:90px;
  height: 90px;
}

.list_card_column .q-card {
  margin-bottom: 6px;
}

.text-title {
  font-size: 18px;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.list_card_row .q-card__section--vert,
.list_card_column .q-card__section--vert {
  padding:0;
}


.list-card {
  padding-bottom: 50px;
  margin-bottom: 50px;
  border-bottom:1px solid #ddd;
  margin-right: 15px;
}

.life .row .q-card img {
  width: 90px;
  height: 90px;
}

.life .row .q-card {
  margin-bottom: 10px;
}

.life .row .q-card__section--vert {
  padding: 0 15px;
}

.life .row .q-card__section--vert .w270 {
  max-width:270px;
  width: 100%;
}
</style>