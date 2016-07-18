var Note = React.createClass({
  edit: function(){
    this.setState({editing: true});
  },
  remove: function(){
    this.props.onRemove(this.props.index);
  },
  save: function(){
    this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
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
      ]
    };
  },
  propTypes: {
    count: function(props, propName){
      if(typeof props[propName] !== "number")
        return new Error('The count property must be a number');
    }
  },
  add: function(text){
    var arr = this.state.notes
    arr.push(text);
    this.setState({notes: arr});
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
  },
  eachNote: function(note, i){
    return (
      <Note key={i}
        index={i}
        onChange={this.update}
        onRemove={this.remove}
      >{note}</Note>
    )
  },
  render: function(){
    return (
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.add.bind(null, 'New Note')} />
      </div>
    );
  }
})

















React.render(<Board count={10} />, document.getElementById('react-container'));
