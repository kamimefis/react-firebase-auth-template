import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import ThirdPage from '../components/ThirdPage'
import BottomNav from '../components/BottomNav'
import Loading from '../components/Loading'
import { auth } from '../firebase'
import firebase from 'firebase/app'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'    //FirebaseUI for english language
import FirebaseUIAuth from "react-firebaseui-localized" //FirebaseUI for different languages

const useStyles = makeStyles({
    loginTitle: { marginTop: 100 },
    divContent: { margin: '80px 0px 80px', textAlign: 'center' },
    loginDiv: {
        paddingTop: 30,
        textAlign: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0
    }
});

const Dashboard = ({ user, loading, loggedin }) => {
    const classes = useStyles()
    const [displayMode, setDisplayMode] = useState('first')

    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                var user = authResult.user;
                // var credential = authResult.credential;
                // var isNewUser = authResult.additionalUserInfo.isNewUser;
                // var providerId = authResult.additionalUserInfo.providerId;
                // var operationType = authResult.operationType;

                //Link auth users to collection in firestore (create the user collection and add the user's document to the collection)
                // firebase.firestore().collection('users').doc(user.uid).set({
                //     name: user.displayName,
                //     photo: user.photoURL,
                //     email: user.email,

                // }, { merge: true });
                return true;
            },
            signInFailure: function (error) {
                //console.log(error)
                // return handleUIError(error);
            },

        },
        queryParameterForSignInSuccessUrl: 'signInSuccessUrl',
        // signInFlow: 'popup',
        signInSuccessUrl: '',//Specifying sign in success url can cause double redirect since we are also managing redirect in react-router with local state.
        signInOptions: [
            // firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        // Other config options...
    }

    return (
        <>
            {loading ? <Loading /> :
                <div>
                    {!loggedin ?
                        <div className={classes.loginDiv}>
                            <p className={classes.loginTitle}>Iniciar sesión</p>
                            {/**FirebaseUI in english language by deault: */}
                            {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> */}

                            {/* If you need to change firebaseui language, please review your language code and change it in lang
                             https://github.com/firebase/firebaseui-web/blob/master/LANGUAGES.md */}
                            <FirebaseUIAuth lang="es" version="4.1.0" config={uiConfig} auth={firebase.auth()} firebase={firebase} />
                        </div>
                        :
                        <>
                            {displayMode === 'first' && <div className={classes.divContent}><FirstPage /></div>}
                            {displayMode === 'second' && <div className={classes.divContent}><SecondPage /></div>}
                            {displayMode === 'third' && <div className={classes.divContent}><ThirdPage user={user}/></div>}
                            <BottomNav setDisplayMode={setDisplayMode} />
                        </>
                    }
                </div>
            }
        </>
    );
}

export default Dashboard;
