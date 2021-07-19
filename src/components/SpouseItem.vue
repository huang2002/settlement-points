<template>
  <a-form-item
    label="配偶是否为上海户籍"
    name="isSpouseShanghainese"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select
      v-model:value="formState.isSpouseShanghainese"
      placeholder="请选择"
    >
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
  <a-form-item
    v-if="formState.isSpouseShanghainese"
    label="结婚年数"
    name="marryingYears"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请输入正确的结婚年数！',
      type: 'integer',
    }"
  >
    <a-input-number
      v-model:value="formState.marryingYears"
      placeholder="请输入您的结婚年数"
      style="width: 100%"
      :min="0"
    />
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
