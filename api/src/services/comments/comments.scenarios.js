export const standard = defineScenario({
  comment: {
    one: {
      name: 'String',
      body: 'String',
      post: { create: { title: 'String', body: 'String' } },
    },

    two: {
      name: 'String',
      body: 'String',
      post: { create: { title: 'String', body: 'String' } },
    },
  },
})
