<script lang="ts" setup>
import Def from "../Def.vue";
import type { Parameter } from "../exports.js";
import Docs from "./Docs.vue";
import MiniTag from "./fragments/MiniTag.vue";
import Name from "./fragments/Name.vue";
import Type from "./Type.vue";

defineProps<{ param: Parameter }>();
</script>

<template>
  <Def>
    <template #entry>
      <Name :optional="param.type.isOptional">{{ param.fullName }}</Name>
      <Type>{{ param.type.name }}</Type>
    </template>
    <template #definition v-if="param.type.docs">
      <p v-if="param.type.docs">
        <Docs line>{{ param.type.docs }}</Docs>
        <MiniTag v-if="param.type.isOptional"> optional</MiniTag>
      </p>
    </template>
  </Def>
</template>
