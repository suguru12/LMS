import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import camera from "../../assets/camera.png";
import { Box, Button, IconButton, Input, InputAdornment, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const BatchForm = () => {
  const [formData, setFormData] = useState({
    batchName: "", // Define these variables
    batchId: "",
    batchTimings: "",
    startDate: "",
    courseName: "",
    courseId: "",
    noofStudents: "",
    facultyName: "",
    facultyId: "",
    uploadStudents: "",
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
      <div className="w-full bg-white px-16 py-6 rounded-lg shadow  ">
        {/* Add Branch Form */}
        <form onSubmit={handleSubmit}>
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
                  label="Batch Name"
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
                  label="Batch Timings"
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
                  label="Course Name"
                  variant="outlined"
                  fullWidth
                  //value={formData.mobileNumber}
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
                  label="Faculty List"
                  variant="outlined"
                  fullWidth
                  select // This makes it a selection menu
                  value={formData.facultyName}
                  onChange={(e) => setFormData({ ...formData, facultyName: e.target.value })}
                  required
                >
                  {/* Add options for faculty list */}
                  <MenuItem value="faculty1">Faculty 1</MenuItem>
                  <MenuItem value="faculty2">Faculty 2</MenuItem>
                  {/* Add more faculty options as needed */}
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
                  label="No of Students"
                  variant="outlined"
                  fullWidth
                  //value={formData.emailId}
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
                    "&:hover": {
                      // Apply styles when hovering over the TextField
                      backgroundColor: "#EEEDED", // Change background color on hover
                    },
                  }}
                  label="Batch Id"
                  variant="outlined"
                  fullWidth
                  //value={formData.employeecode}
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
                    label="Start Date"
                    format="MM/DD/YYYY"
                    variant="outlined"
                    fullWidth
                    //value={formData.dob}
                    required
                    //defaultValue={dayjs('')}
                  />
                </LocalizationProvider>

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
                  label="Course Id"
                  variant="outlined"
                  fullWidth
                  //value={formData.mobileNumber}
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
                  label="Faculty Id"
                  variant="outlined"
                  fullWidth
                  //value={formData.emailId}
                  required
                />
             <Button
  sx={{
    height:45,
    backgroundColor: "#F5F5F5",
    color: "#105D50",
    borderColor: '#105D50',
    "&:hover": {
      backgroundColor: "#EEEDED",
      borderColor:"#105D50"
    },
   
  }}
  variant="outlined"
  fullWidth
  startIcon={<CloudUploadIcon />}
  component="label"
>
  Upload Student
  <input type="file" style={{ display: 'none' }} required />
</Button>

  
              </Stack>
            </Stack>

            <Grid item xs={10}>
              <div className="flex  justify-center space-x-8 pt-4 pb-4">
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

export default BatchForm;
