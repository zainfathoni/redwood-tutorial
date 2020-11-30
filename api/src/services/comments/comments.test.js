import {
  comments,
  comment,
  createComment,
  updateComment,
  deleteComment,
} from './comments'

describe('comments', () => {
  scenario('returns all comments from the database', async (scenario) => {
    const result = await comments()

    expect(result.length).toEqual(Object.keys(scenario.comment).length)
  })

  scenario('returns a single comment', async (scenario) => {
    const result = await comment({ id: scenario.comment.one.id })

    expect(result).toEqual(scenario.comment.one)
  })

  scenario('creates a comment', async (scenario) => {
    const result = await createComment({
      input: {
        name: 'String',
        body: 'String',
        postId: scenario.comment.one.postId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a comment', async (scenario) => {
    const original = await comment({ id: scenario.comment.one.id })
    const result = await updateComment({
      id: original.id,
      input: { name: 'String7937064' },
    })

    expect(result.name).toEqual('String7937064')
  })

  scenario('deletes a comment', async (scenario) => {
    const original = await deleteComment({ id: scenario.comment.one.id })
    const result = await comment({ id: original.id })

    expect(result).toEqual(null)
  })
})
