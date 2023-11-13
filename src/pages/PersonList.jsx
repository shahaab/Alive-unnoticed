// import React, { useState } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Pagination,
//   Slider,
//   IconButton,
//   InputAdornment,
//   Select,
//   MenuItem,
//   TextField,
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';

// const pageSize = 2; // Adjust the number of items per page

// const PersonBox = ({ Name, Age, Gender }) => (
//   <Box m={2}>
//     <Card>
//       <CardContent>
//         <Typography variant="h6">{Name}</Typography>
//         <Typography variant="body2" color="textSecondary">
//           Age: {Age}, Gender: {Gender}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Box>
// );

// const PersonList = ({ data }) => {
//   const [page, setPage] = useState(1);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [ageRange, setAgeRange] = useState([0, 100]);
//   const [selectedGender, setSelectedGender] = useState('All');

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleClearSearch = () => {
//     setSearchTerm('');
//   };

//   const filterData = () => {
//     return data.filter(
//       (person) =>
//         person.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         person.Age >= ageRange[0] &&
//         person.Age <= ageRange[1] &&
//         (selectedGender === 'All' || person.Gender === selectedGender)
//     );
//   };

//   const startIndex = (page - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const paginatedData = filterData().slice(startIndex, endIndex);

//   return (
//     <Box>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Box width="60%">
//           <Slider
//             value={ageRange}
//             onChange={(event, newValue) => setAgeRange(newValue)}
//             valueLabelDisplay="auto"
//             valueLabelFormat={(value) => `${value} years`}
//             max={100}
//           />
//         </Box>
//         <Box width="20%">
//           <Select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             fullWidth
//             variant="outlined"
//             margin="normal"
//           >
//             <MenuItem value="All">All</MenuItem>
//             <MenuItem value="male">Male</MenuItem>
//             <MenuItem value="female">Female</MenuItem>
//           </Select>
//         </Box>
//         <Box width="20%">
//           <TextField
//             label="Search by Name"
//             variant="outlined"
//             fullWidth
//             margin="normal"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   {searchTerm && (
//                     <IconButton
//                       edge="end"
//                       onClick={handleClearSearch}
//                       size="large"
//                     >
//                       <ClearIcon />
//                     </IconButton>
//                   )}
//                   <IconButton edge="end" disabled size="large">
//                     <SearchIcon />
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </Box>
//       </Box>
//       <Box display="flex" flexDirection="row" flexWrap="wrap">
//         {paginatedData.map((person, index) => (
//           <PersonBox key={index} {...person} />
//         ))}
//       </Box>
//       <Box mt={3} display="flex" justifyContent="center">
//         <Pagination
//           count={Math.ceil(filterData().length / pageSize)}
//           page={page}
//           onChange={handleChangePage}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default PersonList;