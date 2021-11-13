import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const [myOrder, setMyOrder] = useState([])

    //data fetched from server
    useEffect(() => {
        fetch(`https://stark-plains-85592.herokuapp.com/myBuying/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user.email])

    //delete function implemented
    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure?')
        if (confirm) {
            fetch(`https://stark-plains-85592.herokuapp.com/deleteBuyNow/${id}`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted')
                        const remaining = myOrder.filter(myOrder => myOrder._id !== id)
                        setMyOrder(remaining)
                    }
                })
        }
    }

    return (
        <div >
            <h1 className='text-center '>My Orders</h1>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Appointment table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myOrder.map((row, index) => (
                                    <TableRow
                                        key={row.index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right"><button
                                            onClick={() => handleDelete(row._id)}
                                            className="btn bg-danger text-white ">
                                            Delete Booking
                                        </button></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default MyOrders;