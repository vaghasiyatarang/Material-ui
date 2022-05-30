import React from 'react'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Grid } from '@mui/material';
import { Container } from '@mui/material';


const Home_card_dark = () => {


    return (
        <>

            <Container fixed>
                <Grid item>
                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", fontSize: 32, mt: 15 }}>
                        DARK VERSIONS
                    </Typography>
                </Grid>
            </Container>

            <Container fixed>
                <Grid item>
                    <Typography gutterBottom variant="h5" component="p" sx={{ textAlign: "center", fontSize: 16, m: 5 ,color:"silver"}}>
                    Velzon has 7 different types of demos with multiple layouts and modes which simply managed with attributes only. Also supported RTL and LRT modes.
                    </Typography>
                </Grid>
            </Container>


            <Grid container sx={{ justifyContent: "center" }} spacing={{ xs: 10, sm: 5, xl: 7, lg: 5, md: 5 }} p={{xs:10}}>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0tMCRzmU3d_ig2RXn7hyOuunrx2QYUD2OwkvOWSEsk3yolAQ5JVaj995aWB1_xgRDOqU&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            DEFAULT DARK
                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://marketplace.whmcs.com/product/5466/images/screenshots/16413-0348578894a3d96b9ae0c8a780822056.png"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            SAAS
                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-q5QJwOfqYMxuEQ3lnC1bdr4N5Oe0u_bucOXVcrmbHGlciI988135XzNU1I6ur-na8g&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            MATERIAL
                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQUt9ZSqaEE5b4c03D_TdiwWXKVUVxav-0NoIKNDDFF2GV_lEVdz2BXpis9kcZwAeHs8E&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            MINIMAL

                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDHtdicjpJFwHwsi7NRa8rRKE5d6XNX9TYJcC11Et_OLuhl_LLsJm6gb1LfpoV2NhgZ8&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            CREATIVE
                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-QuL-vN-6PT68MtRN3Xce7c2fot4HvulOQ&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            MODERN
                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOMvEKG9r7BW3F5AZM3RxKxyDpzZSJnUaoQ&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            INTERACTIVE
                        </Typography>
                    </Card>
                </Grid>
                <Grid item lg={3} md={3.5} sm={6} xs={12}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTGP9rOkvWBc59Oa5g1k3ZhsOlpwIo2M1zRw&usqp=CAU"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                            LANDING PAGE
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Home_card_dark;
