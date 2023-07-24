import { useParams } from "react-router-dom"
import axios from "axios"
import { useState,useEffect } from "react"
import {
  Modal,
    ModalOverlay,
    ModalContent,
  Box,
  Badge,
  Link,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { ReactElement } from 'react';
import Calendar from "../components/Calendar2"
import { Image, useAccordion } from "@chakra-ui/react"
import CheckOut from "./Checkout"
import Footer from "../components/Footer";

export default function SingleDoctor(){
let {id, doctorid}=useParams()
 id =+id
 doctorid=+doctorid
const navigate=useNavigate()

 const [SingleDoctor,setSingleDoctor]=useState({})
 const [postData,setpostData]=useState({})
 const [showCheckout,setShowCheckout]=useState(false)
 const [updatedDataForCheckOut,setUpdatedDataForCheckOut]=useState([])
 const [timeslotForCheckOut,setTimeSlotForCheckOut]=useState("")
const [selectedDateForCheckOut,setSelectedDateForCheckOut]=useState("")
const[showModal,setShowModal]=useState(false)


 
const handleUserApptPost=(postData,selectedDate,timeslot,userData)=>{
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/appointments`,{
        "name":userData.name,
        "email":userData.email,
        "category":postData.name,
        "doctor":SingleDoctor.name,
        "time":timeslot,
        "day": selectedDate,
        "price":SingleDoctor.price,
        "mode":"online"
    }).then((res)=>{
        console.log(res.data)

    }).catch((error)=>{
        console.log(error)
    })

    // console.log({"name":userData.name,
    // "email":userData.email,
    // "category":postData.name,
    // "doctor":SingleDoctor.name,
    // "time":timeslot,
    // "day": selectedDate,
    // "price":SingleDoctor.price,
    // "mode":"online"}, "post data")
  }

const getDoctor=(id,doctorid)=>{
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/services/${id}`).then((res)=>{
            //console.log(res.data,"post")
            res.data.doctors.forEach((ele)=>{
                if(ele.id===doctorid){
                    setSingleDoctor(ele)
                }
            })
            setpostData(res.data)

        }).catch((error)=>{
            console.log(error)
        })
}

console.log(postData,"post")

const putRequest=(values)=>{

    const postDataAfterChange = {
        ...postData,
        doctors: [
          ...postData.doctors.slice(0, doctorid - 1), // Copy doctors before the specific doctor
          {
            ...postData.doctors[doctorid - 1], // Copy the specific doctor
            days: values // Update the days property
          },
          ...postData.doctors.slice(doctorid) // Copy doctors after the specific doctor
        ]
      };

      // console.log(postDataAfterChange,"put data")
  axios.put(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/services/1`,{
    ...postDataAfterChange
  }).then((res)=>{
    console.log(res.data)
  }).catch((error)=>{
    console.log(error)
  })
}

useEffect(()=>{
    getDoctor(id,doctorid)
},[id,doctorid])

console.log(SingleDoctor.days,"days")

const currentDate = new Date();

const arr= new Array(15).fill(0)

const dates = arr.map((ele,index)=>{
  const nextDay1 = new Date(currentDate)
  nextDay1.setDate(currentDate.getDate() + index);
  const year = nextDay1.getFullYear();
const month = nextDay1.getMonth() + 1; // Months are zero-based, so add 1
const day = nextDay1.getDate()
return `${year}-${month}-${day}`
})

//slots here 
    return(
        <Box style={{ width: '100%' }} maxW={"11xl"}>

             <Box>
          <Image width='100%' height='300px' src ="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm208batch2-eye-01d.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=87db3b44608e640610a56896fb1457a2"></Image>
        </Box>

    {!showCheckout ? 


   <Box  p={4}  maxW={"11xl"}>
      <Stack spacing={4} as={Container} maxW={'11xl'} textAlign={'center'} mb={10} backgroundImage={''}>
        <Heading color={'#53ab93'} fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          {SingleDoctor.name}
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }} fontStyle={"italic"}>
        Patient-centered care is at the heart of Dr. {SingleDoctor.name}'s philosophy, where compassion, open communication, and evidence-based medicine converge to provide personalized treatment plans that empower patients to actively participate in their own healthcare journey.
        </Text>
      </Stack>

      <Stack
     
       //error is caused by md
        w={{ sm: '100%', md: '100%' }}
        //chaned md to row
        direction={{ base: 'column', md: 'row' }}
       
        
        padding={4}>
        {/* <Flex flex={1}> */}
          <Image
            objectFit="cover"
            //commented this below
            // boxSize="100%"
            height={"500px"}
            src=
              {SingleDoctor.image}
            
          />
        {/* </Flex> */}

        <Stack
        width={"50%"}
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          p={3}
          pt={2}
          textAlign={"left"}
          >
          <Heading color={'#53ab93'} fontWeight={"semibold"} fontSize='4xl'>
            Specialized: {postData.name}
          </Heading>
          <Text color={"black"} fontSize='2xl' fontWeight={"medium"}>
          Dr. {SingleDoctor.name} believes in a patient-centered approach, taking the time to listen to patients' concerns, explain diagnoses and treatment options, and involve them in their healthcare decisions.
          </Text>
          <Text
          color={"black"} fontSize='2xl' fontWeight={"medium"}
            textAlign={'center'}
            
            px={3}>
            Charges (Per Hour): ₹ {SingleDoctor.price}
          </Text>
          <Text
            textAlign={'center'}
            
            px={3}
            color={"black"} fontSize='2xl' fontWeight={"medium"}
            >
            
            Experience: {SingleDoctor.experience} Years
          </Text>
          <Text
          color={"black"} fontSize='2xl' fontWeight={"medium"}
            textAlign={'center'}
            
            px={3}>
            
            Education: {SingleDoctor.education}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} mt={5}>
            Time Slots:
          </Heading>
          {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6} width={"100%"}> */}
         
             <Calendar
        key={1}
        availableDates={dates}
        days={SingleDoctor.days}
        putRequest={putRequest}
        postData={postData}
        SingleDoctor={SingleDoctor}
        setShowCheckout={setShowCheckout}
        setTimeSlotForCheckOut={setTimeSlotForCheckOut}
        setUpdatedDataForCheckOut={setUpdatedDataForCheckOut}
        setShowModal={setShowModal}
        setSelectedDateForCheckOut={setSelectedDateForCheckOut}
        /> 
           
          {/* </Stack> */}
        </Stack>

      </Stack>

    </Box>: <CheckOut
        key={1}
        putRequest={putRequest}
        postData={postData}
        SingleDoctor={SingleDoctor}
        setShowCheckout={setShowCheckout}
        timeslotForCheckOut={timeslotForCheckOut}
        updatedDataForCheckOut={updatedDataForCheckOut}
        selectedDateForCheckOut={selectedDateForCheckOut}
        handleUserApptPost={handleUserApptPost}
        />}
         <Modal isOpen={showModal}>
          <ModalOverlay />
          
          <ModalContent style={{
            display: 'flex',
            flexDirection:'column',
            padding:"20px",
            justifyContent:"space-evenly",
            alignItems:"center", height:"200px", width:"300px"}}>
          
         <Heading textAlign={"center"} fontSize={'2xl'} fontFamily={'body'} mt={5}>Please Login To Continue</Heading>
         <Button  borderRadius={0} color={"#01D5A2"} colorScheme="#01D5A2" variant='outline' size={'lg'} fontSize={'xs'} fontWeight={"bold"} width={"200px"} border={"2px"} onClick={()=>{navigate("/login")}}>Login</Button>

            </ModalContent>
            
          </Modal>
        <Footer/>
        </Box>
    )
}