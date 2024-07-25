"use client"
import React, { useState, useTransition } from "react"
import ListItem from "./ListItem"
import { List, Grid } from "lucide-react"
import { useGlobalStore } from "@/store"
import qs from "query-string"
import { useRouter } from "next/navigation"

const FormList = ({ formids }: { formids: any[] }) => {
  const { displayList, changeDisplayList } = useGlobalStore()
  const [searchValue, setSearchValue] = useState("")
  const router = useRouter()
  const onHandleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const url = qs.stringifyUrl(
      {
        url: `/search`,
        query: { term: searchValue }
      },
      { skipEmptyString: true }
    )
    router.push(url)
  }
  return (
    <div>
      <div className="flex flex-row justify-end gap-x-4 items-center">
        <div className="my-3">
          <form className="relative" onSubmit={onHandleSearch}>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-1 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 px-3 py-1 text-gray-600 hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-4-4"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="cursor-pointer " onClick={() => changeDisplayList()}>
          {displayList ? (
            <List color="gray" size={25} />
          ) : (
            <Grid color="gray" size={25} />
          )}
        </div>
      </div>
      <div className={displayList ? "flex flex-col" : "grid grid-cols-4"}>
        {formids.map((item, index) => (
          <div key={index}>
            <ListItem formId={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FormList
