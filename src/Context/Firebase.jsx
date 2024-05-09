/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { getDatabase, ref, set, onValue, equalTo } from "firebase/database";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const db = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const signInUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signInWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };
  const signOutUser = async () => {
    try {
      await signOut(firebaseAuth);
      console.log("User signed out successfully.");
      // You can perform any additional actions after sign-out if needed
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  const handleCreateNewData = async (
    यूजर_का_नाम,
    दिनांक,
    ज़ोन_का_नाम,
    ज़ोन_का_नम्बर,
    ब्रांच_का_नाम,
    पंजीकृत_ब्रांच_में_दैनिक_संगत,
    बाल_संगत,
    महिला_संगत,
    ज्ञान_प्रचारक_का_नाम,
    जोन_से_आये_प्रचारक_का_नाम,
    केंद्र_से_आये_प्रचारक_का_नाम,
    जिज्ञाशु_संख्या,
    स्थानीय_सेवादल_शिविर,
    क्षेत्रीय_सेवादल_शिविर,
    केन्द्रीय_सेवादल_शिविर,
    सामाजिक_गतिविधियों_का_विवरण,
    एक_नजर,
    हसती_दुनिया,
    संत_निरंकारी_पत्रिका,
    अपंजीकृत_संगतों_की_संखिया
  ) => {
    return await addDoc(collection(firestore, `MonthlyData`), {
      यूजर_का_नाम: user.email,
      दिनांक,
      ज़ोन_का_नाम,
      ज़ोन_का_नम्बर,
      ब्रांच_का_नाम,
      पंजीकृत_ब्रांच_में_दैनिक_संगत,
      बाल_संगत,
      महिला_संगत,
      ज्ञान_प्रचारक_का_नाम,
      जोन_से_आये_प्रचारक_का_नाम,
      केंद्र_से_आये_प्रचारक_का_नाम,
      जिज्ञाशु_संख्या,
      स्थानीय_सेवादल_शिविर,
      क्षेत्रीय_सेवादल_शिविर,
      केन्द्रीय_सेवादल_शिविर,
      सामाजिक_गतिविधियों_का_विवरण,
      एक_नजर,
      हसती_दुनिया,
      संत_निरंकारी_पत्रिका,
      अपंजीकृत_संगतों_की_संखिया,
    });
  };
  const handleUserData = async (
    username,
    email,
    branch,
    zoneNumber,
    zoneName
  ) => {
    try {
      await addDoc(collection(firestore, "user"), {
        username,
        email,
        branch,
        zoneNumber,
        zoneName,
      });
      console.log("Document added successfully!");
    } catch (error) {
      console.error("Error adding document:", error);
      throw error;
    }
  };

  const handleCreateNewData1 = (
    यूजर_का_नाम,
    दिनांक,
    ज़ोन_का_नाम,
    ज़ोन_का_नम्बर,
    ब्रांच_का_नाम,
    पंजीकृत_ब्रांच_में_दैनिक_संगत,
    बाल_संगत,
    महिला_संगत,
    इंग्लिश_संगत,
    खुली_संगत,
    ज्ञान_प्रचारक_का_नाम,
    जोन_से_आये_प्रचारक_का_नाम,
    केंद्र_से_आये_प्रचारक_का_नाम,
    जिज्ञाशु_संख्या,
    स्थानीय_सेवादल_शिविर,
    क्षेत्रीय_सेवादल_शिविर,
    केन्द्रीय_सेवादल_शिविर,
    सामाजिक_गतिविधियों_का_विवरण,
    एक_नजर,
    हसती_दुनिया,
    संत_निरंकारी_पत्रिका,
    अपंजीकृत_संगतों_की_संखिया,
    username,
    branch
  ) => {
    set(ref(db, `MonthlyData/${username + " " + branch}/${Date.now()}`), {
      यूजर_का_नाम: user.email,
      दिनांक,
      ज़ोन_का_नाम,
      ज़ोन_का_नम्बर,
      ब्रांच_का_नाम,
      पंजीकृत_ब्रांच_में_दैनिक_संगत,
      बाल_संगत,
      महिला_संगत,
      इंग्लिश_संगत,
      खुली_संगत,
      ज्ञान_प्रचारक_का_नाम,
      जोन_से_आये_प्रचारक_का_नाम,
      केंद्र_से_आये_प्रचारक_का_नाम,
      जिज्ञाशु_संख्या,
      स्थानीय_सेवादल_शिविर,
      क्षेत्रीय_सेवादल_शिविर,
      केन्द्रीय_सेवादल_शिविर,
      सामाजिक_गतिविधियों_का_विवरण,
      एक_नजर,
      हसती_दुनिया,
      संत_निरंकारी_पत्रिका,
      अपंजीकृत_संगतों_की_संखिया,
    });
  };
  const handleWeeklyEntrie = async (
    EntryDate,
    सत्संग_की_तिथि,
    ज़ोन_का_नाम,
    ज़ोन_का_नम्बर,
    ब्रांच_का_नाम,
    सत्संग_का_नाम,
    स्थान,
    सत्संग_का_समय,
    स्टेज_की_सेवा,
    स्टेज_संचालन_सेवा,
    बहनों_की_संखिया,
    भाइयो_की_संख्या,
    कुल_संखिया,
    नमस्कार_माया,
    username
  ) => {
    await set(
      ref(db, `WeeklyData/${username + " " + ब्रांच_का_नाम}/${Date.now()}`),
      {
        EntryDate,
        सत्संग_की_तिथि,
        ज़ोन_का_नाम,
        ज़ोन_का_नम्बर,
        ब्रांच_का_नाम,
        सत्संग_का_नाम,
        स्थान,
        सत्संग_का_समय,
        स्टेज_की_सेवा,
        स्टेज_संचालन_सेवा,
        बहनों_की_संखिया,
        भाइयो_की_संख्या,
        कुल_संखिया,
        नमस्कार_माया,
        username,
      }
    );
  };

  const getUserData = async () => {
    const collectionRef = collection(firestore, "user");
    const q = query(collectionRef, where("email", "==", user.email));
    const snapshot = await getDocs(q);
    const userData = [];
    snapshot.forEach((doc) => {
      userData.push(doc.data());
    });
    return userData;
  };
  const getUsersList = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "user"));
      const userList = [];
      querySnapshot.forEach((doc) => {
        userList.push(doc.data());
      });
      return userList;
    } catch (error) {
      console.error("Error getting documents: ", error);
      throw error; // Re-throwing the error to handle it at a higher level if needed
    }
  };

  const getUserMonthlyData = (username, branch) => {
    const userRef = ref(db, `MonthlyData/${username} ${branch}`);

    return new Promise((resolve, reject) => {
      onValue(
        userRef,
        (snapshot) => {
          const data = snapshot.val();
          resolve(data);
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  const [dataArry, setDataArry] = useState([]);

  const getAllMonthlyData = () => {
    const userRef = ref(db, `MonthlyData`);
    const dataArry = [];

    // Return the Promise directly
    return new Promise((resolve, reject) => {
      onValue(
        userRef,
        (snapshot) => {
          const data = snapshot.val();
          const tempDataArry = [];
          Object.values(data).forEach((value) => {
            Object.values(value).forEach((value) => {
              tempDataArry.push(value);
            });
          });
          dataArry.push(...tempDataArry);
          resolve(dataArry); // Resolve with the populated dataArry
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  useEffect(() => {
    getAllMonthlyData()
      .then((data) => {
        setDataArry(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailPassword,
        signInUserWithEmailAndPass,
        signInWithGoogle,
        isLoggedIn,
        handleUserData,
        signOutUser,
        user,
        handleCreateNewData,
        handleCreateNewData1,
        getUserData,
        getUserMonthlyData,
        handleWeeklyEntrie,
        getUsersList,
        getAllMonthlyData,
        dataArry,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
