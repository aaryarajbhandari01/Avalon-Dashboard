import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import {userColumns, userRows } from "../../dummyData"; //importing user details
import { Link } from "react-router-dom";
import { useState } from "react";

// using MUI DATA TABLE
export default function UserList() {

  // managing user data
  const [data, setData] = useState(userRows);

  // handling delete using user id for button function for user management
  const handleDelete = (id) => {
    //setting data by taking actual data and filtering them to check each item
    //if item id is not equal to the id then giving a new data
    setData(data.filter((item) => item.id !== id));
};
  
  const columns = [
   
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
           {/* linking to edit page */}
            <Link to={"/users/" + params.row.id}>
              {/* edit user button */}
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
                  // calling delete function to filter items through id and deleting
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    // <div className="datatable">
    //     <div className="datatableTitle">
    //     Add New User
    //     {/* add new button */}
    //     <Link 
    //     to="/users/new" 
    //     className="link">
    //         Add New
    //     </Link>
    //     </div>
        <div className="userList">
        <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={userColumns.concat(columns)}
            // columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]} 
            checkboxSelection
        />
        </div>
    // </div>

  );
}
