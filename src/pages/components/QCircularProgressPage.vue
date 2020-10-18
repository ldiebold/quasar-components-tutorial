<template>
  <q-page
    padding
    class="q-pa-xl"
  >
    <q-circular-progress
      show-value
      :value="70"
      font-size="16px"
      size="180px"
      color="indigo"
      :thickness="0.3"
      track-color="indigo-2"
      center-color="indigo-1"
    >
      <div class="q-pa-xl text-center">
        course completion
      </div>
    </q-circular-progress>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
