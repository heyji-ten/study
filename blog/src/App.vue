<template>
<div class="backtop">
    <div class="inner">
      <q-layout view="hHh lpR fFf">

        <header class="members-info h30">
          <div class="row justify-end">
          <div class="col-5">
            <ul class="row justify-end right_line">
              <li>내블로그</li>
              <li>이웃블로그</li>
              <li>블로그홈</li>
              <li>아이디</li>
            </ul>
          </div>
    </div>
        </header>

        <router-link to="/"><div class="enter"></div></router-link>

        <q-page-container>
          <div class="topNav">
            <ul class="row justify-between">
              <li>
                <ol class="row right_line">
                  <li>
                    <router-link to="/">프롤로그</router-link>
                  </li>
                  <li>
                    <router-link to="/">블로그</router-link>
                  </li>
                  <li>
                    <router-link to="/">블로그 새소식</router-link>
                  </li>
                  <li>
                    <router-link to="/">라이프로그, 블로그</router-link>
                  </li>
                  <li>
                    <router-link to="/">스마트에디터ONE</router-link>
                  </li>
                </ol>
              </li>
              <li>
                <ol class="row right_line">
                  <li>
                    <router-link to="/">지도</router-link>
                  </li>
                  <li>
                    <router-link to="/">서재</router-link>
                  </li>
                  <li>
                    <router-link to="/">메모</router-link>
                  </li>
                  <li>
                    <router-link to="/">안부</router-link>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
          <div class="content-container row">
            <div class="content">
            <router-view :blogData="blogData" />
          </div>
          <div class="aside">
            <q-card flat class="my-card">
              <q-card-section class="row">
                <q-avatar class="mar10" size="18px">
          <img src="./assets/blogIcon.gif" />
        </q-avatar>
        <div class="name">
          <div class="text-h6 f9">
                  네이버 블로그 팀</div>
                <div class="text-subtitle2 f9">(blogpeople)</div>
        </div>
                <q-avatar size="15px" class="ch">
      <img src="https://ssl.pstatic.net/static/blog/ico_official_blog4.png">
    </q-avatar>
              </q-card-section>

              <q-card-section>
                네이버 블로그팀입니다. 여러분의 사랑과 관심으로 서로이웃이 가득 찼습니다. 이웃으로 추가해주세요.
              </q-card-section>

              <q-separator dark />

              <q-card-actions>
                <q-btn outline >이웃추가</q-btn>
              </q-card-actions>
            </q-card>

            <div class="category"  v-if="$route.name !== 'Home'">
              <ul class="cate">
                <li class="row">
<!-- <q-avatar class="mar10" size="18px">
          <img src="https://blogimgs.pstatic.net/nblog/spc.gif" />
        </q-avatar> -->
        <router-link to="/">전체보기 (1113)</router-link>
                </li>
                <li>
                  <ol>
                    <li><router-link to="/">블로그 새소식</router-link></li>
                    <li><router-link to="/">라이프로그, 블로그</router-link></li>
                    <li><router-link to="/">블로그 이벤트</router-link></li>
                  </ol>
                </li>
                <li>
                  <ol>
                    <li><router-link to="/">이달의 블로그</router-link></li>
                    <li><router-link to="/">스마트에디터ONE</router-link></li>
                    <li><router-link to="/">블로그마켓 TIP</router-link></li>
                  </ol>
                </li>
              </ul>
            </div>

           <q-input outlined bottom-slots v-model="text" label="Label" :dense="dense">
          <div class="imgBox" style="background:url(./assets/search.svg)">
    </div>

      </q-input>

      <div class="banner">
        <img src="./assets/banner.png" alt="">
      </div>
          </div>
          </div>
          
        </q-page-container>

      </q-layout>
    </div>
  </div>
</template>

<script>
import blogData from './assets/blog.js';

export default {
  name:'App',
  data(){
    return {
      blogData : blogData,
    }
  },
}
</script>

<style>

.backtop {
  background: url('./assets/backtop.png') no-repeat center 0;
}

.inner {
  max-width: 970px;
  width: 100%;
  margin: 0 auto;
}

header.h30 {
  height: 30px;
  color: #fff;
}

.enter {
  height:360px;
}

ul, ol {
  list-style: none;
  padding:0;
}

ul li, ol li {
  padding:0;
}

.content {
  max-width: calc(100% - 171px);
  width:100%;
  padding-bottom:150px;
}

.aside {
  max-width:171px;
  width:100%;
}

a {
  text-decoration: none;
  color: #000;
}

.topNav a {
  text-decoration: none;
  color: rgb(28, 36, 241);
}

ol.right_line>li {
  padding:0 8px;
  position:relative;
}

ol.right_line>li::after {
  content:'';
  width:1px;
  height:12px;
  background:#999;
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
}

ol.right_line>li:last-child:after {
  display: none;
} 

.topNav {
  border-bottom: 2px solid rgb(28, 36, 241);
  margin-bottom: 30px;
}

.members-info ul>li {
  padding:0 8px;
  position:relative;
}

.members-info ul>li::after {
  content:'';
  width:1px;
  height:12px;
  background:#fff;
  position:absolute;
  right:0;
  top:50%;
  transform:translateY(-50%);
}

.members-info ul>li:last-child:after {
  display: none;
} 

.text-h6.f9 {
  font-weight: bold;
}

.text-h6.f9,
.text-subtitle2.f9 {
  font-size:9pt;
  line-height:1.5;
}

.q-avatar.mar10 {
  margin-right: 10px;
}

.aside .q-card__section--vert {
  padding: 0 15px;
  margin-bottom: 10px;
}

.aside .q-card__actions .q-btn {
  width: 100%;
  height: 36px;
  border-radius: 0;
}

.aside .q-btn--outline:before {
  border: 1px solid #ddd;
}

.aside .q-card {
  margin-bottom: 40px;
}

.imgBox {
  display: block;
  width: 20px;
  height: 20px;
}

.category {
  margin-bottom:50px;
}

.category .cate>li {
  padding:15px 0;
  position:relative;
}

.category .cate>li::after {
  content: '';
  position:absolute;
  width: 140px;
  height: 1px;
  border-bottom: 1px dashed #333;
  bottom:0;
}

.category .cate>li:last-child:after {
  display:none;
}

.q-avatar.ch {
  padding-left: 5px;
}


</style>