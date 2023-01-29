import React from 'react'
import Datatable from '../../components/datatable/Datatable'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import UserList from '../userList/UserList'
import "./List.css"

const List = () => {
  return (
    <div className='list'>
      {/* adding sidebar here, same as home.jsx */}
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {/* user list data table */}
        {/* <Datatable/>  */}
        <div className="userList">
          <div className="listTitle">
            Users
          </div>
            <UserList/>

        </div>
      </div>
    </div>
  )
}

export default List