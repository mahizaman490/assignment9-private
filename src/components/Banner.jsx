import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';

const Banner = () => {
  return (
    <div className="relative md:h-[600px] lg:h-[800px]">
      <img
        className="w-full h-full"
        src="https://i.ibb.co/HNVgLZR/shine-wedding-altar-newlyweds-stands-backyard-decorated-with-balloons.jpg"
        alt=""
      />
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center vertically
          padding: '1rem',
        }}
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="text-3xl md:text-6xl lg:text-7xl font-semibold text-yellow-500 mb-8 text-center"
        >
          <span className="text-rose-600">We Create You </span>
          <br />
          celebrate !!
        </h1>
        <TextField label="Search here" color="secondary" focused />
        <br />
        <Button className='' variant="contained" color="primary" startIcon={<SendIcon />}>
          Let's start
        </Button>
      </div>
    </div>
  );
};

export default Banner;
