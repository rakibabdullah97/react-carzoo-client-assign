import { Grid, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProduct = () => {
    const [products, setProducts] = useState([])


    //data fetched from server
    useEffect(() => {
        fetch('https://stark-plains-85592.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = (id) => {
        const confirm = window.confirm('Are You Sure?')
        if (confirm) {
            fetch(`https://stark-plains-85592.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: { "content-type": "application/json" }
            })
                .then((res) => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted')
                        const remaining = products.filter(orders => orders._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div>
            <h1>manage product</h1>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Appointment table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Index</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Info</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((row, index) => (
                                    <TableRow
                                        key={row.index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">{index}</TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.info}</TableCell>
                                        <TableCell align="right"><button
                                            onClick={() => handleDelete(row._id)}
                                            className="btn bg-danger text-white ">
                                            Delete Product
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

export default ManageProduct;