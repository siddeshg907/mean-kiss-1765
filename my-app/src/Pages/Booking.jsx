import { Container,Stack,Text,Divider,Spacer,Image,Radio,Button, VStack,Box,RadioGroup,HStack,Heading } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState,useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
import Footer from "../components/Footer"

export default function ShowUserAppts(){
    const {userData}=useContext(AuthContext)
    //make a fetch req to appointments 
    //another to users
    //compare them both and push when email matches 
    const [apptData,setApptData]=useState([])
   


    const fetchAppts=(userData)=>{
        axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/appointments`).then((res)=>{
            const apptDataAfterFetch=[]

            res.data.forEach((ele)=>{
                if(userData.email===ele.email){
                    apptDataAfterFetch.push(ele) 
                }
            })
            setApptData(apptDataAfterFetch)

        }).catch((error)=>{
            console.log(error)
        })
    }
   

    useEffect(()=>{
        fetchAppts(userData)
    },[])

    //console.log(apptData,"yes")

    const handleDelete=(id)=>{
        axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/appointments/${id}`).then((res)=>{
            //console.log(res.data)
            fetchAppts(userData)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return (
        <>
        <Box>
          <Image src ="https://res.cloudinary.com/dsixdct6o/image/upload/v1687047062/marcelo-leal-6pcGTJDuf6M-unsplash_b9n2aw.jpg"></Image>
        </Box>
       <Box mt={10}>
       <Container>
        <VStack align="start" spacing={4}>
        <Heading color={"#53ab93"} as="h2" size="lg" mb={4} fontStyle={"italic"}>
          Your Appointments
        </Heading>

        {/* Item list goes here */}
        {apptData.map((ele)=>(  
            <Box key={ele.id} bg="white" shadow="md" p={6} width="full">
     
            <HStack spacing={4}>
             
              <Box flex="1" textAlign={"left"}>
              <Heading as="h3" size="md" mb={1}>
                {ele.doctor}
              </Heading>
              <Text>{ele.category}</Text>
                {/* <Text>{postData.name}</Text> */}
              </Box>
              <Spacer />
              <Box>
                <Text>{ele.day}</Text>
                <Text>{ele.time}</Text>
              </Box>
              <Button borderRadius={0} color={"#01D5A2"} colorScheme="#01D5A2" variant='outline' size={'lg'} fontSize={'xs'} fontWeight={"bold"}  border={"2px"} onClick={()=>{handleDelete(ele.id)}} /*colorScheme="blue" size="lg"*/ alignSelf="center">
            Cancel
          </Button>
            </HStack>
          </Box>
        ))}
        


        

        
      </VStack>
    </Container>
    <Footer/>
  </Box>
  </> 
   
    )
}