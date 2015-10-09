var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ChatAppDispatcher = require('../dispatcher/ChatAppDispatcher');


_currentUser = null;
_allUsers = [];
_messagesBag = [];


var CHANGE_EVENT = 'change';
var ChatStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  getCurrentUser: function(){
    return _currentUser;
  },
  getAllMessage: function(){
    return _messagesBag;
  },
  addMessage: function(message){
    _messagesBag.push(message);
  },
  setCurrentUser: function(user){
    _currentUser = user;
  }
});


ChatStore.dispatchToken = ChatAppDispatcher.register(function(payload){
  var action = payload.action;
  switch (action.type) {
    case 'USER_JOIN_ROOM':
      ChatStore.setCurrentUser(action.user);
      ChatStore.emitChange();
      break;
    case 'RECEIVE_NEW_MESSAGE':
      if(action.message.text == ''){
        return;
      }
      ChatStore.addMessage(action.message);
      ChatStore.emitChange();
      break;
    default:
    // do nothing
  }
});


module.exports = ChatStore;
