import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKwJbrHjw_xnjMffkG_U7YPMVddw7rgwI",
    authDomain: "bdrefeicao38.firebaseapp.com",
    projectId: "bdrefeicao38",
    storageBucket: "bdrefeicao38.appspot.com",
    messagingSenderId: "762899041684",
    appId: "1:762899041684:web:55836aec1b65a992fed381"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);