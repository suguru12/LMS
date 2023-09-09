import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import camera from "../../assets/camera.png";
import { Box, IconButton, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

const FacultyForm = () => {
  const [formData, setFormData] = useState({
    facultyName: "", // Define these variables
    facultyId: "",
    employeecode: "",
    designation: "",
    qualification: "",
    gender: "",
    emailId: "",
    mobileNumber: "",
    bloodGroup: "",
    dob: "",
    yoj: "",
    description: "",
  });

  const handleSubmit = (e) => {
    // Define your submit logic here
  };

  const handleReset = (e) => {
    // Define your reset logic here
  };

  const handleImageUpload = (e) => {
    // Define your image upload logic here
  };

  return (
    <div className="mb-4 flex justify-between items-center top-0">
      <div className="w-full bg-white px-16  rounded-lg shadow  ">
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
              "& .MuiInputLabel-root": {
                // Reduce label font size
                fontSize: "13px",
                color: "#105D50",
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
                  fontSize: "13px", // Set the outline color to yellow on focus
                },
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="center"
              // alignItems="center"
              sx={{ marginBottom: "20px", width: "100%" }}
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
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Faculty Name"
                  variant="outlined"
                  fullWidth
                  //value={formData.facultyName}
                  required
                />
                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Employee Code"
                  variant="outlined"
                  fullWidth
                  //value={formData.employeecode}
                  required
                />
                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Qualification"
                  variant="outlined"
                  fullWidth
                  //value={formData.qualification}
                  required
                />
                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Email ID"
                  variant="outlined"
                  fullWidth
                  //value={formData.emailId}
                  required
                />
                {/* <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Blood Group"
                  variant="outlined"
                  fullWidth
                  //value={formData.bloodGroup}
                  required
                /> */}

                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Year Of Joining"
                  variant="outlined"
                  fullWidth
                  //value={formData.yoj}
                  required
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
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },
                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                  }}
                  label="Faculty ID"
                  variant="outlined"
                  fullWidth
                  //value={formData.facultyId}
                  required
                />
                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Designation"
                  variant="outlined"
                  fullWidth
                  //value={formData.designation}
                  required
                />

                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Gender"
                  variant="outlined"
                  fullWidth
                  select
                  //value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                  required
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </TextField>

                <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height: 45,
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Mobile number"
                  variant="outlined"
                  fullWidth
                  //value={formData.mobileNumber}
                  required
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{
                      backgroundColor: "#F5F5F5",
                      color: "#105D50",
                      "& .MuiFormLabel-root.Mui-focused": {
                        color: "#105D50",
                      },

                      "& .MuiInputBase-root": {
                        height: 45,
                        width: 280,
                      },
                      "&:hover": {
                        // Apply styles when hovering over the TextField
                        backgroundColor: "#EEEDED", // Change background color on hover
                      },
                    }}
                    label="D.O.B"
                    format="MM/DD/YYYY"
                    variant="outlined"
                    fullWidth
                    //value={formData.dob}
                    required
                    //defaultValue={dayjs('')}
                  />
                </LocalizationProvider>

               
              </Stack> </Stack>
              <Stack
             >
                  <TextField
                  sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#105D50",
                    "& .MuiFormLabel-root.Mui-focused": {
                      color: "#105D50",
                    },

                    "& .MuiInputBase-root": {
                      height:120,
                      width:580
                    },
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          //defaultValue="Default Value"
        />
              </Stack>
            
           
            <Grid item xs={10}>
              <div className="flex  justify-center pt-4 pb-4 space-x-8">
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
                  className="w-34 text-[12px] font-normal h-10 px-4 py-2  bg-custom-green text-white rounded-lg hover:bg-custom-orange hover:text-green"
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
};

export default FacultyForm;
