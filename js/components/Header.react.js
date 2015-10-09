var React = require('react');
var PropTypes = React.PropTypes;

var Header = React.createClass({

  render: function() {
    return (
      <div className="header">
        <h2>Chat App</h2>
        <hr />
      </div>
    );
  }

});

module.exports = Header;
