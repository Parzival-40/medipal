import {makeStyles} from "@mui/styles";
import Image from 'mui-image'
import Box from "@mui/material/Box";
import styles from "../styles/Home.module.css";
import {Container, Grid, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const useStyles = makeStyles(() => ({
    appBar: {
        backgroundColor: "#fff"
    },
    hero: {
        /*backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,*/
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",

    },
    my: {
        padding: '10px',
        height: "600px",
        /* border: "5px outset red",
         backgroundColor: " lightblue", */
        alignItems: "center",
    },

    my2: {
        padding: '30px',

    },
}));

const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    m: 1,
    border: 1,
    width: "40rem",
    height: "20rem",
};
export default function homepage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    return (
        <div>
            <Box className={styles.page} display={"flex"} flexDirection={"column"}>
                <Image alt={''} src="/hp6 - Copy.jpg" className={classes.hero}/>
            </Box>
            <Container maxWidth="lg">
                <div className={classes.my2}></div>
                <Typography
                    variant={"h4"}
                    align={"center"}
                    sx={{color: "#000080", fontFamily: "Raleway"}}
                    gutterBottom
                >
                    Our Services{" "}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth: 400}}>
                            <CardMedia
                                component="img"
                                height="160"
                                image="/search.jpg"
                                alt="search"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{color: "#000000", fontFamily: "Raleway"}}
                                >
                                    Search Doctors
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{color: "#000000", fontFamily: "Raleway"}}
                                >
                                    Search doctors of different expertise
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth: 400}}>
                            <CardMedia
                                component="img"
                                height="160"
                                image="/appo.jpg"
                                alt="appo"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{color: "#000000", fontFamily: "Raleway"}}
                                >
                                    Appointment
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{color: "#000000", fontFamily: "Raleway"}}
                                >
                                    Get an appointment
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{maxWidth: 400}}>
                            <CardMedia
                                component="img"
                                height="160"
                                image="/lab.jpg"
                                alt="lab"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{color: "#000000", fontFamily: "Raleway"}}
                                >
                                    Hospitals and laboratories
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{color: "#000000", fontFamily: "Raleway"}}
                                >
                                    Search for wide range of laboratories and hospitals
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <div className={classes.my}>
                    <Typography
                        variant={"h4"}
                        align={"center"}
                        sx={{color: "#000080", fontFamily: "Raleway"}}
                        gutterBottom
                    >
                        WHY MEDIPAL?{" "}
                    </Typography>
                    <Typography
                        variant={"h6"}
                        align={"center"}
                        sx={{color: "#000080", fontFamily: "Raleway"}}
                        gutterBottom
                    >
                        A Great Place to Receive Care{" "}
                    </Typography>
                    <Typography
                        variant={"h6"}
                        align={"center"}
                        sx={{color: "#000000", fontFamily: "Raleway"}}
                        paragraph
                    >
                        Medipal offers wide range of diagnosis services and
                        treaments.Medipal helps{" "}
                    </Typography>
                    <Typography
                        variant={"h6"}
                        align={"center"}
                        sx={{color: "#000000", fontFamily: "Raleway"}}
                        paragraph
                    >
                        {" "}
                        connecting the patients with the most skilled and professional
                        doctors.{" "}
                    </Typography>
                    <Typography
                        variant={"h6"}
                        align={"center"}
                        sx={{color: "#000000", fontFamily: "Raleway"}}
                        paragraph
                    >
                        We keep you involved in available treatment options and decisions
                        about your treatment and care.{" "}
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{display: "flex", justifyContent: "center", t: 10}}>
                                <Box
                                    sx={{
                                        ...commonStyles,
                                        border: 0,
                                        backgroundColor: "#AEC6CF",
                                    }}
                                >
                                    <Image alt='' src="/n.jpg" width="100%" height="85%"/>
                                    <Typography
                                        variant={"h6"}
                                        align={"center"}
                                        sx={{color: "#000000", fontFamily: "Raleway"}}
                                        paragraph
                                        gutterBottom
                                    >
                                        Qualified Doctors
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Box
                                    sx={{
                                        ...commonStyles,
                                        border: 0,
                                        backgroundColor: "#AEC6CF",
                                    }}
                                >
                                    <Image alt='' src="/m.jpg" width="100%" height="85%"/>
                                    <Typography
                                        variant={"h6"}
                                        align={"center"}
                                        sx={{color: "#000000", fontFamily: "Raleway"}}
                                        paragraph
                                        gutterBottom
                                    >
                                        Patient Focused Service{" "}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Box
                                    sx={{
                                        ...commonStyles,
                                        border: 0,
                                        backgroundColor: "#AEC6CF",
                                    }}
                                >
                                    <Image alt='' src="/sq.jpg" width="100%" height="85%"/>
                                    <Typography
                                        variant={"h6"}
                                        align={"center"}
                                        sx={{color: "#000000", fontFamily: "Raleway"}}
                                        paragraph
                                        gutterBottom
                                    >
                                        Best Hospitals on board{" "}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
