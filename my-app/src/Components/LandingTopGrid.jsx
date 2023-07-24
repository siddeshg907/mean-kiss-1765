import { Box, SimpleGrid, Icon, Text, Stack, Flex,Image, Center } from '@chakra-ui/react';

import {BiFirstAid} from 'react-icons/bi'



export default function TopGrid() {
  return (
    <Box p={4} zIndex={25} mt={{
      "md":"-100px"
    }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} width="90%" alignItems={'center'}>
      <Stack boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"  paddingBottom="5%" bg={"white"} align="center" justify={'space-evenly'}>
      {/*<BiFirstAid size={50} color= '#13d6a8' />*/}
      <Image src='https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'  width="100%"/>
      
                <Text  fontSize='2xl' fontWeight={"semibold"}>Qualified Doctors</Text>
                <Text color={"#a1a7a9"}>Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </Text>
                
    </Stack>
    <Stack boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"  paddingBottom="5%" bg={"white"} align="center" justify={'space-evenly'}>
    <Image src='https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'  width="100%"/>
                <Text  fontSize='2xl' fontWeight={"semibold"}>24 Hours Services</Text>
                <Text color={"#a1a7a9"}>Loren Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </Text>
                
    </Stack>
    
      </SimpleGrid>
    </Box>
  );
}