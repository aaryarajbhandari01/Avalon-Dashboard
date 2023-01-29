import React, { useState } from 'react'
import "./New.css"
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

// form page
const New = ({inputs, title}) => {

  //adding and displaying image from file input
  const [file, setFile] = useState("")

  console.log(file)

  return (
    <div className='new'>
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
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
            <form>
              <div className="formInput">
                  {/* connecting input and label using htmlFor 
                  (opening file by clicking on the icon) */}
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

              {/* mapping through each form inputs */}
              {inputs.map((input) => (
                // giving unique key as we're using map
              <div className="formInput" key={input.id}> 
                <label>{input.label}</label>
                <input type={input.type} placeholder={input.placeholder}/>
              </div>
              ))}
              <button>Submit</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New