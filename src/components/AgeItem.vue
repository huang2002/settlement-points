<template>
  <a-form-item
    label="年龄"
    name="age"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请输入正确的年龄！',
      type: 'integer',
    }"
  >
    <a-input-number
      v-model:value="formState.age"
      placeholder="请输入您的年龄"
      style="width: 100%"
      :min="0"
    />
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
