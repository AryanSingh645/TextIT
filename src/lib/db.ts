import { MongoClient } from "mongodb";

// Create a new MongoClient instance
const client = new MongoClient(process.env.MONGODB_URI as string, {
  
});

// Declare a variable to hold the MongoDB client promise
let clientPromise : Promise<MongoClient>;

// Use a global variable to avoid creating multiple instances in development mode
if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production mode, create a new client instance per request
  clientPromise = client.connect();
}

// Export the client promise
export default clientPromise;
