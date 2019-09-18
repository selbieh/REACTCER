import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import {styles} from './styles';
import Box from '@material-ui/core/Box/Box';
import { red } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import axiso from 'axios';
import Link from '@material-ui/core/Link';






class AddNewClient extends Component {
    state = { 
        value:{
            First_Name:'',
            Last_Name:'',
            Email:'',
            Company:'',
            Phone:'',
            Balance:'',
            Authorization_Forms:'Unchecked',
            Reseller:'Unchecked',
            Client_may_have_Private:'Unchecked'
        },
        backEndError:{},
        loading:false


           
       
      
     }


     valueInputHandler=(e,name)=>{
        const cloneState={
          ...this.state,
         }
         const clonedValue={...cloneState.value}
         clonedValue[name]=e.target.value
       this.setState({
         value:clonedValue
       })
      }      
      submitHandler=(event)=>{

        event.preventDefault();
        this.setState({loading:true,backEndError:{}})
        const data={...this.state.value}
        axiso.post('http://127.0.0.1:8000/Clients/',data)
        .then(res=>{
            console.log(res)
        })
        .catch(er=>{
            console.log(er.response.data)
            if(er.response.data){
                this.setState({backEndError:er.response.data,loading:false})
            }
        })

          
      }


     
    render() {
        const {classes}=this.props

        let form=<Container component="main" maxWidth="xs">

                        <CssBaseline />
                        <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            creat new client
                        </Typography>
                    
                        <form className={classes.form} onSubmit={this.submitHandler}>
                            <Grid container spacing={2}>
                            <Grid item xs={12} >
                    
                                <TextField
                                autoComplete="fname"
                                name="First_Name"
                                variant="outlined"
                                required
                                fullWidth
                                id="First_Name"
                                label="First_Name"
                                autoFocus
                                onChange={(e)=>this.valueInputHandler(e,'First_Name')}

                                />
                                <Box color={red}>
                                    {this.state.backEndError.First_Name}
                                </Box>
                            </Grid>

                            <Grid item xs={12} >
                            <TextField
                                autoComplete="fname"
                                name="Last_Name"
                                variant="outlined"
                                required
                                fullWidth
                                id="Last_Name"
                                label="Last_Name"
                                autoFocus
                                onChange={(e)=>this.valueInputHandler(e,'Last_Name')}

                                />
                                <Box color={red}>
                                    {this.state.backEndError.Last_Name}
                                </Box>
                                </Grid>

                            
                            
                            <Grid item xs={12}>
                                <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="Email"
                                label="Email"
                                name="Email"
                                autoComplete="Email"
                                onChange={(e)=>this.valueInputHandler(e,'Email')}

                                />
                                <Box color={red}>
                                    {this.state.backEndError.Email}
                                </Box>
                            </Grid>


                            
                            <Grid item xs={12} >
                            <TextField
                                autoComplete="fname"
                                name="Company"
                                variant="outlined"
                                required
                                fullWidth
                                id="Company"
                                label="Company"
                                autoFocus
                                onChange={(e)=>this.valueInputHandler(e,'Company')}

                                />
                                <Box color={red}>
                                    {this.state.backEndError.Company}
                                </Box>
                                </Grid>
                                <Grid item xs={12} >

                                <TextField
                                autoComplete="fname"
                                name="Phone"
                                variant="outlined"
                                required
                                fullWidth
                                id="Phone"
                                label="Phone"
                                autoFocus
                                onChange={(e)=>this.valueInputHandler(e,'Phone')}

                                />
                                <Box color={red}>
                                    {this.state.backEndError.Phone}
                                </Box>
                                </Grid>
                                <Grid item xs={12} >
                                <TextField
                                autoComplete="fname"
                                name="Balance"
                                variant="outlined"
                                required
                                fullWidth
                                id="Balance"
                                label="Balance"
                                autoFocus
                                onChange={(e)=>this.valueInputHandler(e,'Balance')}

                                />
                                <Box color={red}>
                                    {this.state.backEndError.Balance}
                                </Box>
                                </Grid>
                                <Grid item xs={12} >

                                <InputLabel htmlFor="age-native-simple" >Reseller</InputLabel>

                                    <Select
                                        native
                                        value={this.state.value.Reseller}
                                        onChange={(e)=>this.valueInputHandler(e,'Reseller')}
                                        inputProps={{
                                            name: 'Reseller',
                                            id: 'Reseller',
                                        }}
                                    >
                                    <option value={"Checked"}>Checked</option>
                                    <option value={"Unchecked"}>Unchecked</option>
                                    </Select>

                                    </Grid>


                                    <Grid item xs={12} >

                                    <InputLabel htmlFor="age-native-simple" >Authorization_Forms</InputLabel>

                                        <Select
                                            native
                                            value={this.state.value.Authorization_Forms}
                                            onChange={(e)=>this.valueInputHandler(e,'Authorization_Forms')}
                                            inputProps={{
                                                name: 'Authorization_Forms',
                                                id: 'Authorization_Forms',
                                            }}
                                        >
                                        <option value={"Checked"}>Checked</option>
                                        <option value={"Unchecked"}>Unchecked</option>
                                        </Select>

                                        </Grid>
                                        <Grid item xs={12} >

                                        <InputLabel htmlFor="age-native-simple" >Client_may_have_Private</InputLabel>

                                            <Select
                                                native
                                                value={this.state.value.Client_may_have_Private}
                                                onChange={(e)=>this.valueInputHandler(e,'Client_may_have_Private')}
                                                inputProps={{
                                                    name: 'Client_may_have_Private',
                                                    id: 'Client_may_have_Private',
                                                }}
                                            >
                                            <option value={"Checked"}>Checked</option>
                                            <option value={"Unchecked"}>Unchecked</option>
                                            </Select>

                                            </Grid>

                            
                            </Grid>
                        

                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            >  
                            creat
                            </Button>
                        
                        </form>
                        </div>
                        
                    </Container>
        if ( this.state.loading && Object.keys(this.state.backEndError).length <1){
            form=<Typography>
                client created sucssefuly ....!!
                <Link
                        component="button"
                        variant="body2"
                        onClick={() => {
                            this.props.history.push('/')
                        }}
                        color='textSecondary'
                        >
                        ACTIVE CLIENTS
                      </Link>
            </Typography>
        }
        return (
            <React.Fragment>
            {form}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(AddNewClient);