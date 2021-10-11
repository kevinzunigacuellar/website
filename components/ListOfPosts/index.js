import Link from 'next/link'
import BlogPost from 'components/ListOfPosts/BlogPost'
export default function ListOfPosts({ blogPostsData }) {
  return (
    <>
      {blogPostsData.map(({ title, description, url, date }) => {
        return (
          <article key={url} className='mb-5'>
            <Link href={`/blog/${url}`}>
              <a aria-label={`${title}`}>
                <BlogPost title={title} date={date} description={description} />
              </a>
            </Link>
          </article>
        )
      })}
    </>
  )
}
