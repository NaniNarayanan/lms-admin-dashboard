// import React from "react";
import * as React from 'react';
import Sidebar from "../components/Sidebar";
import KeyboardDoubleArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../../src/pages/adminprofile.css";
import ProfileCard from './adminprofile/ProfileCard';
import { Link } from 'react-router-dom';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
};

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };

const AdminProfile = () =>{

    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    return(
    <div className="adminprofile">
        <Sidebar/>
        <div style={{display:"flex", gap:"10px", position:"absolute", marginLeft:"10px"}}>
            <Link style={{fontSize:"14px", textDecoration:"none"}} to="/home">Home<KeyboardDoubleArrowRightIcon/></Link>
            <Link style={{fontSize:"14px", textDecoration:"none"}} to="/home/adminprofile">Admin Profile</Link>
        </div>
        <div className="adminprofileTab">
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Personal Information" {...a11yProps(1)} />
                    <Tab label="Security Setting" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}><ProfileCard/></TabPanel>
            <TabPanel value={value} index={1}>Item Two</TabPanel>
            <TabPanel value={value} index={2}>Item Three</TabPanel>
        </Box>
        </div>
    </div>
    );
};

export default AdminProfile;