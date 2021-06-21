

const INITIAL_STATE = {
  SET_KEY: false,
  SET_THEME: "light",
  SET_MODAL: false,
  SET_DATA: {
    
    }
}
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SETCURRENTKEY":
      return ({
        ...state,
        SET_KEY: action.data
      })
    case "SETCURRENTTHEME":
      return ({
        ...state,
        SET_THEME: action.data
      })
    case "SETMODALVALUE":
      return ({
        ...state,
        SET_MODAL: action.data
      })
    case "SETDATAVALUE":
      return ({
        ...state,
        SET_DATA: action.data
      })
  }
  return state;
}