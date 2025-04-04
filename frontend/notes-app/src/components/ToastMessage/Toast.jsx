import React, { useEffect } from "react";
import { LuCheck } from "react-icons/lu";
import { MdDeleteOutline } from "react-icons/md";

const Toast = ({ isShown, message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-out ${
        isShown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="bg-white border border-gray-200 rounded-md shadow-lg px-6 py-4 flex items-center space-x-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === "delete" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {type === "delete" ? (
            <MdDeleteOutline className="text-white text-xl" />
          ) : (
            <LuCheck className="text-white text-xl" />
          )}
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
