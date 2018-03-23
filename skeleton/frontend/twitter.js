const FollowToggle = require("./follow_toggle");
const UserSearch = require('./users_search');

$(() => {
  const $buttons = $(".follow-toggle");
  $.each($buttons, (idx, el) => {
    new FollowToggle(el);
  });

  const $navs = $(".users-search");
  $.each($navs, (idx, el) => {
    new UserSearch(el);
  });

});
