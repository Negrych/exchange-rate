import { urls } from "../constans/urls";
import { IData } from "../interfaces/dataInterface";

import { axiosService } from "./axiosService";

export const dataService = {
  getAll: () => axiosService.get<IData[]>(urls.endpoint),
};
