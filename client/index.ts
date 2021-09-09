import {ClientSide} from "../../../shared/module/moduleClient";
import {registerClient} from "./client";

const output: ClientSide = {
  identifier: "info",
  register: registerClient
};

export default output;