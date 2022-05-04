import React, { useState } from "react";
import {
  CogIcon,
  AnnotationIcon,
  CalendarIcon,
  LocationMarkerIcon,
  ChatAlt2Icon,
} from "@heroicons/react/solid";

function Header() {
  const [location, setLocation] = useState("");

  const updateLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log(`Location: ${location}`);
    }
  };

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-0">
      <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative hidden lg:inline-grid text-xl items-center w-32 cursor-pointer">
          <p>roomote.</p>
        </div>
        {/* Middle */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <LocationMarkerIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
              onChange={updateLocation}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* Right*/}
        <div className="inset-y-0 pl-3 flex items-center">
          <div className="flex items-center justify-end space-x-4">
            <ChatAlt2Icon className="navBtn" />
            <CalendarIcon className="navBtn" />
            <CogIcon className="navBtn" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
