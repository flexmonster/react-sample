"use client";

import { FMFlexmonster } from "@flexmonster/react/next";
import { StateInputParams } from "@flexmonster/flexmonster";

export default function Home() {

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
          state={state}
          options={{width: "100%", height: "100%"}}
        />
      </div>
    </div>
  );
}
