"use client";

import { useRef } from "react";
import { ReactFlexmonster, FlexmonsterRef } from "@flexmonster/react/next";
import "@flexmonster/flexmonster/flexmonster.css";

export default function Home() {
  const pivotRef = useRef<FlexmonsterRef>(null);

  const state = {
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
        <ReactFlexmonster
          ref={pivotRef}
          state={state}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
