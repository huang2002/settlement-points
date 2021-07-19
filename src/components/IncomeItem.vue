<template>
  <a-form-item
    :label="`在上海的收入大于${INCOME_THRESHOLD}`"
    name="isIncomeHigh"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select v-model:value="formState.isIncomeHigh" placeholder="请选择">
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
  <a-form-item
    v-if="formState.isIncomeHigh"
    label="在上海缴纳社保基数"
    name="insuranceRate"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
    }"
  >
    <a-select
      v-model:value="formState.insuranceRate"
      placeholder="请选择"
      :dropdown-match-select-width="false"
    >
      <a-select-option value="120">
        最近3年累计24个月缴纳社保基数&ge;3倍
      </a-select-option>
      <a-select-option value="100">
        最近4年累计36个月缴纳社保基数&ge;2倍 &lt;3倍
      </a-select-option>
      <a-select-option value="50">
        最近4年累计36个月缴纳社保基数&ge;1倍 &lt;2倍
      </a-select-option>
      <a-select-option value="25">
        最近4年累计36个月缴纳社保基数&ge;80% &lt;1倍
      </a-select-option>
    </a-select>
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');

const INCOME_THRESHOLD = 9339;
</script>
