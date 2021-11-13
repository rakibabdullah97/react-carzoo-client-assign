import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)

    const auth = getAuth()

    const registerUser = (email, password, displayName, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: displayName }
                setUser(newUser)
                history.replace('/')
                //save user to database
                saveUser(email, displayName, 'POST')
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
    }, [auth])

    //save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        console.log(user)
        if (email) {
            fetch('https://stark-plains-85592.herokuapp.com/users', {
                method: method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then()
        }

    }
    //find admin
    useEffect(() => {
        fetch(`https://stark-plains-85592.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

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
        admin,
        registerUser,
        logOut,
        logInUser,
    }
}

export default useFirebase