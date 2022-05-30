import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];








function TabPanel(props) {
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
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#2A2027' : '#3A3B3C',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.error,
  }));


const Mix = () => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#6C6D6E',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const Itemz = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#6C6D6E',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
        <div style={{background:"silver",textAlign:"center"}}><h1>pagination</h1></div>
      <Stack spacing={5}>
      <Pagination count={10} color="error"/>
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>

    <div style={{background:"silver",textAlign:"center"}}><h1>Basic tabs</h1></div>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  textColor="secondary"
  indicatorColor="secondary">
          <Tab label="Item Oneaaaaaaaaaaaaaaaaaaaaaa" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item Oneaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>


    <div style={{background:"silver",textAlign:"center"}}><h1>Grid</h1></div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item lg={6} xl={12} >
          <div style={{background:"#98AFC7",textAlign:"center",padding:"5px"}}>xs=8</div>
        </Grid>
        <Grid item xs={4}>
          <div style={{background:"#98AFC7",textAlign:"center",padding:"5px"}}>xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div style={{background:"#98AFC7",textAlign:"center",padding:"5px"}}>xs=4</div>
        </Grid>
        <Grid item xs={8}>
          <div style={{background:"#98AFC7",textAlign:"center",padding:"5px"}}>xs=8</div>
        </Grid>
      </Grid>
    </Box>

    <div style={{background:"silver",textAlign:"center"}}><h1>Grid with multiple breakpoint</h1></div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xl={8} lg={6} md={4} sm={12} xs={6}>
          <Item>xs=6 md=8</Item>
        </Grid>
        {/* <Grid item xs={4} lg={6} md={6} sm={12} xs={6}>
          <Item>xs=6 md=4</Item>
        </Grid> */}
        {/* <Grid item xs={6} md={4} sm={12}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8} sm={12}>
          <Item>xs=6 md=8</Item>
        </Grid> */}  
      </Grid>
    </Box>

    <div style={{background:"silver",textAlign:"center"}}><h1>Auto-layou</h1></div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>

    <div style={{background:"silver",textAlign:"center"}}><h1>Variable width content</h1></div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
          <Itemz>variable width content</Itemz>
        </Grid>
        <Grid item xs={6}>
          <Itemz>xs=6</Itemz>
        </Grid>
        <Grid item xs>
          <Itemz>xs</Itemz>
        </Grid>
      </Grid>
    </Box>

    <div style={{background:"silver",textAlign:"center"}}><h1>Standard image list</h1></div>


    <ImageList sx={{ width: 1000, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>



    </div>
  )
}

export default Mix
