import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import LineGraph from '../Components/LineGraph';
import MapComponent from '../Components/MapComponent';

function ChartsPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full p-4 md:p-2">
      <Typography variant='h5' >COVID-19 Dashboard</Typography>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          className="mb-4"
        >
          <Tab label="Line Graph" />
          <Tab label="Map" />
        </Tabs>
        <Box sx={{ p: 3 }}>
          {value === 0 && (
            <div className="mb-6">
              <LineGraph />
            </div>
          )}
          {value === 1 && <MapComponent />}
        </Box>
      </Box>
    </div>
  );
}

export default ChartsPage;
