import { Client, Databases } from 'appwrite';

// Initialize the Client
const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')  // Your Appwrite endpoint
  .setProject('680bb50000274b09a515');         // Your project ID

// Initialize Databases service
const databases = new Databases(client);

// Database configuration
export const databaseId = '680bb53e00306fe27a82';
export const collectionId = '680bb578000a7c02c2c9';

export { databases, client };  // Export both databases and client