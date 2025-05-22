
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Dummy Firebase configuration
// This won't connect to any real Firebase project
const firebaseConfig = {
  apiKey: "dummy-api-key",
  authDomain: "dummy-auth-domain",
  projectId: "dummy-project-id",
  storageBucket: "dummy-storage-bucket",
  messagingSenderId: "dummy-messaging-sender-id",
  appId: "dummy-app-id",
  measurementId: "dummy-measurement-id"
};

// Initialize Firebase (this won't actually connect)
const app = initializeApp(firebaseConfig);

// Get Firebase Auth instance (won't be used)
export const auth = getAuth(app);
export default app;
