const initialState = {
  user: false,
  userCred: {
    username: "abc",
    password: "123",
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.data };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;
