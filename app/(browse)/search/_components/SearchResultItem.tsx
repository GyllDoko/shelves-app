import Image from "next/image"
import Link from "next/link"
import React from "react"

const SearchResultItem = ({ item }: { item: object }) => {
  return (
    <div className={"m-2 flex flex-col"}>
      <div className="">
        <Image
          className="w-full h-auto mx-auto"
          src={item?.image}
          alt={item?.title}
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div
        className={" flex flex-col justify-between items-center"}
        style={{ marginLeft: 0 }}
      >
        <div>
          <p className={"text-lg font-semibold text-center"}>{item?.title}</p>
          {item?.authors.length > 0 && (
            <div
              className={"flex flex-row items-center gap-x-2 justify-center"}
            >
              By
              {item?.authors.map((item, index) => (
                <p key={index} className="italic text-sm">
                  {item.name}{" "}
                </p>
              ))}
            </div>
          )}
          <div className="text-sm italic text-red-500">
            {item?.price?.amount} <span>{item?.price?.currency}</span>{" "}
          </div>
        </div>

        <div className="text-end">
          {/* <Link
            className="text-sm font-semibold underline"
            href={`${pathname}/${item?.book?.slug}`}
          >
            Lire maintenant
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default SearchResultItem
