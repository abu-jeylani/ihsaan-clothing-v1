import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectIsUserLoading = createSelector(
  [selectUser],
  (userSlice) => userSlice.isLoading
);

export const selectUserSecret = createSelector([selectUser], (user) => {
  return user.secret;
});
