<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Components
        </q-item-label>
        <!-- Component Menu Items -->
        <q-item clickable to="ajax-bar">
          <q-item-section>
            QAjaxBar
          </q-item-section>
        </q-item>

        <q-item clickable to="avatar">
          <q-item-section side avatar>
            <q-avatar
              color="blue"
              text-color="white"
            >
              <img class="q-pa-xs" src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            QAvatar
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
