import { comments, createComment, deleteComment } from './comments'
import { db } from 'api/src/lib/db'

describe('comments', () => {
  scenario(
    'returns all comments for a single post from the database',
    async (scenario) => {
      const result = await comments({ postId: scenario.comment.jane.postId })
      expect(result.length).toEqual(1)
    }
  )

  scenario('postOnly', 'creates a new comment', async (scenario) => {
    const comment = await createComment({
      input: {
        name: 'Billy Bob',
        body: "A tree's bark is worse than its bite",
        postId: scenario.post.bark.id,
      },
    })

    expect(comment.name).toEqual('Billy Bob')
    expect(comment.body).toEqual("A tree's bark is worse than its bite")
    expect(comment.postId).toEqual(scenario.post.bark.id)
    expect(comment.createdAt).not.toEqual(null)
  })

  scenario('deletes a comment', async (scenario) => {
    mockCurrentUser({ roles: ['moderator'] })

    // check that response is the deleted comment
    const comment = await deleteComment({
      id: scenario.comment.jane.id,
    })
    expect(comment.id).toEqual(scenario.comment.jane.id)

    // check that comment with that ID is gone
    expect(
      await db.comment.findUnique({ where: { id: scenario.comment.jane.id } })
    ).toEqual(null)
  })
})
