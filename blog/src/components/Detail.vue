<template>
<div class="notice content_wrap">
  <ul>
    <li v-for="(blog,i) in blogData" :key="i" class="row justify-between">
      <p @click="$router.push('/detail/'+blog.number)"><span>공지</span>{{blog.title}}</p>
    <p>{{blog.date}}</p>
    </li>
  </ul>
</div>

<q-expansion-item class="content_wrap">
        <template v-slot:header="{ expanded }">
          <div class="justify-between row" style="width:100%;">
          <p><b>이달의 블로그</b> <span>150개의 글</span></p>

          <div>{{ expanded ? '목록닫기' : '목록열기' }}</div>

          </div>
        </template>

        <q-card>
          <q-card-section>
            <ul>
              <li class="top row justify-between">
                <p>글 제목</p>
                <p>작성일</p>
              </li>
    <li v-for="(blog,i) in blogData" :key="i" class="row justify-between">
      <p @click="$router.push('/detail/'+blog.number)">{{blog.title}}</p>
    <p>{{blog.date}}</p>
    </li>
  </ul>
          </q-card-section>
        </q-card>
      </q-expansion-item>
<div class="content_wrap">
    <div >
        <h5>{{blogData[$route.params.id].title}}</h5>
        <p>{{blogData[$route.params.id].date}}</p>
    </div>
    <div>
      <img :src="blogData[$route.params.id].image">
        <div>{{blogData[$route.params.id].content}}</div>
    </div>
  </div>
</template>

<script>
export default {
    name:'blogDetail',
    props: {
      blogData:Array,
    }
}
</script>

<style>
.notice {
  margin-bottom:50px;
}

.notice ul li span {
  font-weight: bold;
  color: rgb(0, 175, 53);
  padding-right: 10px;
}

.notice ul li p {
  margin: 0;
  cursor: pointer;
}

.notice ul li {
  margin-bottom: 10px;
}

.content_wrap {
  max-width: 760px;
  width: 100%;
}

.q-item__section {
  display:none;
}

.relative-position .q-card ul li.top {
  border-bottom:1px solid #333;
  cursor: none;
}

.relative-position .q-card ul li {
  border-bottom: 1px solid #ddd;
  padding:10px 0;
  cursor: pointer;
}

.relative-position .q-card ul li p {
  margin: 0;
}
</style>