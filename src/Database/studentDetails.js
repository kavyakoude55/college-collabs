import { doc, getDoc, getFirestore } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
// Assume 'app' is your initialized Firebase App instance


async function fetchStudentDetails() {
  // 1. Create a reference to the specific document
  const studentRef = doc(db, "Students", "A0538"); 
  
  // 2. Fetch the document once
  const docSnap = await getDoc(studentRef);

  if (docSnap.exists()) {
    const studentData = docSnap.data();
    console.log("Student Data:", studentData);
    
    // Now you can use this data to populate your component:
    // studentDetails.name = studentData.Name;
    // studentDetails.email = studentData.Email;
  } else {
    console.log("No such student document!");
  }
}

export default fetchStudentDetails;