const APIUtil = require("./api_util");



class UserSearch {
  constructor (el) {
    this.$el = $(el);
    this.input = this.$el.children("input");
    this.ul = this.$el.find('.users');
    debugger
    this.handleInput();
  }


  handleInput() {

    this.input.on('change', APIUtil.searchUsers(this.input.value,
      this.renderResults.bind(this))
    );
  }

  renderResults (matchedUsers) {
    this.ul = $("<ul></ul>");
    for (let user in matchedUsers) {
      let $user =
      $(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      this.ul.append($user);
    }
  }
}

module.exports = UserSearch;
