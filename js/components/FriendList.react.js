var React = require('react');
var PropTypes = React.PropTypes;

var FriendListItem = require('./FriendListItem.react');

var FriendList = React.createClass({

  render: function() {
    friendList = [];
    for(var i = 0 ; i < 10 ; i ++){
      friendList.push(<FriendListItem key={i} nama={i} />)
    }
    return (
      <div className="friend-list">
        {friendList}
      </div>
    );
  }

});

module.exports = FriendList;
