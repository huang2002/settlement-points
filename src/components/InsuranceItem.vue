<template>
  <a-form-item
    label="是否在上海缴纳社保"
    name="hasInsurance"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select v-model:value="formState.hasInsurance" placeholder="请选择">
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
  <a-form-item
    v-if="formState.hasInsurance"
    label="在上海连续缴纳社保年数"
    name="insuranceCount"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请输入正确的年数！',
      type: 'integer',
    }"
  >
    <a-input-number
      v-model:value="formState.insuranceCount"
      placeholder="请输入年数"
      style="width: 100%"
      :min="0"
    />
  </a-form-item>
  <a-form-item
    label="是否为全日制应届大学生"
    name="isStudent"
    v-if="!formState.hasInsurance"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select v-model:value="formState.isStudent" placeholder="请选择">
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
