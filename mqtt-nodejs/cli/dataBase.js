import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore'
import { firebaseApp } from './firebase.js';

const db = getFirestore();

// Adiciona as informações do dispositivo no documento.
export async function setDeviceData(object){
    await setDoc(doc(db, "Devices", object.topic), object);
}

export async function getDevice(){
    const docRef = doc(db, "Devices", "Device1");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    console.log(docSnap.data());
    } else {
    console.log("Documento não encontrado!");
}
}
