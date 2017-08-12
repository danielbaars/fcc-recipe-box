import _ from 'lodash';
import React, { Component } from 'react';

import IngredientsList from './ingredients_list';

export default class RecipeItem extends Component {
  handleClick(id) {
    this.props.setActiveRecipe(id);
  }
  render() {
    return (
      <div className="card">
        <div className="card-header" onClick={() => this.handleClick(this.props.id)}><h2 className="recipe-title">{this.props.title}</h2></div>
        <IngredientsList id={this.props.id} title={this.props.title} ingredients={this.props.ingredients} active={this.props.active} delete={this.props.delete} openModal={this.props.openModal} />
      </div>
    );
  }
}
