/**
* @jsx React.DOM
*/

// static/js/views/example_component.js

var app = app || {};

var Example = React.createClass({
  handleDelete : function(example_id) {
    this.props.onDelete(this.props.example_id);
  },
  render : function() {
    return(
      <div className="exampleContainer">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.mail}</li>
        </ul>
        <button className="delete" onClick={this.handleDelete}>
          Delete Example
        </button>
      </div>
    );
  }
});

var ExampleForm = React.createClass({
  handleSubmit : function() {
    var name = this.refs.name.getDOMNode().value.trim();
    var mail = this.refs.mail.getDOMNode().value.trim();
    this.props.onCommentSubmit({name : name, mail : mail});
    this.refs.name.getDOMNode().value = '';
    this.refs.mail.getDOMNode().value = '';
    return false;
  },
  render : function() {
    return(
      <div role="form">
        <label htmlFor="example-input-name">
          Example name input
        </label>
        <input type="text" className="form-control" placeholder="Enter Name" ref="name">
        </input>
        <label htmlFor="example-input-mail">
          Example name input
        </label>
        <input type="text" className="form-control" placeholder="Enter Mail" ref="mail">
        </input>
        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
          Add Entry
        </button>
      </div>
    );
  }
});

var ExampleList = React.createClass({
  deleteExample: function(example_id) {
    this.props.onDelete(example_id);
  },
  getExample: function(exampleData) {
    return(
      <Example
        example_id={exampleData[0]}
        name={exampleData[1]}
        mail={exampleData[2]}
        onDelete={this.deleteExample} />
    );
  },
  render : function() {
    var exampleData = this.props.data.map(function(example) {
      return(
        [example.get('_id'), example.get('name'), example.get('mail')]
      );
    });
    var exampleNodes = [];
    for (var i=0, maxLength=exampleData.length; i<maxLength; i++) {
      exampleNodes.push(this.getExample(exampleData[i]));
    }
    return(
      <div onDelete={this.deleteExample} >
        {exampleNodes}
      </div>
    );
  }
});

app.ExampleComponent = React.createClass({
  handleExampleSubmit: function(example) {
    this.props.data.create(example);
  },
  deleteExample: function(example_id) {
    var example = this.props.data.get(example_id);
    example.destroy(); // remove on server side
    this.props.data.remove(example); // remove from DOM
  },
  getInitialState: function () {
    var updateState = function () {
      this.setState({ data: _.clone(this.props.data.models) });
    };

    this.props.data.on('reset', updateState, this);
    this.props.data.on('add', updateState, this);
    this.props.data.on('remove', updateState, this);

    return { data: _.clone(this.props.data.models) };
  },
  render : function() {
    return(
      <div>
        <ExampleForm onCommentSubmit={this.handleExampleSubmit} />
        <ExampleList data={this.state.data} onDelete={this.deleteExample}/>
      </div>
    );
  }
});
