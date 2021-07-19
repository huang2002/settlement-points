<template>
  <a-form-item
    label="表彰奖励"
    name="award"
    :rules="{
      required: true,
      trigger: 'change',
      message: '请选择！',
    }"
  >
    <a-select
      v-model:value="formState.award"
      placeholder="请选择"
      :dropdown-match-select-width="false"
    >
      <a-select-option value="110">
        在本市工作期间，获省部级及以上政府表彰奖励
      </a-select-option>
      <a-select-option value="60">
        在本市工作期间，获本市部、委、办、局等综合性表彰奖励
      </a-select-option>
      <a-select-option value="30">
        在本市工作期间，获本市部、委、办、局等专向性表彰奖励
      </a-select-option>
      <a-select-option value="0">无</a-select-option>
    </a-select>
  </a-form-item>
</template>

<script setup>
import { inject } from 'vue';

const formState = inject('formState');
</script>
