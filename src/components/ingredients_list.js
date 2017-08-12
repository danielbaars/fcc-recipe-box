import React, { Component } from 'react';

export default class IngredientsList extends Component {
  onDeleteClick(id) {
    this.props.delete(id);
  }
  onEditClick() {
    this.props.openModal();
  }
  render() {
    if(!this.props.active) {
      return null;
    }
    const ingredients = this.props.ingredients.map((ingredient, i) => {
      return (
        <li className="ingredient-item" key={i}>{ingredient}</li>
      );
    });
    return (
      <div>
        <div className={"card-block recipe-content"}>
          <h3 className="ingredients-header">Ingredients:</h3>
          <ul className="ingredients-list">
            {ingredients}
          </ul>
          <button onClick={() => this.onDeleteClick(this.props.id)} className="btn btn-danger btn-sm delete-button">Delete</button>
          <button onClick={() => this.onEditClick(this.props.openModal)} className="btn btn-default btn-sm">Edit</button>
        </div>
      </div>
    );
  }
}
