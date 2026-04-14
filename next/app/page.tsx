"use client";

import { useRef } from "react";
import { FMFlexmonster } from "@flexmonster/react/next";
import { FMFlexmonsterRef } from "@flexmonster/react";
import { StateInputParams } from "@flexmonster/flexmonster";
import "@flexmonster/flexmonster/flexmonster.css";

export default function Home() {
  const pivotRef = useRef<FMFlexmonsterRef>(null);

  const state: StateInputParams = {
    id: "fm-state",
    dataset: {
      dataSource: {
        type: "json",
        url: "https://cdn.flexmonster.com/data/retail-data.json",
      },
    },
    slice: {
      rows: [
        {
          name: "Retail Category",
        },
        {
          name: "Status",
        },
      ],
      columns: [
        {
          name: "Country",
        },
      ],
      values: [
        {
          name: "Price",
          aggregation: "sum",
        },
      ],
    },
  };

  return (
    <div className="pivot-wrapper">
      <div className="pivot-container">
        <FMFlexmonster
          ref={pivotRef}
          state={state}
          options={{width: "100%", height: "100%"}}
        />
      </div>
    </div>
  );
}
