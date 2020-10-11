<template>
  <q-page padding>
    <q-btn-group
      push
      spread
    >
      <q-btn
        icon="home"
        push
        label="one"
      />
      <q-btn
        icon="person"
        push
        label="two"
      />
      <q-btn-dropdown
        push
        label="three"
        split
      >
        <div class="q-pa-md">
          The Menu
        </div>
      </q-btn-dropdown>
    </q-btn-group>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
