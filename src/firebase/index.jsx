import { auth, db } from "./firebase";

export const getTabAstuces = async () => {
	const data = [];
	await db
		.collection("tab-astuces")
		.get()
		.then(querySnapshot => {
			querySnapshot.docs.forEach(doc => {
				data.push(doc.data());
			});
		});
	return data;
};
export const getTabMachines = async () => {
	const data = [];
	await db
		.collection("tab-machines")
		.get()
		.then(querySnapshot => {
			querySnapshot.docs.forEach(doc => {
				data.push(doc.data());
			});
		});
	return data;
};
export const getCardTimeline = async () => {
	const data = [];
	await db
		.collection("card-timeline")
		.get()
		.then(querySnapshot => {
			querySnapshot.docs.forEach(doc => {
				data.push(doc.data());
			});
		});
	return data;
};

export const loginUser = async (email, password) => {
	await auth
		.signInWithEmailAndPassword(email, password)
		.then(data => {
			return data.user.getIdToken();
		})
		.then(token => {
			localStorage.setItem("Token", token);
			return token;
		})
		.catch(err => {
			console.error(err);
			return "Wrong credentials, please try again";
		});
};
