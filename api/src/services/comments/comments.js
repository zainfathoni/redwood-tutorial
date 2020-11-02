import { db } from 'src/lib/db'

export const comments = () => {
  return db.comment.findMany()
}

export const Comment = {
  post: (_obj, { root }) =>
    db.comment.findOne({ where: { id: root.id } }).post(),
}