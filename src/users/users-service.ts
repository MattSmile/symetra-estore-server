import { MockData, User } from '../types/types';

const UsersService = {

  // Generally these methods will interact with a DB of some kind.
  // The implementation is basic here since we do not need a
  // persistent data layer or any sort of authentication

  // Get all users
  getUsers: async (dataSrc: MockData) => {
    return dataSrc.users as User[];
  },

  getRandomUser: async (dataSrc: MockData) => {
    return dataSrc.users[
      Math.floor(Math.random() * dataSrc.users.length)
    ];
  }
};

export default UsersService;
