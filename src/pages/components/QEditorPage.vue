<template>
  <q-page padding>
    <form
      autocorrect="off"
      autocapitalize="off"
      autocomplete="off"
      spellcheck="false"
    >
      <q-editor
        ref="editor"
        @input="saveDebounce"
        square
        v-model="editorText"
        placeholder="type in me please"
        content-class="bg-yellow-3"
        toolbar-bg="light-blue"
        toolbar-text-color="white"
        toolbar-toggle-color="yellow"
      />
    </form>
  </q-page>
</template>

<script>
import { debounce } from 'quasar'

export default {
  data () {
    return {
      splitter: 50,

      editorText: '',

      saving: false,

      saveDebounce: debounce(this.save, 3000)
    }
  },

  methods: {
    save (event, proxy, caret) {
      this.saving = true
      setTimeout(() => {
        console.log('save it now please :)')
        this.saving = false
      }, 2000)
    },

    getElement () {
      console.log(this.$refs.editor.getContentEl())
    }
  },

  mounted () {
    console.log(this.$q.iconSet.editor)
  }
}
</script>
