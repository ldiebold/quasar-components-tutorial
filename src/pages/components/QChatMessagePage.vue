<template>
  <q-page
    padding
    class="flex justify-center"
  >
    <div
      class="bg-grey-1 shadow-2 q-pa-lg"
      style="width: 380px;"
    >
      <q-chat-message
        label="28th March 2020"
      />

      <q-chat-message
        name="Katara"
        avatar="https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png"
        sent
        :text="[
          'How ya goin mate!'
        ]"
        stamp="1 hour ago"
      />

      <q-chat-message
        :name="azulaName"
        name-sanitize
        bg-color="grey-9"
        text-color="white"
        stamp="30 minutes ago"
        :text="azulaText"
        text-sanitize
      >
        <template #avatar>
          <q-avatar class="bg-red-9 text-white q-message-avatar q-message-avatar--received">
            <q-img src="https://static.wikia.nocookie.net/nickelodeon/images/e/e4/Azula1.png/revision/latest?cb=20160804224930" />
          </q-avatar>
        </template>
      </q-chat-message>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      azulaText: [
        '<strong class="text-red-9">I can do whatever I desire! Mwahahahahaha!</strong>'
      ],
      azulaName: '<strong class="text-h1">Azula, Firelord!!!</strong>'
    }
  }
}
</script>
