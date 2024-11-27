"use client"

import { inter } from "../fonts";
import Link from "next/link";
import { useState } from "react";
import { PlusIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { Feed } from "@/app/lib/definitions";


export default function FeedHeader({
    showFilters,selectedStatus,
    selectedBuilding,selectedCampus,
    setSelectedStatus,setSelectedCampus,
    setSelectedBuilding, setShowFilters
  }: Feed){
    return(
        <div className="flex flex-row justify-between mx-5">

            {/* Filter & Add Item Buttons */}
            <div className="h-8 p-1 mt-2 rounded-md border justify-self-end border-red-500 text-red-500 order-2">
                <Link href={'/post/make'} className="flex font-normal text-sm text-nowrap items-center">
                <PlusIcon className="mx-1 w-5" />
                Add Item
                </Link>
            </div>
            <div className="flex text-gray-500">
            {/* Funnel Icon */}
            <button
                onClick={() => setShowFilters((prev) => !prev)}
                className="p-2 flex items-center"
                >
                <AdjustmentsHorizontalIcon className="w-8 h-8" />
                </button>
            </div>

            {/* Filter Options */}
          {showFilters && (
            <div className="absolute top-32 left-0 p-4 flex flex-wrap gap-4 bg-white">
              <div className="flex gap-2">
                <select
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  value={selectedStatus}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="All">All Status</option>
                  <option value="Found">Found</option>
                  <option value="Missing">Missing</option>
                </select>
                <select
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  value={selectedCampus}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="All">All Campus</option>
                  <option value="Main">Main</option>
                  <option value="Talamban">Talamban</option>
                  {/* Add more campuses as needed */}
                </select>
                <select
                  onChange={(e) => setSelectedBuilding(e.target.value)}
                  value={selectedBuilding}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  <option value="All">All Buildings</option>
                  <option value="Bunzell">Bunzell</option>
                  <option value="SAFAD">SAFAD</option>
                  <option value="Wing 1">Wing 1</option>
                  <option value="Wing 2">Wing 2</option>
                  <option value="Wing 3">Wing 3</option>
                  {/* Add more buildings as needed */}
                </select>
              </div>
            </div>
          )}
      </div>
    );
}