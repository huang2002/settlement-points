<template>
  <a-config-provider :locale="locale">
    <a-layout>
      <a-layout-header
        :style="{
          fontSize: '1.5em',
          fontWeight: 'bold',
        }"
      >
        落户积分计算器
      </a-layout-header>
      <a-layout-content
        :style="{
          width: '95%',
          maxWidth: '400px',
          margin: '0 auto',
          padding: '1em 1em 2em',
        }"
      >
        <Form />
      </a-layout-content>
    </a-layout>
  </a-config-provider>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
import zhCN from "ant-design-vue/es/locale/zh_CN";

const locale = zhCN;
</script>

<style>
#app {
  padding-top: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

.ant-layout,
.ant-layout-header,
.ant-layout-content {
  background-color: transparent;
}
</style>
