"use client"
import { useGlobalStore } from "@/store"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"

const Sidebar = () => {
  const { shelvesList, getShelvesData } = useGlobalStore()
  const pathname = usePathname()

  useEffect(() => {
    if (shelvesList.length === 0) {
      getShelvesData()
    }
  }, [getShelvesData, shelvesList])

  return (
    <div className="fixed flex flex-col justify-center mt-[100px]">
      {shelvesList?.map((item: any, index: number) => (
        <div key={index}>
          <Link
            className={pathname === `/${item?.slug}` ? "underline" : ""}
            href={`/${item?.slug}`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Sidebar
