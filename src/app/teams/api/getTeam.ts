import { get } from "node:https";
import { User } from "../types/userType";
import axios from "axios";

export const getTeamData = async (): Promise<User | null> => {
  try {
    const { data } = await axios.get("https://randomuser.me/api/");
    const output: User = data.results[0];
    return output;
  } catch (axiosError) {
    return null;
  }
};