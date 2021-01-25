import BlogPost from './BlogPost'

const POST = {
  id: 1,
  title: 'First Post',
  body:
    'Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.',
  createdAt: '2020-01-01T12:34:56Z',
}

export const full = () => {
  mockGraphQLQuery('CommentsQuery', (variables) => {
    const id = parseInt(Math.random() * 1000)
    return {
      comments: [
        {
          id,
          name: 'Zain Fathoni',
          body: 'No comment',
          postId: variables.postId,
          createdAt: new Date().toISOString(),
        },
      ],
    }
  })
  return <BlogPost post={POST} />
}
export const summary = () => {
  return <BlogPost post={POST} summary={true} />
}

export default {
  title: 'Components/BlogPost',
  decorators: [
    (Story) => (
      <div className="m-8">
        <Story />
      </div>
    ),
  ],
}
