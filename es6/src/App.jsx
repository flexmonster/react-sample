import { useRef } from 'react';
import { ReactFlexmonster } from '@flexmonster/react';
import './App.css';
import '@flexmonster/flexmonster/flexmonster.css';

function App() {
  const pivotRef = useRef(null);

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

export default App;