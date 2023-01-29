import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./ProductList.css"
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData"; //importing user details
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {

    const [data, setData] =useState(productRows)

    // handling delete using product id for button function for product management
  const handleDelete = (id) => {
    //setting data by taking actual data and filtering them to check each item
    //if item id is not equal to the id then giving a new data
    setData(data.filter((item) => item.id !== id));
};

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];


    return (
        <div className='products'>
          {/* adding sidebar here, same as home.jsx */}
          <Sidebar/>
          <div className="productListContainer">
            <Navbar/>
            
            {/* products */}
            <div className="productList">
              <div className="listTitle">
                Products
              </div>

              <DataGrid
                    rows={data}
                    disableSelectionOnClick
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]} 
                    checkboxSelection
                />
            </div>
          </div>
        </div>
      )
}

export default ProductList