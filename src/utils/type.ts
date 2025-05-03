export interface AppStoreType {
  user: User;
}

export interface User {
  displayName: string | null;
  email: string;
  photoURL: string | null;
  phoneNumber: string | null;
  uid: string;
}
