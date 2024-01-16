// keep that in mind this is a sequance of redux   > const logger =store=>next=>action=>{}
/*
 !here store is redux store (parent/global);

 !here next is used to  move forward from current state to next state. with actions


 */ 


const logger =(store)=>(next)=>(action)=>{
    // getting initial state
    const currentStore = store.getState();
    console.log("Log: Previous State =>",currentStore);
    console.log("Log: Action Dispatched =>",action);
    // moving to next state
    next(action);
    console.log("Log: Updated State =>",store.getState())

    // logging

}

export default logger