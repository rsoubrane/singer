import app from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBxlBmcJ1PpRsjyUklo-BT3mryUr0D6FVI",
	authDomain: "pwa-singer.firebaseapp.com",
	databaseURL: "https://pwa-singer.firebaseio.com",
	projectId: "pwa-singer",
	storageBucket: "pwa-singer.appspot.com",
	messagingSenderId: "228934945185",
	appId: "1:228934945185:web:f55dc85973b39a891a63e0",
	measurementId: "G-FW1WT14F32"
};
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { app, auth, db };
