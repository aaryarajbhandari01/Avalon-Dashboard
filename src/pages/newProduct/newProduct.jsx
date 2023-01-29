import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./newProduct.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import React, { useState } from 'react'


export default function NewProduct() {
     //adding and displaying image from file input
  const [file, setFile] = useState("")

  console.log(file)
  return (
    <div className='newProduct'>
    {/* adding sidebar here, same as home.jsx */}
    <Sidebar/>
    <div className="newProductContainer">
      <Navbar/>
    <div className="newProductDetails">
        <div className="top">
            <h1 className="addProductTitle">New Product</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img
            // if there is a chosen file then creating url for the file object and displaying it else using the icon
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
              />
          </div>

          <div className="right">
            <form className="addProductForm">

             <div className="addProductItem">
                {/* <label>Image</label> */}
                <label htmlFor="file">
                      Image: <DriveFolderUploadOutlinedIcon className="icon" />
                    </label>
                    {/* connecting input and label using htmlFor in label and id(file) in input*/}
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => setFile(e.target.files[0])}
                      // making display none for "choose file" button 
                      style={{ display: "none" }}
                    />
             </div>
             {/* ADD BUTTON */}
                <div className="addProductItem">
                <button className="addProductButton">Create</button>
                </div>
                <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                <label>Stock</label>
                <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                <label>Price</label>
                <input type="text" placeholder="Nrs 1000" />
                </div>
                <div className="addProductItem">
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
                
            </form>
            </div>
        </div>
    </div>
    </div>
    </div>
  );
}