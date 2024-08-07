import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, I'm Mxo Masuku, a freelance React developer, I'm committed to expanding my skills and knowledge. This is my open notebook, showcasing my progress with Next.js, Node, and TypeScript as I strive for full-stack development.

        `}
      </p>
      <div className="my-8">

      <BlogPosts/>

<div className='flex gap-4'>




<div>Blog</div>  <div>Ideas that excited me</div>
</div>

      </div>
    </section>
  )
}
