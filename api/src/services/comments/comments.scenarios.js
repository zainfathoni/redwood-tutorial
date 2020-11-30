import { scenario } from '@redwoodjs/testing'

export const standard = scenario({
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
