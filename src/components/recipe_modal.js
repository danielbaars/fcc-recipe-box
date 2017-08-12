import React, { Component } from 'react';

export default class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      ingredients: this.props.ingredients
    };
  }
  onTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  onIngredientsChange(event) {
    this.setState({
      ingredients: event.target.value.split(',')
    });
  }
  onSaveClick() {
    const title = this.state.title;
    const ingredients = this.state.ingredients;
    this.props.saveRecipe(title, ingredients);
  }
  onCancelClick() {
    this.props.closeModal();
  }
  render() {
    return (
      <div>
        <div className="modal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{this.props.title ? 'Edit recipe' : 'Add recipe'}</h3>
                <button onClick={() => this.onCancelClick()} type="button" className="close">
                  <span>&times;</span>
                </button>
              </div>
                <div className="modal-body">
                  <div className="form-group">
                    <label>Recipe Title</label>
                    <input onChange={this.onTitleChange.bind(this)} value={this.state.title} placeholder="Title your recipe please..." className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Recipe Ingredients <span>(separate by comma)</span></label>
                    <textarea onChange={this.onIngredientsChange.bind(this)} value={this.state.ingredients} placeholder="Put your ingredients here" className="form-control" rows="3"/>
                  </div>
                </div>
                <div className="modal-footer">
                  <button onClick={() => this.onSaveClick()} type="button" className="btn btn-primary">Save Recipe</button>
                  <button onClick={() => this.onCancelClick()} type="button" className="btn btn-default">Cancel</button>
                </div>
            </div>
          </div>
        </div>
      <div className="modal-backdrop"></div>
      </div>
    );
  }
}
