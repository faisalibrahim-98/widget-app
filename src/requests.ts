import { Widget } from "./interfaces";
import axios from "axios";

export const getWidgetData = async (): Promise<Widget[]> => {
  try {
    const { data } = await axios.get<Widget[]>(
      "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets"
    );

    data[2].active = false;
    return data;
  } catch {
    throw new Error("API Failed");
  }
};
