import { Box, Button } from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
// import axios from "axios";

const Calendar = ({ availableDates, days,putRequest,postData,SingleDoctor,setShowCheckout,setTimeSlotForCheckOut,setUpdatedDataForCheckOut,setSelectedDateForCheckOut,setShowModal}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [data,setData] =  useState(days);
  const {isAuth}=useContext(AuthContext)


useEffect(()=>{
  setData(days)
},[days])

//console.log(data,"data")


  const handleDateClick = (date) => {

    setSelectedDate(date);
  };

  const handleTimeslotClick = (timeslot) => {

   

    if(!isAuth){
        //show modal
        setShowModal(true)
       // alert("please login to book appointment")
        return
    }
  
 
    
    console.log(`Booking appointment on ${selectedDate} at ${timeslot}`);
 


   

    const updatedData = data.map((day, index) => {
      if (index === availableDates.indexOf(selectedDate)) {
        const updatedSlots = { ...day.slots };
        updatedSlots[timeslot] = !updatedSlots[timeslot]; // Toggle the value
        return { ...day, slots: updatedSlots };
      }

      return day;
    });

     //ignore this, this is for calendar functionality itself
     setData(updatedData);


    setSelectedDateForCheckOut(selectedDate)
    setTimeSlotForCheckOut(timeslot)
    setUpdatedDataForCheckOut(updatedData)
    
    setShowCheckout(true)
    
    //ill need to pass updatedData from parent and set it here 
    
    // ill need to pass timeslot as well
    

      //put req like this after checkout
    // putRequest(updatedData)

    //post requ here also 
    //redirect to my appointments
   
     
  };

  
 

  const getTimeslotsForSelectedDate = () => {
    
    if (selectedDate) {
      const index = availableDates.indexOf(selectedDate);
      if(!data[index]){
        return <p>No slots available for this date</p>;
      }
      const slots = data[index].slots;
      return Object.entries(slots).map(([timeslot, isDisabled]) => (
        <Button
          key={timeslot}
          onClick={() => handleTimeslotClick(timeslot)}
          isDisabled={!isDisabled}
          colorScheme="teal"
          mr={2}
          mb={2}
        >
          {timeslot}
        </Button>
      ));
    }
    return null
  
  };

  return (
    <Box p={4}
    overflowX="auto" whiteSpace="nowrap" 
   width={"100%"}
    >
       <Box 
        
        >
      {availableDates.map((date) => (
        <Button
          key={date}
          onClick={() => handleDateClick(date)}
          disabled={selectedDate !== null}
          colorScheme={selectedDate === date ? "teal" : "gray"}
          mr={2}
          mb={2}
        >
          {date}
        </Button>
      ))}
      <Box mt={4}>{getTimeslotsForSelectedDate()}</Box>
    </Box>
    </Box>
  );
};

export default Calendar;
