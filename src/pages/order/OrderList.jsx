import * as React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TransList from '../../components/table/Table'
import "./OrderList.css"


const OrderList = () => {
  
  return (
    <div className='orders'>
    <Sidebar/>
    <div className="ordersContainer">
      <Navbar/>
        <div className="ordersList">
          <div className="listTitle">
            Orders
          </div>
            <TransList/>
        </div>
    </div>
  </div>
  )
}

export default OrderList