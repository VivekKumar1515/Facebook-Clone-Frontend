import { useAuth0 } from "@auth0/auth0-react";
import React, { PropsWithChildren } from "react";
import {FiThumbsUp} from 'react-icons/fi'
import {FaRegCommentAlt} from 'react-icons/fa'
import {RiShareForwardLine} from 'react-icons/ri'

function Post({post}: any) {
  const { user } = useAuth0();

  return (
    <div key={post.id} className=" bg-white z-50 shadow-md mt-5 rounded-md relative">
      <div className="flex space-x-2 p-6">
        <img src={post.profilePicture} alt="" className="h-10 w-10 rounded-full" />
        <div>
          <p className="font-semibold text-[1.1rem]">{user?.name}</p>
          <p className="text-gray-700 text-xs font-medium">
            {post.timeStamp}
          </p>
        </div>
      </div>
      <div className="font-medium text-[1.05rem] pl-6">
        {post.post}
      </div>
      <div className="mt-8 bg-white">
        <img className="object-cover" src={post.file} alt="" />
      </div>
      <div className="flex items-center justify-center bg-white p-2">
        <div className="flex space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer items-center">
          <FiThumbsUp className="h-4"/>
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <FaRegCommentAlt className="h-4"/>
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
          <RiShareForwardLine className="h-4"/>
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post