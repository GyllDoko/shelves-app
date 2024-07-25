/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import { getForm } from "@/actions/getForms"
import React, { useCallback, useEffect, useState, useTransition } from "react"
import Loader from "./Loader"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useGlobalStore } from "@/store"

const ListItem = ({ formId }: { formId: object }) => {
  const [mounted, setMounted] = useState(true)
  const [isPending, startTransition] = useTransition()
  const [form, setForm] = useState(formId)
  const { displayList, setCurrentForm } = useGlobalStore()
  const pathname = usePathname()

  return (
    <div>
      {isPending ? (
        <Loader />
      ) : (
        form && (
          <div
            className={displayList ? "m-2 flex flex-row" : "m-2 flex flex-col"}
          >
            <div className="">
              <Image
                className="w-full h-auto mx-auto"
                src={form.image}
                alt={form.title}
                width={displayList ? 60 : 100}
                height={displayList ? 60 : 100}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <div
              className={
                displayList
                  ? " flex flex-col justify-between items-start"
                  : " flex flex-col justify-between items-center"
              }
              style={{ marginLeft: displayList ? "20px" : 0 }}
            >
              <div>
                <p
                  className={
                    displayList
                      ? "text-lg font-semibold"
                      : "text-lg font-semibold text-center"
                  }
                >
                  {form?.title}
                </p>
                {form?.authors.length > 0 && (
                  <div
                    className={
                      displayList
                        ? "flex flex-row items-center gap-x-2"
                        : "flex flex-row items-center gap-x-2 justify-center"
                    }
                  >
                    By
                    {form?.authors.map((item, index) => (
                      <p key={index} className="italic text-sm">
                        {item.name}{" "}
                      </p>
                    ))}
                  </div>
                )}
                <div className="text-sm italic text-red-500">
                  {form?.price?.amount} <span>{form?.price?.currency}</span>{" "}
                </div>
              </div>

              <div className="text-end">
                <Link
                  className="text-sm font-semibold underline"
                  href={`${pathname}/${form?.book?.slug}`}
                  onClick={() => setCurrentForm(form)}
                >
                  Lire maintenant
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ListItem
