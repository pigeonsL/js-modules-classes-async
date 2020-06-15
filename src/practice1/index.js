import getURL from "./utils";
import { address, port, path, region } from "./constant";

export { region };
export { url };

const url = getURL(address, port, path);