import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Password } from "@mui/icons-material";


initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')

    const auth = getAuth()

    const registerUser = (email, password,displayName, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                    const newUser = { email, displayName: displayName }
                    setUser(newUser)
                    history.replace('/')
                    //save user to database
                    // saveUser(email, name, 'POST')
                    //send name to firebase after create
                    updateProfile(auth.currentUser, {
                        displayName: displayName
                    })
              })
            .catch((error) => {
                setAuthError(error.message)

            })
            .finally(() => setIsLoading(false))
    }

    const logInUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                const destination = location?.state?.from || '/';
                history.push(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                //     getIdToken(user)
                //         .then(idToken => {
                //             setToken(idToken)
                //         })
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false))
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        logOut,
        logInUser,
    }
}

export default useFirebase