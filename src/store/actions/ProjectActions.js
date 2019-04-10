export const createProject = (project) =>{
    return (dispatch,getState,{getFirebase,getFirestore}) =>{
        //async call to DB
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorfirstname:profile.firstName,
            authorlastname:profile.lastName,
            authorid:authorid,
            createdAt: new Date()


        }).then(() => {
            dispatch({type:'CREATE_PROJECT',project});
        } ).catch((err) => {
            dispatch({type:'CREATE_PROJECT_ERROR',err})
        })
        
    }
};