import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import "./../../src/pricing.css";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="card-container">
      {data.map((data, index) => (
        <Card key={index} maxW="sm" className="card">
          <CardBody>
            <Image
              src={data.image}
              alt={`Product Image ${index + 1}`}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{data.title}</Heading>
              <Text>{data.description}</Text>
              <Text color="blue.600" fontSize="2xl">
                {data.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Cards;