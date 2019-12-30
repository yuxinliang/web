<template>
  <div class="rank">
    <!-- 文本使用 -->
    <h1>{{ msg }}</h1>
    <!-- vhtml的使用 -->
    <div v-html="msgHtml"></div>
    <label for="r1">修改颜色</label>
    <input type="checkbox" v-model="use" id="r1" />
    <!-- v-bind可以缩写为：，v-on可以缩写为@ -->
    <div v-bind:class="{'class1': use}">v-bind:class 指令</div>
    <!-- 支持javaScript运算 -->
    {{ use ? 'YES' : 'NO' }}
    <p v-if="use">现在显示底色了{{5+5}}</p>
    <ul>
      <li>
        <a href="#" target="_blank">Core Docs</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Rank",
  data() {
    return {
      msg: "Rank Model",
      msgHtml: "<h4>Rank h2</h4>",
      use: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
Scoped 属性限制了当前属性只能在当前组件使用，这样会引起父子之间无法修改对方样式，慎用-->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.class1 {
  background: #444;
  color: #eee;
}
</style>
