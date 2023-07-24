import { Flex,Grid,GridItem,Text,Image,Icon,Box,Divider,VStack} from "@chakra-ui/react"
import { useState,useEffect } from "react"
import { FaCircle } from "react-icons/fa";
import { Fragment } from "react";

import axios from "axios"
export default function NewsLanding(){
    const [news,setNews]=useState([])

    const getNews=()=>{
        axios.get("https://bookish-spoon-json-server.bhishree18.repl.co/news").then((res)=>{
            console.log(res.data)
            setNews(res.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        getNews()
    },[])

    return(
       
        <Flex gap={10} mt={{
            "base":"50px",
            "md":'70px'
          }} direction={"column"}>
            <Box width={"60%"} margin={"auto"}>
            <Text color={'#13d6a8'} fontWeight={"semibold"} fontSize='1xl'>OUR LATEST</Text>
            <Text color={"black"} fontSize='2xl' fontWeight={"semibold"}>News & Event</Text>
            <Text color={"#8b8986"} fontSize={'lg'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi accusantium ut, ducimus cumque culpa nulla dignissimos delectus tempora enim! Veritatis facilis alias distinctio reiciendis officiis possimus accusantium error inventore!</Text>
            </Box>
            <Grid templateColumns={{
                "md":'repeat(2, 1fr)',
                "base":'repeat(1, 1fr)',
                "sm":'repeat(2, 1fr)'
            }} gap={5} margin={"auto"}>
                {
                    news.map((ele,index)=>(
                        <GridItem>
                       
                            <Flex gap={5}>
                                <Image src={ele.image} alt="news" height={"90px"} width={"100px"}></Image>
                            
                            <Flex direction={"column"} textAlign={"left"} flexWrap={"wrap"}>
                                <Text>{ele.title}</Text>
                                <Flex color={"#b2b9c0"} direction={{
                                    base:"column",
                                    sm:"column",
                                    md:"row"
                                }}>
                                
                                <Text>{ele.date}</Text>
                                <Box display="inline-block" verticalAlign="middle">
                                <Icon as={FaCircle} color={"#b2b9c0"} boxSize={1.5} verticalAlign="middle" ml={2} mr={2}></Icon>
                                </Box>
                                <Text>{ele.category}</Text>
                                </Flex>
                                
                            </Flex>
                            </Flex>
                            {index !== news.length - 1 && <Divider mt={5} />}
                </GridItem>
                        
                    ))
                }
            </Grid>
        </Flex>
    )    
}