const UserSearch = require('./users_search');

const APIUtil = {
  followUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'POST',
      dataType: 'json'
    });
  },
  unfollowUser: id => {
    return $.ajax({
      url: `/users/${id}/follow`,
      method: 'DELETE',
      dataType: 'json'
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      url: '/users/search',
      method: 'GET',
      dataType: 'json'
    });
  }
};

module.exports = APIUtil;
