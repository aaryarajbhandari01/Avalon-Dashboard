import "./Datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState } from "react";

// using MUI DATA TABLE
const Datatable = () => {
   
    const [data, setData] = useState(userRows)

    // delete button function
    const handleDelete = (id) => {
    //setting data by taking actual data and filtering them to check each item
    //if item id is not equal to the id then giving a new data
      setData(data.filter((item) => item.id !== id));
    };
    // for user action buttons -> delete and view
    const actionColumn = [
        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="cellAction">
                {/* linking to single page */}
                <Link to="/users/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
                </Link>
                
                <div
                  className="deleteButton"
                  // calling delete function to filter items through id and deleting
                  onClick={() => handleDelete(params.row.id)}
                >
                  Delete
                </div>
              </div>
            );
          },
        },
      ];

  return (
    <div className="datatable">
    <div className="datatableTitle">
      Add New User
      {/* add new button */}
      <Link 
      to="/users/new" 
      className="link">
        Add New
      </Link>
    </div>
    <DataGrid
      
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]} 
        checkboxSelection
      />
  </div>
  )
}

export default Datatable