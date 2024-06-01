import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { CgMoreAlt } from "react-icons/cg";
import Contacts from "./Contacts";
import { User, useAuth0 } from "@auth0/auth0-react";

function RightSideBar() {
  const { user } = useAuth0();

  return (
    <div className="hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]">
      <div className="flex items-center text-gray-500">
        <p className="flex text-lg font-semibold flex-grow">Contacts</p>
        <div className="flex space-x-1 px-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RiVideoAddFill />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <BiSearch />
          </div>

          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <CgMoreAlt />
          </div>
        </div>
      </div>
      <Contacts
        name="Cassandra"
        src="https://yt3.googleusercontent.com/7cyzFyMrBhRwEQ2DEEo0o5Do-rjpkAWBwk-YeyEuD5iAV_-XIhNE0aD1rNo7q072NjDBBeBL=s176-c-k-c0x00ffffff-no-rj"
        status="offline"
      />

      <Contacts
        name="Mike Morrison"
        src="https://yt3.googleusercontent.com/CRRP6luYEiGWhByexmFwu4KzkrG6I0t0MnTJT6b-3AhSnS8hfV8ZkSHUMbHmlqGD3G8aeG9jBA=s176-c-k-c0x00ffffff-no-rj"
        status="offline"
      />

      <Contacts
        name="Jesse West"
        src="https://yt3.googleusercontent.com/ytc/AIdro_k8wbeDCNew_dKB2HXj_mYAtIgD5CwKdiWeY_uQgYwH_yVF=s176-c-k-c0x00ffffff-no-rj"
        status="online"
      />

      <Contacts
        name="James Authur"
        src="https://yt3.googleusercontent.com/5SjkbUSA3jGDd5-K9JuOD1kjNgq-PQgXBaIQSr8nk7l9Ci4UFLUCBLiU-CcLnFg64n14DXkHqg=s176-c-k-c0x00ffffff-no-rj"
        status="offline"
      />

      <Contacts
        name="Charlie Mars"
        src="https://yt3.googleusercontent.com/gJMY3-e7ml7JgsxjoqOqPO8toExTg3rx8nkCpq96qW0o3E7SIq8lSTCnXvalL4lekRW0u4ruvw=s176-c-k-c0x00ffffff-no-rj"
        status="online"
      />

      <Contacts
        name="Will Tennyson"
        src="https://yt3.googleusercontent.com/ytc/AIdro_lr-x0NjJnkH7qkp89dWDAU4gsV-57RpcelBJ7vZtDB1xE=s176-c-k-c0x00ffffff-no-rj"
        status="online"
      />
    </div>
  );
}

export default RightSideBar;
