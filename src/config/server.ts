import dotenv from "dotenv";

dotenv.config();

export const serverConfig = {
  customerServiceUrl:
    process.env.CUSTOMER_SERVICE_URL || "http://localhost:3001/api",
  //Add other service URLs or configuration settings here
};
