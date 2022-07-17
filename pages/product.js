import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const axios = require("axios").default;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 4,
  },
}));

export default function AltCard() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`
      )
      .then((res) => {
        console.log(res.data.data.products);
        setData(res.data.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      style={{
        marginTop: "60px",
        alignContent: "center",
      }}
    >
      <Typography
        variant="body2"
        color="white"
        fontSize={15}
        fontWeight="800"
        marginBottom={3}
      >
        Kurta • Palazzos • Sandals{" "}
        <span style={{ marginLeft: "80%" }}>10 products</span>
      </Typography>

      <Grid container spacing={2} direction="row">
        {data.map((item) => (
          <Grid key={item.name} item xs={12} sm={6} md={3} lg={3}>
            <Card
              style={{
                width: "auto",
                height: "720px",
                backgroundColor: "#191919",
                borderRadius: "16px",
              }}
            >
              <CardMedia
                component="img"
                image={item.plpimaage}
                alt="green iguana"
              />

              <CardContent>
                <Typography variant="body2" color="white" fontSize={20}>
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  fontSize={20}
                  marginTop="15px"
                >
                  ₹{item.price}{" "}
                  <span style={{ color: "green" }}>
                    ({item.discount}% off){" "}
                    <ShoppingCartIcon
                      style={{
                        color: "white",
                        fontSize: "50px",
                        marginLeft: "90%",
                        marginTop: "7px",
                      }}
                    />
                  </span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
