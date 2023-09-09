import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Switch from "@mui/material/Switch";
import {csc} from "country-state-city";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
import camera from "../../assets/camera.png";


function BranchForm() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);
  const cloudSpaceOptions = ["GB", "TB"];
  const [cloudSpaceUnit, setCloudSpaceUnit] = useState(cloudSpaceOptions[0]);
  //const countries = csc.getAllCountries();
  const [branches, setBranches] = useState([]);
  const history = useNavigate();
  const [formData, setFormData] = useState({
    branchId: "",
    branchName: "",
    branchType: "",
    emailId: "",
    phoneNumber: "",
    landlineNumber: "",
    contactPerson: "",
    cloudSpace: "",
    vr: false,
    addressLine1: "",
    addressLine2: "",
    area: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const branchName = formData.branchName;
      const firstThreeLetters = branchName.slice(0, 3).toUpperCase();

      // Add a function to generate sequential numbers
      let lastBranchId = "00"; // Initialize it with the last known branch ID

      const generateSequentialNumber = () => {
        // Increment the lastBranchId by 1 and store it back
        lastBranchId = (parseInt(lastBranchId, 10) + 1)
          .toString()
          .padStart(2, "0");
        return lastBranchId;
      };

      const newSequentialNumber = generateSequentialNumber();
      const newBranchId = `${firstThreeLetters}-${newSequentialNumber}`;

      const formDataToSend = {
        branchId: newBranchId,
        branchName: formData.branchName,
        branchType: formData.branchType,
        emailId: formData.emailId,
        phoneNumber: formData.phoneNumber,
        landlineNumber: formData.landlineNumber,
        contactPerson: formData.contactPerson,
        cloudSpace: `${formData.cloudSpace} ${cloudSpaceUnit}`,
        vr: formData.vr,
        addressLine1: formData.addressLine1,
        addressLine2: formData.addressLine2,
        area: formData.area,
        country: selectedCountry,
        state: selectedState,
        district: formData.district,
        pincode: formData.pincode,
      };

      const response = await fetch("http://localhost:8000/api/branches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        await fetchBranches();
        setFormData({
          branchName: "",
          branchType: "",
          emailId: "",
          phoneNumber: "",
          landlineNumber: "",
          contactPerson: "",
          cloudSpace: "",
          vr: false,
          addressLine1: "",
          addressLine2: "",
          area: "",
          country: "",
          state: "",
          district: "",
          pincode: "",
        });
        setCloudSpaceUnit(cloudSpaceOptions[0]);
      } else {
        console.error("Failed to add branch");
      }
    } catch (error) {
      console.error("Error adding branch:", error);
    }
    history("/branch");
  };

  const fetchBranches = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/branches");
      if (response.ok) {
        const data = await response.json();
        setBranches(data);
      } else {
        console.error("Failed to fetch branches");
      }
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  // const updatedCountries = countries.map((country) => ({
  //   label: country.name,
  //   value: country.id,
  //   ...country,
  // }));

  // const updatedStates = (countryId) =>
  //  csc
  //     .getStatesOfCountry(countryId)
  //     .map((state) => ({ label: state.name, value: state.id, ...state }));
// 
  const handleCloudSpaceUnitChange = (event) => {
    setCloudSpaceUnit(event.target.value);
  };

  const handleStateChange = (event) => {
    const selectedStateId = event.target.value;
    setSelectedState(selectedStateId);
  };

  const handleReset = () => {
    // Add your logic to reset the form fields here
  };

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setSelectedCountry(selectedCountryId);
    const selectedCountryStates = csc.getStatesOfCountry(selectedCountryId);
    setStates(selectedCountryStates);
    setSelectedState(""); // Reset the selected state when changing the country
  };

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are zero-based
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const switchStyle = {
    borderRadius: 2,
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#105D50",
    },
    "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
      backgroundColor: "#105D50",
    },
  };
  return (
   
      <div className="w-full flex justify-between items-center ">
      <div className="w-full bg-white px-16 pb-6 rounded-lg shadow  ">

          {/* Add Branch Form */}
          <form onSubmit={handleSubmit}>
          <div className="text-center py-6">
              <input
                accept="image/*"
                id="image-upload"
                type="file"
                style={{ display: "none", backgroundColor: "white" }}
              />
              <label htmlFor="image-upload">
                <IconButton
                  color="#f5f5f5"
                  aria-label="upload picture"
                  component="span"
                >
                  {/* <Avatar sx={{ width: 150, height: 150 }}> */}

                  <div className="w-[140px] h-[140px] flex flex-col justify-center items-center border-2 border-custom-green rounded-full bg-white text-custom-green">
                    <img
                      alt="uploadcamera"
                      src={camera}
                      className="w-7 h-7 text-custom-green"
                    />
                    <span className="text-[15px] font-normal">
                      Upload Institute Logo
                    </span>
                  </div>

                  {/* </Avatar> */}
                </IconButton>
              </label>
            </div>
            <Stack

              sx={{
                margin: "auto",
                width: "100%",
                display: "flex",
                alignItems: "center",
                "& > :not(style)": {},
                "& .MuiInputLabel-root": { // Reduce label font size
                  fontSize: "12px",
                  color:"#105D50"
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "1.3px solid #105D50", // Set the default outline color to black
                  },
                  "&:hover fieldset": {
                    border: "1.3px solid #105D50", 
                    // Change the border color on hover
                  },
                
                  "&.Mui-focused fieldset": {
                    border: "1.34px solid #105D50", 
                    fontSize: "13px",// Set the outline color to yellow on focus
                  },
                },
              }}
            >
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ margin: "auto", width: "100%" }}
                spacing={2}
              >
                 <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  width={"280px"}
                  spacing={2}
                >


                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      color: "#105D50",
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                     
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Branch Name"
                    variant="outlined"
                    fullWidth
                    value={formData.branchName}
                    onChange={(e) =>
                      setFormData({ ...formData, branchName: e.target.value })
                    }
                    required
                  />
               
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                    
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Branch Type"
                    variant="outlined"
                    fullWidth
                    value={formData.branchType}
                    onChange={(e) =>
                      setFormData({ ...formData, branchType: e.target.value })
                    }
                    required
                  />
               
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Email ID"
                    variant="outlined"
                    fullWidth
                    value={formData.emailId}
                    onChange={(e) =>
                      setFormData({ ...formData, emailId: e.target.value })
                    }
                    required
                  />
                
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Phone number"
                    variant="outlined"
                    fullWidth
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    required
                  />
                
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Land line number"
                    variant="outlined"
                    fullWidth
                    value={formData.landlineNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        landlineNumber: e.target.value,
                      })
                    }
                  />
             
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Contact person"
                    variant="outlined"
                    fullWidth
                    value={formData.contactPerson}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        contactPerson: e.target.value,
                      })
                    }
                  />
                
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Address line 1"
                    variant="outlined"
                    fullWidth
                    value={formData.addressLine1}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLine1: e.target.value })
                    }
                  />

                  
                 </Stack>
                 <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  width={"280px"}
                  spacing={2}
                >

               
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Address line 2"
                    variant="outlined"
                    fullWidth
                    value={formData.addressLine2}
                    onChange={(e) =>
                      setFormData({ ...formData, addressLine2: e.target.value })
                    }
                  />
               
               
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Area"
                    variant="outlined"
                    fullWidth
                    value={formData.area}
                    onChange={(e) =>
                      setFormData({ ...formData, area: e.target.value })
                    }
                  />
               
              
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    select
                    label="Country"
                    variant="outlined"
                    fullWidth
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    required
                  >
                    <MenuItem value="" disabled>
                      Select Country
                    </MenuItem>
                    {/* {updatedCountries.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))} */}
                  </TextField>
              
               
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    select
                    label="State"
                    variant="outlined"
                    fullWidth
                    value={selectedState}
                    onChange={handleStateChange}
                    required
                    disabled={!selectedCountry}
                  >
                    <MenuItem value="">
                      <em>Select State</em>
                    </MenuItem>
                    {/* {selectedCountry &&
                      updatedStates(selectedCountry).map((state) => (
                        <MenuItem key={state.value} value={state.value}>
                          {state.label}
                        </MenuItem>
                      ))} */}
                  </TextField>
                
              
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="District"
                    variant="outlined"
                    fullWidth
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                  />
                
                
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Pincode"
                    variant="outlined"
                    fullWidth
                    value={formData.pincode}
                    onChange={(e) =>
                      setFormData({ ...formData, pincode: e.target.value })
                    }
                  />
               
               
                  <TextField
                    sx={{
                      backgroundColor: '#F5F5F5',
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },
                      "& .MuiInputBase-root": {
                        height: 45
                    },
                    "&:hover": { // Apply styles when hovering over the TextField
                      backgroundColor: '#EEEDED', // Change background color on hover
                    },
                    }}
                    label="Cloud Space"
                    variant="outlined"
                    fullWidth
                    value={formData.cloudSpace}
                    onChange={(e) =>
                      setFormData({ ...formData, cloudSpace: e.target.value })
                    }
                    InputProps={{
                      endAdornment: (
                        <div className="flex">
                          <button
                            className={`px-2 py-1 rounded-l-md z-10 ${
                              cloudSpaceUnit === "GB"
                                ? "bg-custom-green text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                            onClick={() => setCloudSpaceUnit("GB")}
                            type="button"
                          >
                            GB
                          </button>
                          <button
                            className={`px-2 py-1 rounded-r-md z-10 ${
                              cloudSpaceUnit === "TB"
                                ? "bg-custom-green text-white"
                                : "bg-gray-200 text-gray-600"
                            }`}
                            onClick={() => setCloudSpaceUnit("TB")}
                            type="button"
                          >
                            TB
                          </button>
                        </div>
                      ),
                    }}
                  />
              
              </Stack>
            
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ margin: "auto", width: "100%" }}
                spacing={2}
              >
                  <div className="flex items-center">
                    <label className="mr-2">VR</label>
                    <Switch
                      checked={formData.vr}
                      onChange={(e) =>
                        setFormData({ ...formData, vr: e.target.checked })
                      }
                      color="primary"
                      sx={switchStyle}
                    />
                  </div>
                 </Stack>
              

                <Grid item xs={10}>
                  <div className="flex justify-center space-x-8">
                    <button
                      type="submit"
                      className="w-28 text-[12px] font-normal h-10 px-4 py-2 bg-custom-green text-white rounded-lg hover:bg-custom-orange hover:text-green"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-28 text-[12px] font-normal h-10 px-4 py-2  bg-custom-green text-white rounded-lg hover:bg-custom-orange hover:text-green"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        handleSubmit();
                      }}
                      className="w-34  text-[12px] font-normal h-10 px-4 py-2  bg-custom-green text-white rounded-lg hover:bg-custom-orange hover:text-green"
                    >
                      Submit & Add
                    </button>
                  </div>
                </Grid>
             
            </Stack>
          </form>
        </div>
      </div>
  
  );
}
export default BranchForm;
