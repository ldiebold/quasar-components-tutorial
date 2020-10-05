<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar v-if="!$q.platform.is.electron">
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
      </q-toolbar>

        <q-bar v-if="$q.platform.is.electron" class="bg-grey-7 text-grey-3 q-electron-drag">
          <div class="cursor-pointer q-electron-drag--exception">
            Menu
            <q-menu>
              <q-list>
                <q-item dense clickable>
                  <q-item-section>
                    Save
                  </q-item-section>
                </q-item>

                <q-item dense clickable>
                  <q-item-section>
                    Quit
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </div>

          <q-space />

          <q-btn
            dense
            flat
            icon="minimize"
            @click="handleMinimize"
          />

          <q-btn
            dense
            flat
            icon="crop_square"
            @click="handleMaximize"
          />

          <q-btn
            dense
            flat
            icon="close"
            @click="handleClose"
          />
        </q-bar>
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
          <q-item-section>
            QAvatar
          </q-item-section>
        </q-item>

        <q-item clickable to="badge">
          <q-item-section>
            QBadge
          </q-item-section>
        </q-item>

        <q-item clickable to="banner">
          <q-item-section>
            QBanner
          </q-item-section>
        </q-item>

        <q-item clickable to="bar">
          <q-item-section>
            QBar
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
      leftDrawerOpen: false,
      mode: process.env.MODE,
      electronBrowserWindow: this.$q.electron.remote.BrowserWindow.getFocusedWindow()
    }
  },

  methods: {
    handleMinimize () {
      if (this.mode === 'electron') {
        this.electronBrowserWindow.minimize()
      }
    },
    handleMaximize () {
      if (this.mode === 'electron') {
        if (this.electronBrowserWindow.isMaximized()) {
          this.electronBrowserWindow.unmaximize()
        } else {
          this.electronBrowserWindow.maximize()
        }
      }
    },
    handleClose () {
      if (this.mode === 'electron') {
        this.electronBrowserWindow.close()
      }
    }
  }
}
</script>
