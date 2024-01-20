import React, { Suspense } from 'react'
import PostDetails from '@/app/components/PostDetails'

async function PostDetailsPage({params}) {
    const postId = params.postId

    const loadingJsx = (<div><h1>Loading...</h1></div>)
  return (
    <div style={{padding:'20px'}}>
      <h1 >Post Details</h1>
      
      <Suspense fallback={loadingJsx}>
      <PostDetails postId={postId}/>
      </Suspense>
    </div>
  )
}

export default PostDetailsPage
