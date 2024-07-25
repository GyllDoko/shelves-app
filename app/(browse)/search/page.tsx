"use client"
import React, { useEffect, useState } from "react"
import SearchResultItem from "./_components/SearchResultItem"
import { findObjectByTitle } from "@/utils"
import { useGlobalStore } from "@/store"
import { redirect } from "next/navigation"

interface SearchPageProps {
  searchParams: {
    term?: string
  }
}

const Page = ({ searchParams }: SearchPageProps) => {
  const { shelvesSearchList } = useGlobalStore()
  const [data, setData] = useState<any>([])
  if (!searchParams.term) {
    redirect("/")
  }

  useEffect(() => {
    const result: any = findObjectByTitle(shelvesSearchList, searchParams?.term)
    setData([...result])
  }, [searchParams.term, shelvesSearchList])

  return (
    <>
      <h2 className="mb-2 font-semibold">
        Result for term : {searchParams.term}
      </h2>
      <div className={"grid grid-cols-4"}>
        {data?.length === 0 && (
          <div>
            <p>There are no result for this word !</p>
          </div>
        )}
        {data.length > 0 &&
          data.map((item: any, index: number) => (
            <SearchResultItem key={index} item={item} />
          ))}
      </div>
    </>
  )
}
export default Page
