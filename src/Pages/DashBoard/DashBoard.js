import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import Button from '@restart/ui/esm/Button';
import AddProduct from './AddProduct/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import MAnageAllOrder from './ManageAllOrder/MAnageAllOrder';
import MyOrders from './MyOrders/MyOrders';
import Review from './Review/Review';
import PayNow from './PayNow/PayNow';
import useAuth from '../../Hooks/useAuth';


const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const { logOut,user } = useAuth()
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='container text-center'>
            <Toolbar />
            <h1 className='text-warning'>Carzoo</h1>
            <Divider />
            {user?.email && <span
                className='mx-3 my-3'
                style={{ color: 'Dark' }}
            >  Hello  {user.displayName}</span>}
            <Box>
                <Link to={`${url}/addProduct`}>
                    <h5>Add Product</h5>
                </Link>
                <Link to={`${url}/manageProduct`}>
                    <h5>Manage Product</h5>
                </Link>
                <Link to={`${url}/manageAllOrder`}>
                    <h5>Manage All Order</h5>
                </Link>
                <Link to={`${url}/makeAdmin`}>
                    <h5> Make Admin</h5>
                </Link>
            </Box>
            <Link to={`${url}/myOrders`}>
                <h5>My Orders</h5>
            </Link>
            <Link to={`${url}/review`}>
                <h5>Review</h5>
            </Link>
            <Link to={`${url}/payNow`}>
                <h5>PAy Now</h5>
            </Link>
            <button onClick={logOut} className='btn btn-danger m-2' color='inherit'>Log out</button>
            <Link to='/'> <br />
                <button className='btn btn-warning m-2' color='inherit'>Home</button>
            </Link>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                    <Route path={`${path}/manageAllOrder`}>
                        <MAnageAllOrder></MAnageAllOrder>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payNow`}>
                        <PayNow></PayNow>
                    </Route>
                    <Route path={`${path}/`}>
                        <PayNow></PayNow>
                    </Route>

                </Switch>
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
