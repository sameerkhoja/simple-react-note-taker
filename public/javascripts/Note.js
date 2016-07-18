var Note = React.createClass({
  edit: function(){
    this.setState({editing: true});
  },
  remove: function(){
    alert("removing note");
  },
  save: function(){
      var val = this.refs.newText.getDOMNode().value;
      alert("TODO: save note value" + val);
     this.setState({editing: false});
  },
  getInitialState: function(){
    return {editing: false};
  },
  renderDisplay: function(){
    return (
      <div className="note">
        <p>{this.props.children}</p>
        <span>
          <button onClick={this.edit} className="btn btn-primary glyphicon glyphicon-pencil"/>
          <button onClick={this.remove} className="btn btn-danger glyphicon glyphicon-trash"/>
        </span>
      </div>
    );
  },
  renderForm: function(){
    return(
      <div className="note">
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk"></button>
      </div>
    );
  },
  render: function(){
    if(this.state.editing)
      return this.renderForm();
    else {
      return this.renderDisplay();
    }
  }
});

var Board = React.createClass({
  getInitialState: function(){
    return {
      notes: [
        "Call Sahil",
        "get paper",
        "react is dope",
        "wtf how is this working"
      ]
    };
  },
  propTypes: {
    count: function(props, propName){
      if(typeof props[propName] !== "number")
        return new Error('The count property must be a number');
    }
  },
  update: function(newText, i){
    var arr = this.state.notes;
    arr[i] = newText;
    this.setState({notes: arr});
  },
  remove: function(i){
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({notes: arr});
  }
  render: function(){
    return (
      <div className="board">
        {this.state.notes.map(function(note, i){
          return(
            <Note key={i}>{note}</Note>
          );
        })}
      </div>
    );
  }
})

React.render(<Board count={10} />, document.getElementById('react-container'));
