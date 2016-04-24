var React = require('react');
var Widget = require('./Widget');

var Dashboard = React.createClass({

  componentDidMount: function(){
    //todo: google chart from npm
    //todo: google chart breaks Bootstrap responsive
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(this.refreshWidgets);
  },

  refreshWidgets: function(){
    this.setState({}); //this.setState({}) will trigger a re-render
  },

  //todo: specify row for each widget, or use multi column design
  //todo: add height in schema
  render: function() {

    var dashboardStyle = {};

    var widgets = this.props.schema.widgets.map(widget => {

      var clazzName = "col-sm-" + widget.colSpan; //todo: validate colSpan

      return (
        <div className={clazzName}>
          <Widget widget={widget}></Widget>
        </div>
      );
    });

    return (
      <div className="row" style={dashboardStyle}>
        {widgets}
      </div>
    );
  }

});

Dashboard.defaultProps = {
  schema      : {style:{colNum:2}, widgets:[]}
};

module.exports = Dashboard;