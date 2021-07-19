<template>
  <a-form-item
    label="专业技术职称和技能等级"
    name="skills"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
      type: 'string',
    }"
  >
    <a-select
      v-model:value="formState.skills"
      placeholder="请选择"
      :dropdown-match-select-width="false"
    >
      <a-select-option value="140"
        >能类国家职业资格一级或者高级职称</a-select-option
      >
      <a-select-option value="100">
        技能类国家职业资格二级或者中级职称
      </a-select-option>
      <a-select-option value="60">技能类国家职业资格三级</a-select-option>
      <a-select-option value="30">技能类国家职业资格四级</a-select-option>
      <a-select-option value="15">技能类国家职业资格五级</a-select-option>
      <a-select-option value="0">不清楚</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
