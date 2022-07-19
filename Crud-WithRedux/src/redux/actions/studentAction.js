export const ADD_STUDENT="ADD_STUDENT";
export const UPDATE_STUDENT="UPDATE_STUDENT";
export const DELETE_STUDENT="DELETE_STUDENT";

export const addStudent=(data)=>{
    console.log('data in action');
    return{
        type:ADD_STUDENT,
        payload:data
    }
};
export const updateStudent=(data)=>{
    return {
        type:UPDATE_STUDENT,
        payload:data
    }
};
export const deleteStudent=(uid)=>{
    console.log('in delete action');
    return {
        type:DELETE_STUDENT,
        payload:uid
    }
}