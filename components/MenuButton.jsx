import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import { RiMenuFill } from "react-icons/ri";

export default function MenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="rounded-xl bg-white mr-5 text-black  transition duration-200 ease-in-out hover:bg-gray-100 dark:bg-black/20 dark:hover:bg-[#222222] dark:text-white"
      >
        <RiMenuFill className="h-5 w-5" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu "
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href="/#about">
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
        <Link href="/#skills">
          <MenuItem onClick={handleClose}>Tech Stack</MenuItem>
        </Link>
        <Link href="/#projects">
          <MenuItem onClick={handleClose}>Projects</MenuItem>
        </Link>
        <Link href="/resume">
          <MenuItem onClick={handleClose}>Resume</MenuItem>
        </Link>
        <Link href="/#contact">
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
