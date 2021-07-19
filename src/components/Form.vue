<template>
  <a-form
    ref="formRef"
    :model="formState"
    scroll-to-first-error
    layout="vertical"
  >
    <AgeItem />
    <EducationItem />
    <SkillsItem />
    <InsuranceItem />
    <IncomeItem />
    <WorkingItem />
    <AwardItem />
    <SpouseItem />
    <a-form-item :wrapper-col="{ span: 24 }" style="margin-top: 1.5em">
      <a-button type="primary" @click="calculate">计算落户积分</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { Modal } from "ant-design-vue";
import { reactive, ref, provide, h } from "vue";
import "ant-design-vue/es/modal/style/css";

const formRef = ref();

/**
 * @typedef FormState
 * @property {number} age
 * @property {string} education
 * @property {string} skills
 * @property {1 | 0} hasInsurance
 * @property {number} insuranceCount
 * @property {1 | 0} isStudent
 * @property {1 | 0} isIncomeHigh
 * @property {string} insuranceRate
 * @property {1 | 0} isHiTechArea
 * @property {string} workType
 * @property {number} workingYears
 * @property {number} tax
 * @property {number} shanghainese
 * @property {1 | 0} isUrgentPosition
 * @property {1 | 0} isCreative
 * @property {string} award
 * @property {1 | 0} isSpouseShanghainese
 * @property {number} marryingYears
 */

/**
 * @type {import('vue').UnwrapRef<FormState>}
 */
const formState = reactive({
  age: undefined,
  education: undefined,
  skills: undefined,
  hasInsurance: 1,
  insuranceCount: undefined,
  isStudent: 0,
  isIncomeHigh: 0,
  insuranceRate: undefined,
  isHiTechArea: 0,
  workType: 'normal',
  workingYears: undefined,
  tax: undefined,
  shanghainese: undefined,
  isUrgentPosition: 0,
  isCreative: 0,
  award: undefined,
  isSpouseShanghainese: 0,
  marryingYears: undefined,
});

provide('formState', formState);

const calculate = () => {
  formRef.value
    .validate()
    .then(() => {

      let points = 0;

      const { age } = formState;
      if (age < 56) {
        points += Math.min(30, 5 + (56 - age) * 2);
      } else if (age <= 60) {
        points += 5;
      }

      points += Number(formState.education);

      if (+formState.skills < 100 || formState.isIncomeHigh) {
        points += Number(formState.skills);
      }

      if (formState.hasInsurance) {
        points += formState.insuranceCount * 3;
      } else {
        points += formState.isStudent * 10;
      }

      if (formState.isIncomeHigh) {
        points += Number(formState.insuranceRate);
      }

      switch (formState.workType) {
        case 'special': {
          if (formState.workingYears >= 5) {
            points += (formState.workingYears - 5) * 4;
          }
          break;
        }
        case 'startup': {
          points += 10 * Math.floor(
            Math.max(formState.tax, formState.shanghainese) / 10
          );
          break;
        }
        case 'normal': {
          if (formState.isHiTechArea && formState.workingYears >= 5) {
            points += (formState.workingYears - 5) * 2;
          }
          break;
        }
      }

      if (formState.isUrgentPosition) {
        points += 30;
      }

      if (formState.isCreative) {
        points += 120;
      }

      points += Number(formState.award);

      if (formState.isSpouseShanghainese) {
        points += formState.marryingYears * 4;
      }

      Modal.info({
        title: '计算结果',
        content: h('p', `您的落户积分：${points}`),
      });

    }, () => {

      Modal.error({
        title: '计算结果',
        content: h('p', '填写有误，请检查！'),
      });

    })
    .catch(console.error);
};
</script>

<style scoped>
.ant-form-item {
  margin-bottom: 1em;
}
</style>
