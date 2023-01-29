import * as React from 'react'
import "./Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// using MUI Basic Table for dashboard lastest transactions
const TransList = () => {
    const rows = [
        {
          id: 1143155,
          product: "Acer Nitro 5",
          img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 785,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Demin Pants",
          img: "https://i.pinimg.com/564x/04/0b/b0/040bb0a4e59e0452c2075f008671abcb.jpg",
          customer: "Micaela Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "Redragon S101",
          img: "",
          customer: "John Smith",
          date: "1 March",
          amount: 35,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Razer Blade 15",
          img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 920,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "ASUS ROG Strix",
          img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 2000,
          method: "Online",
          status: "Pending",
        },
      ];
  return (
      <div className='widgetLg'>
    <TableContainer component={Paper} className="table">
      <h3 className="widgetLgTitle">Latest transactions</h3>

      <Table sx={{ minWidth: 650 }} aria-label="simple table" className='widgetLgTable'>
        <TableHead className='widgetLgTh'>
        <TableRow >
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody >
          {rows.map((row) => (
            // unique key is transaction id
            <TableRow
              key={row.id}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell className="tableCell">
              <div className="cellWrapper">
                    <img src={row.img} alt="product image" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              {/*status color depending on the row status */}
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TransList