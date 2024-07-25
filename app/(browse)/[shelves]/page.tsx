"use client"
import { getFormsId } from "@/actions/getForms"
import FormList from "@/app/_components/FormList"
import Loader from "@/app/_components/Loader"
import { useGlobalStore } from "@/store"
import React, { useCallback, useEffect, useState, useTransition } from "react"
interface ShelvesPageProps {
  params: {
    shelves: string
  }
}
const Page = ({ params }: ShelvesPageProps) => {
  const [isPending, startTransition] = useTransition()
  const [formsIds, setFormIds] = useState([])
  const { shelvesList, saveShelf } = useGlobalStore()

  const getShelfId = useCallback(() => {
    if (shelvesList.length > 0) {
      const shelf = shelvesList.filter(
        (item: any) => item.slug === params.shelves
      )
      return shelf[0].id
    }
  }, [params.shelves, shelvesList])

  useEffect(() => {
    startTransition(async () => {
      const id = getShelfId()
      const formsIdsFetch: any = await getFormsId(id)
      setFormIds(formsIdsFetch)
      saveShelf(formsIdsFetch)
    })
  }, [getShelfId, saveShelf])

  return (
    <div>
      {isPending ? (
        <div className="grid grid-cols-3">
          {[1, 2, 3, 4].map((item) => (
            <Loader key={item} />
          ))}
        </div>
      ) : (
        <FormList formids={formsIds} />
      )}
    </div>
  )
}

export default Page
