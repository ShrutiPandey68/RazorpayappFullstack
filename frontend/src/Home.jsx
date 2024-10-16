import React from 'react'
import { Box, Button, Stack } from "@chakra-ui/react"
import Card from './Card'
import axios from "axios";
import PropertyList from './Assingment/PropertList';
import Navbar from './Assingment/Navbar';


const Home = () => {

    const handleImaggaPage = () => {
        window.location.href = '/imagga'; // Navigate to Imagga page
      };
    const checkoutHandler = async (amount) => {
        debugger;

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "Website Razor pay",
            description: "Tutorial of RazorPay",
            // image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Shruti Pandey",
                email: "shruti.pandey@example.com",
                contact: "6232608458"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

    return (
        <Box>
<PropertyList/>
            {/* <Stack h={"100vh"} alignItems="center" justifyContent="center" direction={["column", "row"]}>

                <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler} />
                <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />

            </Stack> */}
            {/* <Button onClick={handleImaggaPage }>imagga</Button> */}
        </Box>
    )
}

export default Home