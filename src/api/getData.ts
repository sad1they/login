import data from "../mock";
import { TDataItem } from "../types/types";

const getData = async (): Promise<Array<TDataItem>> => {
  const response = await data
  
  return response;
}

export default getData;
