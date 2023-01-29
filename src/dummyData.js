
// dummy data for home page chart
  export const userData = [
    {
      name: 'Jan',
      "Active Users": 4000, 
    },
    {
      name: 'Feb',
      "Active Users": 4000, 
    },{
      name: 'Mar',
      "Active Users": 4000, 
    },{
      name: 'Apr',
      "Active Users": 3000, 
    },{
      name: 'May',
      "Active Users": 4080, 
    },{
      name: 'Jun',
      "Active Users": 2000, 
    },{
      name: 'Jul',
      "Active Users": 4000, 
    },{
      name: 'Aug',
      "Active Users": 3000, 
    },{
      name: 'Sep',
      "Active Users": 5000, 
    },{
      name: 'Oct',
      "Active Users": 3000, 
    },{
      name: 'Nov',
      "Active Users": 4000, 
    },{
      name: 'Dec',
      "Active Users": 5000, 
    },
    
  ];

  
  // dummy data for userlist
  export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          
          <div className="cellWithImg">
            {/* adding image sounce with avatar source (img) */}
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {/* adding ujsername beside the image */}
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  export const userRows = [
    {
      id: 1,
      username: "Jon Snow",
      img:
        "https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "jon@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: 
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      transaction: "$120.00",
    
    },
    {
      id: 4,
      username: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      transaction: "$120.00",

    },
    {
      id: 5,
      username: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "passive",
      transaction: "$120.00",

    },
    {
      id: 6,
      username: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      transaction: "$120.00",

    },
    {
      id: 7,
      username: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "passive",
      transaction: "$120.00",

    },
    {
      id: 8,
      username: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      transaction: "$120.00",
      
    },
    {
      id: 9,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      transaction: "$120.00",

    },
    {
      id: 10,
      username: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      transaction: "$120.00",

    },
  ];

  export const productRows = [
    {
      id: 1,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 2,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 3,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 4,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 5,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 6,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 7,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 8,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 9,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
    {
      id: 10,
      name: "Apple Airpods",
      img:
        "https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      stock: 123,
      status: "active",
      price: "$120.00",
    },
  ];

  export const productData = [
    {
      name: "Jan",
      "Sales": 4000,
    },
    {
      name: "Feb",
      "Sales": 3000,
    },
    {
      name: "Mar",
      "Sales": 5000,
    },
  ];
