import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    //YOUR CREDENTIALS
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth, firebase}


