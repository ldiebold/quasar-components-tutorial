<template>
  <q-page
    padding
  >
    <q-btn
      v-for="question in questions"
      :key="question.name"
      :label="question.name"
      @click="$refs[question.name][0].toggle()"
    />

    <q-list
      bordered
    >
      <q-item>
        <q-item-section>
          <q-item-label header>
            FAQ
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-expansion-item
        v-for="question in questions"
        :key="question.question"
        :label="question.label"
        :ref="question.name"
        :caption="question.caption"
        expand-separator
        :icon="question.icon"
        v-model="question.opened"
        @show="question.seen = true"
        :header-class="{
          'text-purple-4': question.opened,
          'bg-grey-9': question.seen
        }"
        :content-inset-level="1"
      >
        <q-card class="bg-grey-9">
          <q-card-section>
            {{ question.answer }}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  methods: {
    logger (...params) {
      console.log(...params)
    }
  },

  data () {
    return {
      questions: [
        {
          name: 'one',
          seen: false,
          icon: 'help',
          label: 'Can I get a refund?',
          caption: 'yes...',
          opened: false,
          rating: 3,
          answer: 'Of course you can! Just go to your account settings and click "refund"'
        },
        {
          name: 'two',
          seen: false,
          icon: 'help',
          label: 'What is the catch?',
          caption: 'great question!',
          opened: false,
          rating: 5,
          answer: 'I get money, you get value... So the catch is I get paid I guess?'
        }
      ]
    }
  }
}
</script>
