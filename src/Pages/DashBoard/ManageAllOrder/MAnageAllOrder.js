import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const MAnageAllOrder = () => {
    const [orders, setOrders] = useState([])
    const [approved, setApproved] = useState(false)

    //data fetched from server
    useEffect(() => {
        fetch('https://stark-plains-85592.herokuapp.com/allBuying')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [approved])

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
                        const remaining = orders.filter(orders => orders._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }
    const update = {
        status: 'Approved'
    }
    const handleUpdate = (id) => {
        fetch(`https://stark-plains-85592.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('approved successfully')
                    setApproved(!approved)
                }
            })
    }
    return (
        <div>
            <h1>Manage all orders</h1>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Appointment table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Status</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                    <TableCell align="right">Update</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row, index) => (
                                    <TableRow
                                        key={row.index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.address}</TableCell>
                                        <TableCell align="right">{row.status}</TableCell>
                                        <TableCell align="right"><button
                                            onClick={() => handleDelete(row._id)}
                                            className="btn bg-danger text-white ">
                                            Delete Booking
                                        </button></TableCell>
                                        <TableCell> <button
                                            onClick={() => handleUpdate(row?._id)}
                                            className="btn bg-warning text-white"
                                        >
                                            Update
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

export default MAnageAllOrder;