import { useState } from "react";
import {
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useMediaQuery,
} from "@mui/material";
import {
    Search,
    Language
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetweenBox";

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const navigate = useNavigate();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    let fullName = "John Smith";

    return (
        <FlexBetween padding="1rem 6%" sx={{ borderBottom: 1, borderBottomColor: '#D3D3D3' }}>
            <FlexBetween gap="1.75rem">
                <Typography
                    fontWeight="bold"
                    fontSize="clamp(1rem, 2rem, 2.25rem)"
                    color="#ff385c"
                    onClick={() => navigate("/home")}
                >
                    Airbnb Clone
                </Typography>
                <FlexBetween
                    backgroundColor={'#D3D3D3'}
                    borderRadius="9px"
                    gap="3rem"
                    padding="0.1rem 1.5rem"
                >
                    <InputBase placeholder="Search..." />
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            <FlexBetween gap="1rem">
                <Typography>{'Airbnb your home'}</Typography>
                <Language sx={{ fontSize: "25px" }} />
                <FormControl variant="standard" value={fullName}>
                    <Select
                        value={fullName}
                        sx={{
                            backgroundColor: '#D3D3D3',
                            width: "150px",
                            borderRadius: "0.25rem",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                                pr: "0.25rem",
                                width: "3rem",
                            },
                            "& .MuiSelect-select:focus": {
                                backgroundColor: '#D3D3D3',
                            },
                        }}
                        input={<InputBase />}
                    >
                        <MenuItem value={fullName}>
                            <Typography>{fullName}</Typography>
                        </MenuItem>
                        <MenuItem >Log Out</MenuItem>
                    </Select>
                </FormControl>
            </FlexBetween>

        </FlexBetween >
    );
};

export default Navbar;