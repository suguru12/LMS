import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { Menu, MenuItem } from "@mui/material";
import { FaPlus} from "react-icons/fa";

function Branches() {
 // const [branches, setBranches] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // Define anchorEl state
  const [openMenu, setOpenMenu] = useState(null); // Define openMenu state
  const history = useNavigate();
  const [selectedBranch, setSelectedBranch] = useState(null); // Track the selected branch

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
      name: "Branch ID",
      selector: "branchId",
      sortable: true,
    },
    {
      name: "Branch Name",
      selector: "branchName",
      sortable: true,
    },
    {
      name: "Email ID",
      selector: "emailId",
      sortable: true,
    },
    {
      name: "Mobile No",
      selector: "phoneNumber",
      sortable: true,
    },
    {
      name: "Point Of Contact",
      selector: "contactPerson",
      sortable: true,
    },
    {
      name: "Set-up date",
      selector: "formattedDate",
      sortable: true,
    },
    {
      name: "VR",
      cell: (row) => (
        <Switch
          checked={row.vr}
          onChange={() => handleToggleVR(row.id)}
          color="primary"
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#105D50",
            },
            "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
              backgroundColor: "#105D50",
            },
          }}
        />
      ),
      sortable: true,
    },
    {
      name: "Space Used",
      selector: "spaceUsed",
      sortable: true,
    },
    {
      name: "Disk Space",
      selector: "cloudSpace",
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
           // onClick={(event) => handleMenuOpen(event, branches)} // Pass the event and branch
          >
            <EditIcon />
          </IconButton>
          <Menu
            id={`actions-menu-${row.id}`}
            anchorEl={anchorEl}
            open={openMenu === row.id}
            //onClose={() => handleMenuClose(row.id)}
          >
            <MenuItem
             onClick={() => handleViewClick(row.id)}>View</MenuItem>
            <MenuItem onClick={() => handleEditClick(row.id)}>Edit</MenuItem>
            <MenuItem onClick={() => handleDeleteClick(row.id)}>
              Delete
            </MenuItem>
          </Menu>
        </div>
      ),
      sortable: false,
    },
  ];
  const data = [
    {
      id: 1,
      branchId: "why01",
      branchName: "WHYTAP",
      emailId: "why1@gmail.com",
      phoneNumber: "9876543210",
      contactPerson: "Arut",
      formattedDate: "09.09.2010",
      VR: "Active",
      spaceUsed: "23 GB",
      cloudSpace: "12 MB",
      Status: "Active",
    },
    {
      id: 1,
      branchId: "why01",
      branchName: "WHYTAP",
      emailId: "why1@gmail.com",
      phoneNumber: "9876543210",
      contactPerson: "Arut",
      formattedDate: "09.09.2010",
      VR: "Active",
      spaceUsed: "23 GB",
      cloudSpace: "12 MB",
      Status: "Active",
    },
    {
      id: 1,
      branchId: "why01",
      branchName: "WHYTAP",
      emailId: "why1@gmail.com",
      phoneNumber: "9876543210",
      contactPerson: "Arut",
      formattedDate: "09.09.2010",
      VR: "Active",
      spaceUsed: "23 GB",
      cloudSpace: "12 MB",
      Status: "Active",
    },
    {
      id: 1,
      branchId: "why01",
      branchName: "WHYTAP",
      emailId: "why1@gmail.com",
      phoneNumber: "9876543210",
      contactPerson: "Arut",
      formattedDate: "09.09.2010",
      VR: "Active",
      spaceUsed: "23 GB",
      cloudSpace: "12 MB",
      Status: "Active",
    },
  ];
  // // Define your custom date format function here
  // const formatDate = (date) => {
  //   const currentDate = new Date(date);
  //   const day = currentDate.getDate().toString().padStart(2, "0");
  //   const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  //   const year = currentDate.getFullYear();
  //   return `${day}-${month}-${year}`;
  // };

  const handleToggleVR = (branchId) => {
    // Implement your toggle logic here
  };

  const handleToggleStatus = (branchId) => {
    // Implement your toggle logic here
  };

  // const handleMenuOpen = (event, branch) => {
  //   setAnchorEl(event.currentTarget);
  //   setOpenMenu(branch.branchId);
  //   setSelectedBranch(branch); // Set the selected branch for actions
  // };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleViewClick = () => {
    // Implement your view action here using selectedBranch
    if (selectedBranch) {
      // You can navigate to a view page or display details in a modal
      console.log("View branch:", selectedBranch);
    }
    handleMenuClose();
  };

  const handleEditClick = () => {
    // Implement your edit action here using selectedBranch
    if (selectedBranch) {
      // You can navigate to an edit page or open an edit form
      console.log("Edit branch:", selectedBranch);
    }
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    // Implement your delete action here using selectedBranch
    if (selectedBranch) {
      // You can show a confirmation dialog and delete the branch if confirmed
      console.log("Delete branch:", selectedBranch);
    }
    handleMenuClose();
  };

  const toggleFormView = () => {
    history("/homepage/branch/addbranch");
  };

  const customStyles = {
    headRow: {
      style: {
        border: "none",
        outerWidth: "600px",
        justifyContent: "space-evenly", // Add this line to evenly space the header cells
      },
    },
    headCells: {
      style: {
        fontSize: "12px",
        paddingLeft: "8px",
        paddingRight: "8px",
        backgroundColor: "#105D50",
        color: "#F9FAFB",
        fontweight: "400",
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
        color: "#105D50",
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
            className="pl-8 pr-2 py-2 text-[14px] font-normal border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-custom-green"
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
          Add Branch
        </button>
      </div>
      {/* Use the DataTable component */}
      <DataTable
        fixedHeader
        fixedHeaderScrollHeight="400px"
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

export default Branches;
