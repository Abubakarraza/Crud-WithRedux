import { ADD_STUDENT, UPDATE_STUDENT, DELETE_STUDENT } from '../actions/studentAction'
import { v4 as uuidv4 } from 'uuid';



let initialState = {
    students: [
        {
            uid: uuidv4(),
            fname: 'Abubakar',
            email: 'abubakarraza64@gmail.com',
            phone: '03217805899',
            sname: 'Raza'

        },
      
    ]
};


export default function StudentReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT: {
            let newStudent = [...state.students, action.payload]
            return {
                ...state,
                students: newStudent
            }
        };
        case DELETE_STUDENT: {

            console.log('in reducer', action.payload);
            let newStudentss = state.students.filter((item) => item.uid !== action.payload);
            console.log('enter in return');
            return {

                ...state,
                students: newStudentss
            }
        }
        case UPDATE_STUDENT: {
            let newStudent = state.students.map((item) => {

                if (item.uid === action.payload.uid) {
                    return action.payload


                }
                else {
                    return item
                }
            })
            return {
                ...state,
                students: newStudent,
            };
        }

        default:
            return state
    }


}

