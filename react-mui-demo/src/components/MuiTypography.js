import React from 'react';
import { Typography } from '@mui/material'

const MuiTypography = () => {
    return (
        <>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4" gutterBottom>h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            <Typography variant='subtitle1'>Subt Title 1</Typography>
            <Typography variant='subtitle2'>Subt Title 2</Typography>

            <Typography variant='body1'>
                It is a long established fact that a reader will be distracted by the readable 
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English.
            </Typography>
            <Typography variant='body2'>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                that it has a more-or-less normal distribution of letters, as opposed to using 
                'Content here, content here', making it look like readable English.
            </Typography>
        </>
    )
}

export default MuiTypography