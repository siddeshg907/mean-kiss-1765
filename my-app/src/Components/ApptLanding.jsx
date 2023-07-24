import { Flex,Text,Button,Spacer } from "@chakra-ui/react"

export default function ApptLanding(){
    return(
        <Flex direction={"column"} height={"130px"} alignItems={"center"} justifyContent="space-evenly" margin={"auto"}
        >
            <Text color={'#13d6a8'} fontWeight={"semibold"} fontSize={{"base":"s","sm":"1xl","md":"1xl"}}>NEED A DOCTOR FOR CHECK UP?</Text>
            <Text color={"white"} fontSize={{"base":"s","sm":"2xl","md":"2xl"}} fontWeight={"semibold"}>Get Appointment</Text>
            <Text color={"white"} fontSize={{"base":"s","sm":"2xl","md":"2xl"}} fontWeight={"semibold"}>Contact Us On: +91 7551845223</Text>
            <Spacer/>
            <Button borderRadius={0} color={"white"}  bg="rgba(1, 213, 162, 1)" variant='solid'  size={'lg'} fontSize={'xs'} mr={5} width={"200px"}
            
            >GET AN APPOINTMENT</Button>
        </Flex>
    )
}