const modelAuth = {
  isAuthenticated: false,
  name: "",
  iduser: 0,
  modal: false,
  selectItem: {},
};

export const AuthReducer = (state = modelAuth, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        name: action.name,
        iduser: action.iduser,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        email: "",
      };
    case "OPENMODEL":
      return {
        ...state,
        modal: action.modal,
        selectItem: {},
      };
    case "SELECTMODEL":
      return {
        ...state,
        modal: true,
        selectItem: {
          type: action.type,
          model: action.model,
          capacity: action.capacity,
          plate: action.plate,
          id: action.id,
          typevehicle: action.typevehicle,
        },
      };
    default:
      return state;
  }
};
