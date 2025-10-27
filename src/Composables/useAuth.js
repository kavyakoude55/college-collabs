// import {ref} from "vue";
// import {auth} from "@/firebase/firebase";
// import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

// const user = ref(null);
// const error = ref(null);

// const suignInwithEmail = async((email, password) => {
//     error.value = null;
//     try {
//         const response = await signInWithEmailAndPassword(auth, email, password);
//         user.value = response.user;
//     } catch (err) {
//         error.value = err.message;
//         console.log(error.value);
//     }
// })

// export function useAuth(){
//     return {user, error, suignInwithEmail};
// }