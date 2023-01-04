import React, { useState } from 'react';
import {
    IconButton,
    InputBase,
    Typography,
    Box,
    MenuItem,
    Tooltip,
    Menu,
    Grid
} from "@mui/material";
import {
    Search,
    Language,
    AccountCircle,
    Menu as MenuIcon
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetweenBox";

const ListingCard = ({ location, lake, date, price, image }) => {


    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div>
                <div style={{
                    background: `url(${image}) 50% 50% no-repeat`, /* 50% 50% centers image in div */
                    width: '250px',
                    height: '250px',
                    borderRadius: '25px'
                }}>
                </div>
                <Typography
                    fontWeight="bold"
                >
                    {location}
                </Typography>
                <Typography
                >
                    {lake}
                </Typography>
                <Typography
                >
                    {date}
                </Typography>
                <Typography
                    fontWeight="bold"
                >
                    {`${price} night`}
                </Typography>
            </div>
        </div>
    );
};

export default ListingCard;