import React from 'react'
import "./Chart.css"
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// props for chart data
export default function Chart({title, data, dataKey, grid}) {

  return (
    // chart showing sales analytics of months
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      {/* iff 400 px height will be 100px */}
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          {/* creating X axis */}
          <XAxis 
            dataKey="name" 
            stroke="rgb(132, 171, 132)" 
          />
          <Line type="monotone" 
          dataKey={dataKey}
          stroke="rgb(132, 171, 132)" />
          {/* for displying grid details when hovering */}
          <Tooltip />
         {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}


// const data = [
//     { name: "January", Total: 1200 },
//     { name: "February", Total: 2100 },
//     { name: "March", Total: 800 },
//     { name: "April", Total: 1600 },
//     { name: "May", Total: 900 },
//     { name: "June", Total: 1700 },
//   ];

// const Chart = ({aspect, title}) => {
//   return (
//     <div className="chart">
//         <div className="title">{title}</div>
//       <ResponsiveContainer width="100%" aspect={aspect}>
//         <AreaChart
//           width={730}
//           height={250}
//           data={data}
//           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
//         >
//           <defs>
//             <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
//               <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
//             </linearGradient>
//           </defs>
//           <XAxis dataKey="name" stroke="gray" />
//           <YAxis/>
//           <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
//           <Tooltip />
//           <Area
//             type="monotone"
//             dataKey="Total"
//             stroke="#8884d8"
//             fillOpacity={1}
//             fill="url(#total)"
//           />
//         </AreaChart>
//       </ResponsiveContainer>

//     </div>
//   )
// }

// export default Chart