import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { Menu, MenuItem } from "@mui/material";
import { FaPlus } from "react-icons/fa";

function Faculty() {
  //const [branches, setBranches] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // Define anchorEl state
  const [openMenu, setOpenMenu] = useState(null); // Define openMenu state
  const history = useNavigate();

  // const fetchBranches = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/api/branches");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setBranches(data);
  //     } else {
  //       console.error("Failed to fetch branches");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching branches:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchBranches();
  // }, []);

  const columns = [
    {
      name: "S.no",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Faculty ID",
      selector: "facultyId",
      sortable: true,
    },
    {
      name: "Faculty Name",
      selector: "facultyName",
      sortable: true,
    },
    {
      name: "Email ID",
      selector: "emailid",
      sortable: true,
    },
    {
      name: "Mobile No",
      selector: "mobileNumber",
      sortable: true,
    },
    {
      name: "D.O.B",
      selector: "dob",
      sortable: true,
    },
   
    {
      name: "Status",
      cell: (row) => (
        <Switch
          checked={row.status}
          onChange={() => handleToggleStatus(row.id)}
          color="primary"
        />
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <IconButton
            size="small"
            aria-label="actions"
            onClick={() => handleMenuOpen(row.id)}
          >
            <EditIcon />
          </IconButton>
          <Menu
            id={`actions-menu-${row.id}`}
            anchorEl={anchorEl}
            open={openMenu === row.id}
            onClose={() => handleMenuClose(row.id)}
          >
            <MenuItem onClick={() => handleViewClick(row.id)}>View</MenuItem>
            <MenuItem onClick={() => handleEditClick(row.id)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDeleteClick(row.id)}>Delete</MenuItem>
          </Menu>
        </div>
      ),
      sortable: false,
    },
  ];
  const data=[
  {
    id: 1,
    facultyId: "why01",
    facultyName: "WHYTAP",
    emailid: "why1@gmail.com",
    mobileNumber: "9876543210",    
    dob: "09.09.2010",  
    Status: "Active",
  },
  {
    id: 1,
    facultyId: "why01",
    facultyName: "WHYTAP",
    emailid: "why1@gmail.com",
    mobileNumber: "9876543210",    
    dob: "09.09.2010",  
    Status: "Active",
  },
  {
    id: 1,
    facultyId: "why01",
    facultyName: "WHYTAP",
    emailid: "why1@gmail.com",
    mobileNumber: "9876543210",    
    dob: "09.09.2010",  
    Status: "Active",
  },
  {
    id: 1,
    facultyId: "why01",
    facultyName: "WHYTAP",
    emailid: "why1@gmail.com",
    mobileNumber: "9876543210",    
    dob: "09.09.2010",  
    Status: "Active",
  },  
  ]
  // // Define your custom date format function here
  // const formatDate = (date) => {
  //   const currentDate = new Date(date);
  //   const day = currentDate.getDate().toString().padStart(2, '0');
  //   const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  //   const year = currentDate.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  
  const handleToggleStatus = (branchId) => {
    // Implement your toggle logic here
  };

  const handleMenuOpen = (event, branchId) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(branchId);
  };
  const handleMenuClose = (branchId) => {
    // Implement your menu close logic here
  };

  const handleViewClick = (branchId) => {
    // Implement your view action here
  };

  const handleEditClick = (branchId) => {
    // Implement your edit action here
  };

  const handleDeleteClick = (branchId) => {
    // Implement your delete action here
  };
  
  const toggleFormView = () => {
    history('/homepage/faculty/addfaculty');
  };

  const customStyles = {
    headRow: {
      style: {
        border: "none",
        outerWidth:"600px"
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#105D50",
        color: "#F9FAFB",
      
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        outline: "1px solid #FFFFFF",
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
  };



  return (
    <div className="W-full h-fit bg-white flex flex-col items-center gap-3 rounded-md pt-5  px-1 drop-shadow">
    <div className="w-full flex flex-row justify-end items-center gap-10 px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Branches"
          className="pl-8 pr-2 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-custom-green"
        />
        <svg
          className="absolute left-2 top-2 text-gray-500 h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-5.2-5.2"></path>
          <path d="M15.5 10.5a5 5 0 1 1-7.9 0"></path>
        </svg>
      </div>
      <button
        className="flex flex-row py-3 px-4 text-[14px] bg-custom-green text-white rounded-lg hover:bg-custom-orange  hover:text-green items-center gap-1 "
        onClick={toggleFormView}
      >
        <FaPlus />
        Add Faculty
      </button>
    </div>
      {/* Use the DataTable component */}
      <DataTable
       fixedHeader
       fixedHeaderScrollHeight="250px"
        columns={columns}
        data={data}
        // data={branches.map((branch) => ({
        //   ...branch,
        //   formattedDate: formatDate(branch.setupDate),
        // }))}
        selectableRows
        pagination
        customStyles={customStyles}
        highlightOnHover
        pointerOnHover
// Apply custom styles here
      />
    </div>
  );
}

export default Faculty;
