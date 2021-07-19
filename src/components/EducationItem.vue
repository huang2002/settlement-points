<template>
  <a-form-item
    label="教育背景"
    name="education"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
    }"
  >
    <a-select
      v-model:value="formState.education"
      placeholder="请选择"
      :dropdown-match-select-width="false"
    >
      <a-select-option value="110">博士研究生学历学位</a-select-option>
      <a-select-option value="100">硕士研究生学历学位</a-select-option>
      <a-select-option value="90">大学本科学历和学士学位</a-select-option>
      <a-select-option value="60">大学本科学历</a-select-option>
      <a-select-option value="50">大专（高职）学历</a-select-option>
      <a-select-option value="0">高中及以下</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
