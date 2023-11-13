// PersonBox.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PersonBox = ({ Name, Age, Gender }) => (
  <Box m={2} sx={{width:"30%"}}>
    <Card>
      <CardContent>
        <Typography variant="h6">{Name}</Typography>
        <Typography variant="body2" color="textSecondary">
          Age: {Age}, Gender: {Gender}
        </Typography>
      </CardContent>
    </Card>
  </Box>
);

export default PersonBox;
