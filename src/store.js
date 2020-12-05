import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';



  const contactReducer = (state = initialState, action) => {
      switch(action.type){
          default:
              return state;
      }
  }


  const store = createStore(contactReducer, composeWithDevTools());

  export default store;