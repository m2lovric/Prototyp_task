export const userReducer = (state = {}, action: any) => {
  switch (action.type) {
    case 'USER_EXIST':
      return state = action.data;
    default:
      return state
  }
}