import { FMFlexmonster } from "@flexmonster/react";
import "@flexmonster/js/flexmonster.css";

export default function PivotTableDemo() {

  const state = {
    id: "fm-state",
    dataset: {
      dataSource: {
        // Step 4.a. Specify the URL of your Flexmonster server
        url: "wss://demo-server.flexmonster.com:9500",
        // Uncomment the line below to connect to your local Flexmonster server
        // url: "ws://localhost:9501",
        // Step 4.b. Specify the name of your data source
        name: "StateNames",
      },
    },
    slice: {
      rows: [
        {
          fieldName: "Year",
        },
        {
          fieldName: "Gender",
        },
        {
          fieldName: "Name",
        },
      ],
      values: [
        {
          fieldName: "Count",
          aggregation: "sum",
        },
      ],
      columns: [
        {
          fieldName: "State",
        },
      ],
    },
  };

  return (
    <>
      <div className="text-wrap">
        <h1 className="page-title">Flexmonster 3.0 (preview)</h1>
        <p>
          Welcome to the preview of our next major release. The pivot table below is connected to our demo server and
          displays the 150MB dataset with 5.6M records of US kids' naming trends&nbsp;(1910-2014).
        </p>
        <p>Check out how to add Flexmonster 3.0 to your project:</p>
      </div>
      <ol className="steps-list">
        <li data-index="01">
          <a
            href="https://prerelease.flexmonster.com/doc/react/install-flexmonster-server/?r=rm_react_30"
            target="blank">
            Install the Flexmonster server
          </a>
        </li>
        <li data-index="02">
          <a
            href="https://prerelease.flexmonster.com/doc/react/embed-flexmonster-ui/?r=rm_react_30"
            target="blank">
            Embed the Flexmonster UI
          </a>
        </li>
        <li data-index="03">
          <a
            href="https://prerelease.flexmonster.com/doc/react/supported-data-sources/?r=rm_react_30"
            target="blank">
            Feed your data
          </a>
        </li>
      </ol>
      <div className="pivot-container">
        <FMFlexmonster
          state={state}
        />
      </div>
    </>
  );
}
