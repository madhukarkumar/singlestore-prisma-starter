import { createEleganceClient } from "@singlestore/elegance-sdk";

const baseURL = process.env.NODE_ENV === "production"
    ? "/api"  // Production environment
    : "http://localhost:3000/api";

export const eleganceClient = createEleganceClient
    ("mysql", { baseURL });
