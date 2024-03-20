import React, { useState } from "react";
import { Box, Heading, VStack, Checkbox, Button, useToast } from "@chakra-ui/react";

const Index = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", promoted: true, rollNumber: "001" },
    { id: 2, name: "Jane Smith", promoted: true, rollNumber: "002" },
    { id: 3, name: "Mike Johnson", promoted: true, rollNumber: "003" },
    { id: 4, name: "Emily Brown", promoted: true, rollNumber: "004" },
    { id: 5, name: "David Wilson", promoted: true, rollNumber: "005" },
  ]);

  const toast = useToast();

  const handlePromotionChange = (id) => {
    const updatedStudents = students.map((student) => {
      if (student.id === id) {
        return { ...student, promoted: !student.promoted };
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const handlePromoteSelected = () => {
    const promotedStudents = students.filter((student) => student.promoted);
    const promotedNames = promotedStudents.map((student) => student.name);
    toast({
      title: "Selected students promoted",
      description: `Promoted students: ${promotedNames.join(", ")}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Student Promotion</Heading>
      <VStack align="stretch" spacing={4}>
        {students.map((student) => (
          <Checkbox key={student.id} isChecked={student.promoted} onChange={() => handlePromotionChange(student.id)}>
            {student.rollNumber} - {student.name}
          </Checkbox>
        ))}
      </VStack>
      <Button mt={4} colorScheme="blue" onClick={handlePromoteSelected}>
        Promote Selected
      </Button>
    </Box>
  );
};

export default Index;
