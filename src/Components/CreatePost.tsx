import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { ButtonHTMLAttributes, useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getAllPosts } from "../app/Slices/postSlice";


function CreatePost() {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post";

  const { user } = useAuth0();
  const inputRef = useRef<HTMLInputElement>(null);
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const [imageToPost, setImageToPost] = useState<string>("");
  const dispatcher = useDispatch();

  const handleFile = (e: any) => {
    e.preventDefault();
    console.log(hiddenFileInput.current);
    hiddenFileInput.current?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        // @ts-ignore
        reader.result && setImageToPost(reader.result);
      };
    }
  };

  const fetchData = async () => {
    const data = await axios.get("http://localhost:8080/api/v1/post")
    dispatcher(getAllPosts(data.data))
  }

  useEffect(() => {
    fetchData();
  }, [])

  function handleDelete(event?: React.MouseEvent<SVGElement, MouseEvent>) {
    event?.preventDefault();
    setImageToPost("");
  }

  function handlePost(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    if (!inputRef.current?.value) return;
    const formData = new FormData();

    formData.append("file", imageToPost);
    formData.append("post", inputRef.current.value);
    user?.name !== undefined
      ? formData.append("username", user.name)
      : formData.append("username", "");
    user?.email !== undefined
      ? formData.append("email", user.email)
      : formData.append("email", "");
    user?.picture !== undefined
      ? formData.append("profilePicture", user.picture)
      : formData.append("profilePicture", "");

      

    axios
      .post(FACEBOOK_CLONE_ENDPOINT, formData)
      .then((response) => {
        dispatcher(addPost(response));
        if (inputRef.current !== null) {
          inputRef.current.value = "";
        }
        handleDelete();
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className=" bg-white z-50 shadow-md mt-5 p-6 rounded-md">
      <div id="inputField" className="flex space-x-2 items-center">
        <form action="" className="flex flex-grow items-center space-x-2">
          <img src={user?.picture} alt="" className="rounded-full h-10 w-10" />
          <input
            type="text"
            placeholder={`What's on your mind, ${
              user?.name === undefined ? "" : user?.name
            }?`}
            ref={inputRef}
            className="flex flex-grow text-base bg-gray-100 font-medium text-[1.1rem] rounded-full px-5 py-3 outline-none"
          />
          <button hidden onClick={(e) => handlePost(e)}></button>
        </form>
      </div>
      <div id="buttons" className="flex mt-6 justify-evenly space-x-6">
        <div className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md">
          <HiOutlineVideoCamera className="text-red-500 h-6 w-6" />
          <p className="font-semibold ml-2">Live Video</p>
        </div>

        <div
          className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md hover:cursor-pointer"
          onClick={(e) => handleFile(e)}
        >
          <IoMdPhotos className="text-green-500 h-6 w-6" />
          <p className="font-semibold ml-2">Photo/Video</p>
        </div>
        <input
          type="file"
          ref={hiddenFileInput}
          hidden
          accept="images/*"
          onChange={(e) => handleImageUpload(e)}
        />

        <div className="flex items-center justify-center hover:bg-gray-100 px-3 py-2 rounded-md">
          <BsEmojiSmile className="text-yellow-500 h-6 w-6" />
          <p className="font-semibold ml-2">Feeling/Activity</p>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        {imageToPost && (
          <>
            <img
              src={imageToPost}
              alt="Selected"
              className="h-32 hover:brightness-110 transition-all delay-150 mt-5"
            />
            <MdDeleteForever
              className="h-8 w-8 hover:text-red-700"
              onClick={(e) => handleDelete(e)}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
