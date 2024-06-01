import React from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'

function Feed() {
  return (
    <div className='flex-grow h-screen pt-6 mr-6'>
        <div className='mx-auto max-w-md md:max-w-xl lg:max-w-3xl'>
            {/* Create Post Box  */}
            <CreatePost />

            {/* Posts  */}
            <Posts />
        </div>
    </div>
  )
}

export default Feed