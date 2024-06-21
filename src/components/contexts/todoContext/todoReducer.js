import { ADD_TODO, CHANGE_STATUS, DELETE_TODO, UPDATE_TODO } from "./actionTypes";
import { initialState } from "./initialState";

//reducer function 
const todoReducer=(todos=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            return[...todos,action.payload];
       case DELETE_TODO:
        return todos.filter(ele=>ele!==action.payload);
       case UPDATE_TODO:
        return todos.map(ele=>{
            if(ele.id===action.payload.id){
                return action.payload;
            }else{
                return ele;
            }
        });
        case CHANGE_STATUS:
            return todos.map(ele=>{
                if(ele.id===action.payload.id){
                    return{...ele,checked:!ele.checked};
                }else{
                    return ele;
                }

            });
            default:
                return todos;
    }
};
export default todoReducer;