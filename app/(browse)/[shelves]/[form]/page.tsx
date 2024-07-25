"use client"
import { useGlobalStore } from "@/store"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Page = () => {
  const { currentForm } = useGlobalStore()
  return (
    <>
      <div className={"m-2 flex flex-row"}>
        <div className="">
          <Image
            className="w-full h-auto mx-auto"
            src={currentForm.image}
            alt={currentForm.title}
            width={200}
            height={200}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div
          className={" flex flex-col justify-between items-start"}
          style={{ marginLeft: "20px" }}
        >
          <div>
            <p className={"text-2xl font-semibold"}>{currentForm?.title}</p>
            {currentForm?.authors?.length > 0 && (
              <div className={"flex flex-row items-center gap-x-2"}>
                By
                {currentForm?.authors?.map((item, index) => (
                  <p key={index} className="italic text-sm">
                    {item.name}{" "}
                  </p>
                ))}
              </div>
            )}
            <div className="text-sm italic text-red-500">
              {currentForm?.price?.amount}{" "}
              <span>{currentForm?.price?.currency}</span>{" "}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold my-2">Description</p>
        <div
          dangerouslySetInnerHTML={{ __html: currentForm?.description }}
        ></div>
      </div>
    </>
  )
}

export default Page
