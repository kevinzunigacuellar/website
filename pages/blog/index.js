import ListOfPosts from 'components/ListOfPosts'
import Title from 'components/Title'
import Head from 'next/head'
import {
  readPostsDirectory,
  readMarkdown,
  parseMarkdown,
} from 'lib/parseBlogPosts'

export default function Blog({ blogPostsData }) {
  return (
    <>
      <Head>
        <title>Blog - Kevin Zuniga Cuellar</title>
      </Head>
      <div className='pb-5'>
        <Title>Blog</Title>
      </div>
      <ListOfPosts blogPostsData={blogPostsData} />
    </>
  )
}

export async function getStaticProps({ locale }) {
  const files = readPostsDirectory(locale)
  const blogPostsData = []
  files.forEach(filename => {
    const fileData = readMarkdown(locale, filename)
    const { data } = parseMarkdown(fileData)
    blogPostsData.push(data)
  })
  return {
    props: { blogPostsData },
  }
}
