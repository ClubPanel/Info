import {RenderProps} from "../../../../pages/[[...name]]";
import {GetConfig} from "../../../../shared/config/configStore";
import React from "react";

import {InfoConfig} from "../../config/InfoConfig";
import {Accordion, Center, chakra, Heading, Text} from "@chakra-ui/react";
import SectionComponent from "./SectionComponent";

const InfoPageComponent = ({config}: RenderProps) => {
  const configs = GetConfig<InfoConfig>("client/info.json", config);

  const indexes: number[] = [];
  for (let i = 0; i < configs.sections.length; i++){
    const section = configs.sections[i];

    if(section.shown) indexes.push(i);
  }

  return (
    <>
      <Heading textAlign="center" as="h1" size="2xl" pt="10px">{configs.title}</Heading>
      <chakra.div m="auto" mb="25px" border="1px solid white" width="70%"/>
      <Text width="70%" m="auto" textAlign="center" as="p" size="md" pb="100px">{configs.intro_text}</Text>

      <Accordion width="90%" m="auto" defaultIndex={indexes} allowMultiple allowToggle>
        {configs.sections.map((section, idx) => {
          return (
            <SectionComponent key={idx} title={section.title} text={section.text}/>
          );
        })}
      </Accordion>
    </>
  );
};

export default InfoPageComponent;