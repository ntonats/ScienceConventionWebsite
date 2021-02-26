import React, {useEffect, useState} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MessageIcon from "@material-ui/icons/Message";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import SEO from "../components/utility/SEO";
import {Checkbox, FormControlLabel, Radio, RadioGroup} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down('sm')]: {
      margin: 0,
      padding: 16
    },
  },
  avatar: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Form = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: '',
    newsletter: false
  })

  useEffect(() => {
    if ((formState.password && formState.confirmPassword) && (formState.password === formState.confirmPassword)) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }, [formState])

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    console.log('formState', formState)
    e.preventDefault()
    // fetch("/", {
    //   method: "POST",
    //   headers: {"Content-Type": "application/x-www-form-urlencoded"},
    //   body: encode({"form-name": "contact", ...formState})
    // })
    //   .then(() => {
    //     setFormState({
    //       name: '',
    //       surname: '',
    //       email: '',
    //       phone: '',
    //       username: '',
    //       password: '',
    //       confirmPassword: '',
    //       gender: '',
    //       newsletter: false
    //     })
    //   })
    //   .catch(() => alert('Κάτι πήγε λάθος. Παρακαλώ δοκιμάστε ξανά.'));
    // e.preventDefault()
  }

  const handlePasswordError = () => {
    if (formState.password === '' || formState.confirmPassword === '') {
      return ''
    }
    if (formState.password !== formState.confirmPassword) {
      return 'Passwords have to match!'
    }
  }

  const handleDisabled = () => {
    return !(formState.name && formState.surname && formState.email && formState.phone && formState.username && formState.password && formState.confirmPassword && formState.gender);
  }

  return (
    <>
      <Grid container component="main" className={classes.root}>
        <Grid item container justify={'center'} alignItems={"center"} md={5} component={Paper} elevation={0} square>
          <Box className={classes.paper}>
            <Box display={'flex'} alignItems={'center'}>
              <Avatar className={classes.avatar}>
                <MessageIcon/>
              </Avatar>
              <Typography variant="h5">
                Φόρμα εγγραφής
              </Typography>
            </Box>
            <form onSubmit={handleSubmit} className={classes.form} name="contact" data-netlify="true"
                  data-netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="contact"/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Όνομα"
                name="name"
                autoComplete="name"
                type="text"
                onChange={handleChange}
                value={formState.name}/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="surname"
                label="Επώνυμο"
                name="surname"
                autoComplete="cc-family-name"
                type="text"
                onChange={handleChange}
                value={formState.surname}/>
              <RadioGroup name="gender" value={formState.gender} onChange={handleChange}
                          style={{display: 'flex', flexDirection: 'row'}}>
                <FormControlLabel value="female" control={<Radio/>} label="Female" style={{width: 'fit-content'}}/>
                <FormControlLabel value="male" control={<Radio/>} label="Male" style={{width: 'fit-content'}}/>
              </RadioGroup>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleChange}
                value={formState.email}/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Τηλέφωνο"
                type="number"
                id="phone"
                autoComplete='tel'
                onChange={handleChange}
                value={formState.phone}/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="username"
                label="Username"
                id="username"
                onChange={handleChange}
                value={formState.username}/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                type='password'
                onChange={handleChange}
                value={formState.password}/>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                id="confirmPassword"
                type='password'
                onChange={handleChange}
                value={formState.confirmPassword}/>
              <Typography>{handlePasswordError()}</Typography>
              <Box display='flex' alignItems='center'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formState.newsletter}
                      onChange={() => setFormState({
                        ...formState,
                        newsletter: !formState.newsletter
                      })}
                      name="newsletter"
                    />
                  }
                  label="Συμφωνείτε να λαμβάνετε ενημερωτικό email"
                />
              </Box>
              <Box display={'flex'} width='100%' justifyContent={'center'}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={handleDisabled()}
                  className={classes.submit}>
                  Εγγραφή
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Form
