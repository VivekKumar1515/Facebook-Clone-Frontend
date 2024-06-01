import React from "react";

function Contacts({ name, src, status }: any) {
  return (
    <div className="flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl relative">
      <img src={src} alt="" className="h-10 w-10 rounded-full cursor-pointer" />
      <p className="hidden sm:inline-flex text-[1.05rem] font-medium">{name}</p>
      {status === "online" && (
        <div className="bg-green-500 h-3 w-3 rounded-full absolute left-6 bottom-[6px] border-2"></div>
      )}

      {status === "offline" && (
        <div className="bg-gray-500 h-3 w-3 rounded-full absolute left-6 bottom-[6px] border-2"></div>
      )}
    </div>
  );
}

export default Contacts;
