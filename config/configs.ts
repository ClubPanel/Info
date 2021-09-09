import {InfoConfig} from "./InfoConfig";
import {RegisterConfig} from "../../../shared/config/configFilesManager";

export const registerConfigs = () => {
  RegisterConfig({name: "client/info.json", default: config});
};

const config: InfoConfig = {
  url: "/info",
  name: "Club Info",
  title: "Club Name",
  intro_text: "Some basic information about the club.",
  sections: [
    {
      title: "What is the club about?",
      text: "Text",
      shown: true
    },
    {
      title: "Where does the club meet?",
      text: "Text"
    }
  ]
};