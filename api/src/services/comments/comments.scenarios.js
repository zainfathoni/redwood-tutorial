export const standard = defineScenario({
  comment: {
    jane: {
      name: 'Jane Doe',
      body: 'I like trees',
      post: {
        create: {
          title: 'Redwood Leaves',
          body: 'The quick brown fox jumped over the lazy dog.',
        },
      },
    },
    john: {
      name: 'John Doe',
      body: 'Hug a tree today',
      post: {
        create: {
          title: 'Root Systems',
          body: 'The five boxing wizards jump quickly.',
        },
      },
    },
  },
})
