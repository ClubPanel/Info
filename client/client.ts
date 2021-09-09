import {ClientRegisterCallback} from "../../../shared/module/moduleClient";
import {GetConfig} from "../../../shared/config/configStore";
import {InfoConfig} from "../config/InfoConfig";

export const registerClient = (RegisterClientPage: ClientRegisterCallback) => {
  const configs = GetConfig<InfoConfig>("client/info.json");

  RegisterClientPage(configs.url, {
    name: configs.name
  }, "./client/components/InfoPageComponent.tsx");
};