import {Config} from "../../../shared/config/types/config";

export interface InfoConfig extends Config {
  url: string;
  name: string;
  title: string;
  intro_text: string;
  sections: Section[];
}

export interface Section {
  title: string;
  text: string;
  shown?: boolean;
}