import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDoorOpen, faHouse, faUser} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";
import {LoginUserContext} from "../../App.tsx";
import {useContext} from "react";
import {CircularProgress, IconButton} from "@mui/material";
import {Link} from 'react-router-dom';
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts"

export default function TopNavBar() {
    const navigate = useNavigate();
    const loginUser = useContext(LoginUserContext);

    const handleHomeClick = () => {
        navigate('/');
    };

    const renderLoginContainer = () => {
        if (loginUser) {
            return (
                <>
                    <Typography variant="body1" sx={{color: 'white'}}>
                        {loginUser.email}
                    </Typography>
                    <IconButton onClick={() => {
                        FirebaseAuthService.handleSignOut();
                    }}>
                        <FontAwesomeIcon icon={faDoorOpen} style={{color: "#ffffff",}}/>
                    </IconButton>
                </>
            );
        } else if (loginUser === null) {
            return (
                <Link to="/">
                    <IconButton>
                        <FontAwesomeIcon icon={faUser} style={{color: '#ffffff'}}/>
                    </IconButton>
                </Link>
            );
        } else {
            return (
                <CircularProgress color="inherit" size={24}/>
            );
        }
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>

                    <FontAwesomeIcon icon={faHouse} onClick={handleHomeClick}/>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>

                    </Typography>
                    {renderLoginContainer()}
                </Toolbar>
            </AppBar>
        </Box>
    );
}