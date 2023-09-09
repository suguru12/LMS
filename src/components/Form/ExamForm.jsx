import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, Stack } from "@mui/material";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import dayjs from "dayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const ExamForm = () => {
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
              alignItems="center"
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
                  label="Course Name"
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
                  }}
                  label="Batch Name"
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
                  label="Exam Name"
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
                  label="Assign Faculty"
                  variant="outlined"
                  fullWidth
                  //value={formData.designation}
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
                        width:280
                      },
                      "&:hover": {
                        // Apply styles when hovering over the TextField
                        backgroundColor: "#EEEDED", // Change background color on hover
                      },
                    }}
                    label="Date Of Examination"
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
                  label="Pass Marks"
                  variant="outlined"
                  fullWidth
                  //value={formData.qualification}
                  required
                />

                    
                  
              </Stack>
             {/* 2nd column///////////////////////////////////////////////////////////////////////////////////////////////////// */}

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
                  label="Course ID"
                  variant="outlined"
                  fullWidth
                  //value={formData.emailId}
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
                  label="Batch ID"
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
                  label="Exam ID"
                  variant="outlined"
                  fullWidth
                  //value={formData.bloodGroup}
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
                  label="Duration"
                  variant="outlined"
                  fullWidth
                  //value={formData.bloodGroup}
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
                  label="Total Marks"
                  variant="outlined"
                  fullWidth
                  //value={formData.yoj}
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
                  label="Exam Link"
                  variant="outlined"
                  fullWidth
                  //value={formData.description}
                  required
                />
              </Stack>
              </Stack>
              <Stack
              direction="column"
                
                
                width={"280px"}
                spacing={2}>
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
                    File upload
                    <input type="file" style={{ display: 'none' }} required />
                    </Button>
                 

              </Stack>
           
            <Grid item xs={10}>
              <div className="flex  justify-center pt-4 pb-4  space-x-8">
                <button
                  type="submit"
                  className="w-28 text-[12px] font-normal h-10 px-4 py-2  bg-teal-700 text-white rounded-lg hover:bg-custom-orange hover:text-green"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-28 text-[12px] font-normal h-10 px-4 py-2   bg-teal-700 text-white rounded-lg hover:bg-custom-orange hover:text-green"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleSubmit();
                  }}
                  className="w-34 text-[12px] font-normal h-10 px-4 py-2   bg-teal-700 text-white rounded-lg hover:bg-custom-orange hover:text-green"
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

export default ExamForm;