import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";

const Calculator = () => {
  const [result, setResult] = useState(null);
  const [formFields, setFormFields] = useState([
    { pointsEarned: "", totalPoints: "", category: "" },
  ]);
  const handleFormChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    let data: any = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const addFields = () => {
    let object = {
      pointsEarned: "",
      totalPoints: "",
      category: "",
    };
    setFormFields([...formFields, object]);
  };

  const refresh = () => {
    window.location.reload();
  };

  const letter = (number: any) => {
    if (number >= 97) return "A+";
    else if (number >= 93) return "A";
    else if (number >= 90) return "A-";
    else if (number >= 87) return "B+";
    else if (number >= 83) return "B";
    else if (number >= 80) return "B-";
    else if (number >= 77) return "C+";
    else if (number >= 73) return "C";
    else if (number >= 70) return "C-";
    else if (number >= 67) return "D+";
    else if (number >= 65) return "D";
    else if (number >= 60) return "D-";
    else return "F";
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let aolEarned = ["0"];
    let aolTotals = ["0"];
    let aflEarned = ["0"];
    let aflTotals = ["0"];
    for (let i = 0; i < formFields.length; i++) {
      if (formFields[i].category == ".80") {
        aolEarned.push(formFields[i].pointsEarned);
        aolTotals.push(formFields[i].totalPoints);
      } else {
        aflEarned.push(formFields[i].pointsEarned);
        aflTotals.push(formFields[i].totalPoints);
      }
    }

    // convert string[] -> number[]
    let aolEarnedNum = aolEarned.map((i) => Number(i));
    let aolTotalsNum = aolTotals.map((i) => Number(i));
    let aflEarnedNum = aflEarned.map((i) => Number(i));
    let aflTotalsNum = aflTotals.map((i) => Number(i));
    const formData = {
      aolPointsEarned: aolEarnedNum,
      aolTotalPoints: aolTotalsNum,
      aflPointsEarned: aflEarnedNum,
      aflTotalPoints: aflTotalsNum,
    };

    try {
      const response = await fetch("http://localhost:5000/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>
        <Box bg="#A29165" w="470px" h="auto" mx="auto" mt="200px" p="10px">
          <HStack>
            <Text fontSize="15" ml="3px">
              Assignment (opt.)
            </Text>
            <Text fontSize="15" ml="25px">
              Points earned
            </Text>
            <Text fontSize="15" ml="5px">
              Total points
            </Text>
            <Text fontSize="15" ml="13px">
              Category
            </Text>
          </HStack>

          {formFields.map((form, index) => {
            return (
              <HStack key={index} pb="5px" spacing="20px">
                <Input bg="#E8E8E8" w="155px" borderRadius="4" />
                <Input
                  bg="#E8E8E8"
                  w="80px"
                  name="pointsEarned"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.pointsEarned}
                  borderRadius="4"
                />
                <Input
                  bg="#E8E8E8"
                  w="80px"
                  name="totalPoints"
                  onChange={(event) => handleFormChange(event, index)}
                  value={form.totalPoints}
                  borderRadius="4"
                />
                <Select
                  bg="#E8E8E8"
                  w="80px"
                  name="category"
                  onChange={(event) => handleFormChange(event, index)}
                  borderRadius="4"
                >
                  <option value=""></option>
                  <option value=".20">AFL 20%</option>
                  <option value=".80">AOL 80%</option>
                </Select>
              </HStack>
            );
          })}
          <Center>
            <Button onClick={addFields} w="250px" bg="#E8E8E8">
              Add grade +
            </Button>
          </Center>
          <HStack paddingTop="30px" mx="45px" justifyContent="space-between">
            <Button
              onClick={handleSubmit}
              bg="#214D7D"
              color="white"
              _hover={{ color: "white" }}
              _active={{ background: "#214D7D", color: "#A29165" }}
            >
              = Calculate
            </Button>
            <Button
              onClick={refresh}
              bg="#515C67"
              color="white"
              _hover={{ bg: "red" }}
            >
              X Reset
            </Button>
          </HStack>
          <Box bg="#A29165" pt="8px" mx="45px">
            <Text fontSize="20" fontWeight="semi bold" py="5px">
              Average grade:
            </Text>
            <HStack spacing="20px">
              <Box bg="white" color="black" borderRadius="4" w="200px" h="40px">
                <Text fontSize="24px">{result}</Text>
              </Box>
              <Box bg="white" color="black" borderRadius="4" w="100px" h="40px">
                <Text fontSize="24px">{letter(result)}</Text>
              </Box>
            </HStack>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Calculator;
