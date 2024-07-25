import React from "react"
import Navbar from "../_components/Navbar"
import Sidebar from "../_components/Sidebar"

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 flex-col mx-auto max-w-[1280px] bg-white">
      <div className="fixed w-full h-[80px] bg-white">
        <Navbar />
      </div>
      <div className="flex flex-row pt-2 bg-white">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="flex-1 mt-[80px]  bg-white">{children}</div>
      </div>
    </div>
  )
}

export default BrowseLayout
