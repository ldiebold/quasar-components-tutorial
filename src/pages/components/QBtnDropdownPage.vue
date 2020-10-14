<template>
  <q-page padding>
    <q-btn
      label="toggle"
      class="q-ma-xl"
      @click="$refs.buttonToggle.toggle()"
    />

    <q-btn-dropdown
      label="menu"
      color="indigo"
      icon="group"
      split
      @click="handleClick"
      ref="buttonToggle"
      persistent
    >
      <div class="row no-wrap">
        <div class="column q-pa-md">
          <div class="text-h6">
            Settings
          </div>

          <q-toggle
            class="q-mt-sm"
            label="bluetooth"
            :value="true"
          />

          <q-toggle
            label="Appear Offline"
            :value="false"
          />
        </div>

        <q-separator
          vertical
        />

        <div class="column items-center q-pa-md">
          <q-avatar
            color="blue"
            text-color="white"
          >
            <img
              class="q-pa-xs"
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
            >
          </q-avatar>
          Avatar

          <q-btn
            no-caps
            size="sm"
            class="q-mt-sm"
            label="logout"
            push
          />
        </div>
      </div>
    </q-btn-dropdown>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          label: 'Ajax Bar',
          to: '/AjaxBar'
        },
        {
          label: 'Avatar',
          to: '/Avatar'
        },
        {
          label: 'Badge',
          to: '/Badge'
        }
      ]
    }
  },

  methods: {
    logger () {
      console.log('woo hoo!')
    },

    handleClick () {
      console.log('clicked')
    }
  }
}
</script>
