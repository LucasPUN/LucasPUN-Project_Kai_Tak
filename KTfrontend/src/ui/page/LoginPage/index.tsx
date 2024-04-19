import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import video from './dummy_video.mp4';
import {useNavigate} from "react-router-dom";
import logo from '../LoginPage/Venturenix_2024.png'
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useContext, useEffect, useState} from "react";
import {LoginUserContext} from "../../../App.tsx";
import {GoogleLoginButton} from "react-social-login-buttons";



function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Venturenix
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const loginUser = useContext(LoginUserContext);
    const [isLoginFail,setIsLoginFail] = useState<boolean>(false)


    const handleSignUpClick = () => {
        navigate('/signup');
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email,password)
        const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email, password);
        if (loginResult) {
            alert("login Success");
        } else {
            setIsLoginFail(true);
        }
    };

    useEffect(() => {
        if (loginUser) {
            navigate("/gen")
        }
    }, [loginUser])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        // backgroundImage: `url(${logo})`,
                        // backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                    }}
                >
                    <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                        <source src={video} type="video/mp4" /> {/* Replace YOUR_VIDEO_URL with the actual URL of your MP4 video */}
                    </video>
                </Grid>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ textAlign: 'center', fontWeight: 'bold', marginTop: 1, color: 'primary.main' }}>
                            啟德AI 繪畫- 我夢中的啟德
                        </Typography>

                        <img src={logo} alt="Your Image" style={{ width: '560px', height: '120px', marginBottom: '30px' }} />


                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleEmailChange}
                                value={email}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                            <GoogleLoginButton onClick={() => {
                                FirebaseAuthService.handleSignInWithGoogle()
                            }}/>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <a href="#" onClick={handleSignUpClick}>
                                        {"Don't have an account? Sign Up"}
                                    </a>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}