<template>
  <q-page padding>
    <q-dialog
      v-model="showDialog"
      ref="dialog"
      @escape-key="logger"
    >
      <q-card>
        <q-toolbar class="bg-red-7 text-white">
          <q-toolbar-title>
            WARNING!!!
          </q-toolbar-title>

          <q-btn
            flat
            round
            icon="close"
            v-close-popup
          />
        </q-toolbar>

        <q-card-section
          class="scroll"
          style="height: calc(100vh - 100px)"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero odit placeat asperiores neque eligendi magnam tempora impedit quis rerum. Quia repellendus nihil quod ratione? Molestiae debitis culpa iusto officiis reiciendis.
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-btn
      label="newsletter"
      @click="showDialog = true"
    />

    <q-btn
      label="method"
      @click="$refs.dialog.shake()"
    />
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false
    }
  },

  methods: {
    logger () {
      console.log('hit')
    }
  }
}
</script>
