import React from 'react'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux';

function Posts() {
  const posts = useSelector((state: any) => state.post.value)
  console.log(posts)

  return (
    <div>
      { 
        posts.map((post: any) => (
          <Post post={post} key={post.id} />
        ))
      }
    </div>
  )
}

export default Posts