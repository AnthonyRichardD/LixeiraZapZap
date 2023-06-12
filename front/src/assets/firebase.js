import {initializeApp} from 'firebase/app';
import { getFirestore, onSnapshot, collection } from "firebase/firestore";
const db = getFirestore(firebaseApp);


export const firebaseConfig = {
  apiKey: "AIzaSyAzgf2lG84oqYkh2oqhuqn7s-M9YB1chiE",
  authDomain: "my-first-project-29ac4.firebaseapp.com",
  projectId: "my-first-project-29ac4",
  storageBucket: "my-first-project-29ac4.appspot.com",
  messagingSenderId: "695842208309",
  appId: "1:695842208309:web:850204c3342342c6f3cf7c",
  measurementId: "G-TM4RBE2DBD"
}
export const firebaseApp = initializeApp(firebaseConfig);

export const deviceCollection = collection(db, 'Devices');

onSnapshot(deviceCollection, (deviceSnapshot) => {        
    this.deviceList = deviceSnapshot.docs.map(doc => doc.data());
    console.log(this.deviceList);
});