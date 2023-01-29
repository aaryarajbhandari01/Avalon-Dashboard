import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
//import List from '../../components/table/Table'
import Widget from '../../components/widget/Widget'
import "./Home.css"
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import TransList from '../../components/table/Table'


const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>

        {/* top widgets */}
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>

        {/* middle chart and  widgets */}
        <div className="homeWidgets">
        {/* passing chart userData datas as props */}
        <Chart data={userData} title="User Analytics" grid dataKey={"Active Users"}/> 
        <WidgetSm/>
          {/* <WidgetLg/> */}
        </div>
        <div className='homeWidgetsLg'>
        {/* bottom widget transactions */}
        <TransList/>
        </div>
        {/* <div className="charts"> */}
          {/* <FeaturedInfo /> */}
          {/* aspect for height of the chart */}
          {/* <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} /> 
        </div>
        <div className="listContainer">
          <div className="listTitle">
            Lastest Transaction
            <List/>
          </div>
        </div> */}
        
      </div>
    </div>
  )
}

export default Home