var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');
var $ = require('jquery');


var ChatAppAction = {
  sendMessage: function(data){
    ChatAppDispatcher.handleAction({
      type: 'RECEIVE_NEW_MESSAGE',
      message: data
    });
  },
  joinRoom: function(user){
    ChatAppDispatcher.handleAction({
      type: 'USER_JOIN_ROOM',
      user: user
    });
  }
};

module.exports = ChatAppAction;
