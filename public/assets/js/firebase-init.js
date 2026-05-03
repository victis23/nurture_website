// Firebase initialization for the NurturAI marketing site.
// Loaded as <script type="module"> from index.html / terms.html / privacy.html.
//
// Web API keys here are NOT secrets — Firebase web configs are designed
// to be embedded in the client. Security is enforced via Firestore /
// Storage rules and Auth, not key obscurity.
//
// Bump the version below to track Firebase JS SDK releases:
//   https://firebase.google.com/support/release-notes/js
import { initializeApp }   from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAnalytics }    from "https://www.gstatic.com/firebasejs/11.0.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey:            "AIzaSyC3H_0WfOO6GyLTkmI_bVT27isKZNTr6oQ",
    authDomain:        "nurtureai-a98ee.firebaseapp.com",
    projectId:         "nurtureai-a98ee",
    storageBucket:     "nurtureai-a98ee.firebasestorage.app",
    messagingSenderId: "829022010029",
    appId:             "1:829022010029:web:a284e2bf3c8cc06705a424",
    measurementId:     "G-EF9DSR4JFC",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
