<template>
  <a-form-item
    label="工作单位在上海临港/张江"
    name="isHiTechArea"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select v-model:value="formState.isHiTechArea" placeholder="请选择">
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
  <a-form-item
    label="工作性质"
    name="workType"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
    }"
  >
    <a-select v-model:value="formState.workType" placeholder="请选择">
      <a-select-option value="normal">普通职业</a-select-option>
      <a-select-option value="startup">创业</a-select-option>
      <a-select-option value="special">上海市特定服务领域</a-select-option>
    </a-select>
  </a-form-item>
  <a-form-item
    v-if="formState.isHiTechArea || formState.workType === 'special'"
    label="工龄"
    name="workingYears"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请输入正确的工龄！',
      type: 'integer',
    }"
  >
    <a-input-number
      v-model:value="formState.workingYears"
      placeholder="请输入您的工龄"
      style="width: 100%"
      :min="0"
    />
  </a-form-item>
  <a-form-item
    label="企业最近3年投资纳税额（万元）"
    name="tax"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请输入正确的纳税额！',
      type: 'number',
    }"
  >
    <a-input-number
      v-model:value="formState.tax"
      placeholder="请输入纳税额"
      style="width: 100%"
      :min="0"
    />
  </a-form-item>
  <a-form-item
    label="企业最近3年雇佣上海籍人数"
    name="shanghainese"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请输入正确的人数！',
      type: 'number',
    }"
  >
    <a-input-number
      v-model:value="formState.shanghainese"
      placeholder="请输入人数"
      style="width: 100%"
      :min="0"
    />
  </a-form-item>
  <a-form-item
    label="所学专业属于上海市紧缺急需专业，且工作岗位与所学专业一致"
    name="isUrgentPosition"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select v-model:value="formState.isUrgentPosition" placeholder="请选择">
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
  <a-form-item
    label="是否符合上海市科委认定的创新人才、创新中介人才"
    name="isCreative"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'integer',
    }"
  >
    <a-select v-model:value="formState.isCreative" placeholder="请选择">
      <a-select-option :value="1">是</a-select-option>
      <a-select-option :value="0">否</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
