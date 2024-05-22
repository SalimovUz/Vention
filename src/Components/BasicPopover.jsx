// import React from 'react'
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GoGlobe } from "react-icons/go";


export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="" onClick={handleClick}>
        <GoGlobe className="w-6 h-6" />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography className="cursor-pointer hover:text-pink-700 transition-all duration-500" sx={{ p: 1 }}>US & Worldwide</Typography>
        <Typography className="cursor-pointer hover:text-pink-700 transition-all duration-500" sx={{ p: 1 }}>UK</Typography>
        <Typography className="cursor-pointer hover:text-pink-700 transition-all duration-500" sx={{ p: 1 }}>DUCH</Typography>
      </Popover>
    </div>
  );
}
