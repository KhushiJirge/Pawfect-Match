import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from './../config/FirebaseConfig'

export const GetFavList=async(user)=>{
    const docSnap = await getDoc(doc(db, 'UserFavPet', user?.primaryEmailAddress?.emailAddress));
    if (docSnap?.exists()){
        return docSnap.data();
    }
    else {
        await setDoc(doc(db, "UserFavPet", user?.primaryEmailAddress?.emailAddress), {
            email:user?.primaryEmailAddress?.emailAddress,
            favs:[]
        })
    }
}

const UpdateFav=async(user, favs)=>{
    const docRef=doc(db, 'UserFavPet', user?.primaryEmailAddress?.emailAddress)
    try{
        await updateDoc(docRef, {
            favs:favs
        })
    } catch(e){

    }
}

export default {
    GetFavList,
    UpdateFav
}