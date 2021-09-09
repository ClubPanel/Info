import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text} from "@chakra-ui/react";
import React from "react";

const Section = ({title, text}: {title: string, text: string}) : JSX.Element => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex={1}>
            {title}
          </Box>
          <AccordionIcon/>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text as="p" size="md">{text}</Text>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Section;