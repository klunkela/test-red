import {delay} from "@/api/helpers";
import {data} from "@/api/data";

export const browseApi = {
  getData: async () => {
    await delay();
    return data[0]
  }
}
