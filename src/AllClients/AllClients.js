import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {styles} from './useStyle';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import { TablePagination } from '@material-ui/core';




class AllClients extends Component {
    state = { 
        clients:[]
     }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/Clients/')
        .then(res=>{
            this.setState({clients:res.data.results})
        })
    }
    changePage=()=>{
        console.log('page changed')
    }
    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>

            <Paper className={classes.paper3}>
                            <Typography align='left'style={{marginTop:'25px'}} color='initial'>       
                                    Client MANAGER
                            </Typography>
                          </Paper>



              <Paper className={classes.paper1}>
                <Typography align='left'>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            this.props.history.push('/add-client')
                        }}
                        color='primary'
                        >
                        ADD new Client
                      </Link>
                </Typography>
              </Paper>
                
              <Paper className={classes.paper2}>
                <Typography align='left' style={{marginTop:'15px'}}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            this.props.history.push('/')
                        }}
                        >
                        ACTIVE CLIENTS
                      </Link>
                     
                </Typography>
              </Paper>



                <Typography align='left' color='primary' style={{marginTop:'45px',marginLeft:'25px'}}>
                  
                  Clients  {this.state.clients.length} - {this.state.clients.length} of {this.state.clients.length}
                  <br/>

                  
              </Typography>
              

                 
              

            
          <div className={classes.root}>


            <Paper className={classes.paper}>
            

            <Table className={classes.table} size="small" root={'MuiTableHead-root'}>
            
              

              <TableHead  >
             <TableRow>
             <TablePagination 
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={this.state.clients.length}
                  count={15}
                  rowsPerPage={this.state.clients.length}
                  page={0}
                  onChangePage={this.changePage}
              />
             </TableRow>
              
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">LAST NAME</TableCell>
                  <TableCell align="right">FIRST NAME</TableCell>
                  <TableCell align="right">COMPANY</TableCell>
                  <TableCell align="right">PHONE</TableCell>
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">Authorization_Forms</TableCell>
                  <TableCell align="right">Reseller</TableCell>
                  <TableCell align="right">Client_may_have_Private</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.clients.map(element => (
                  <TableRow key={element.id}>
                    <TableCell component="th" scope="row">
                      {element.id}
                    </TableCell>
                    <TableCell padding="checkbox">
                      <Checkbox                
                        inputProps={{ 'aria-label': 'select all desserts' }}
                      />
                    </TableCell>
                    <TableCell align="right">{element.Last_Name}</TableCell>
                    <TableCell align="right">{element.First_Name}</TableCell>
                    <TableCell align="right">{element.Company}</TableCell>
                    <TableCell align="right">{element.Phone}</TableCell>
                    <TableCell align="right">{element.Email}</TableCell>
                    <TableCell align="right">{element.Authorization_Forms}</TableCell>
                    <TableCell align="right">{element.Reseller}</TableCell>
                    <TableCell align="right">{element.Client_may_have_Private}</TableCell>

                  </TableRow>
                ))}
              </TableBody>
             
            </Table>
          </Paper>
          </div>
         
          </React.Fragment>
        );
    }
}

export default withStyles(styles)(AllClients);