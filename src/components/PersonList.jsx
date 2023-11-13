// PersonList.js
import React, { useState } from 'react';
import {
  Box,
  Pagination,
  Slider,
  IconButton,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import PersonBox from './PersonBox';

const pageSize = 21; // Adjust the number of items per page

const PersonList = ({ data }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [ageRange, setAgeRange] = useState([0, 100]);
  const [selectedGender, setSelectedGender] = useState('All');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const filterData = () => {
    return data.filter(
      (person) =>
        person.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        person.Age >= ageRange[0] &&
        person.Age <= ageRange[1] &&
        (selectedGender === 'All' || person.Gender === selectedGender)
    );
  };

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filterData().slice(startIndex, endIndex);

  return (
    <Box>
      <Box m={2} display="flex" justifyContent="space-between" alignItems="center">
      <Box sx={{display:"flex", justifyContent:"center", width:"100%"}} alignItems="center" >
      <Box m={2} width="30%">
          <TextField
            label="Search by Name"
            variant="outlined"
            fullWidth
            // margin="normal"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {searchTerm && (
                    <IconButton
                      edge="end"
                      onClick={handleClearSearch}
                      size="large"
                    >
                      <ClearIcon />
                    </IconButton>
                  )}
                  <IconButton edge="end" disabled size="large">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box m={2} width="20%">
          <Select
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            fullWidth
            variant="outlined"
            margin="normal"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </Box>
        <Box m={2} ml={4} width="20%">
        <Typography id="input-slider" gutterBottom textAlign={"center"}>
        Age
      </Typography>
          <Slider
            value={ageRange}
            onChange={(event, newValue) => setAgeRange(newValue)}
            valueLabelDisplay="on"
            valueLabelFormat={(value) => `${value} years`}
            max={100}
          />
        </Box>
      </Box>
      </Box>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent= "center">
        {paginatedData.map((person, index) => (
          <PersonBox key={index} {...person} />
        ))}
      </Box>
      <Box m={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(filterData().length / pageSize)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
  );
};

export default PersonList;
