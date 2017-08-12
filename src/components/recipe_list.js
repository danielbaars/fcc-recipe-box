import _ from 'lodash';
import React, { Component } from 'react';

import RecipeItem from './recipe_item';
import RecipeModal from './recipe_modal';

export default class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: this.props.recipes,
      activeRecipe: {},
      showModal: false
    };
  }
  setActiveRecipe(id) {
    if (this.state.activeRecipe === this.state.recipes[id]) {
      this.setState({
        activeRecipe: {}
      });
    } else {
      this.setState({
        activeRecipe: this.state.recipes[id]
      });
    }
  }
  openModal() {
    this.setState({
      showModal: true
    });
  }
  closeModal() {
    const recipe = this.state.activeRecipe;
    if (recipe.title === '') {
      const newData = _.omit(this.state.recipes, recipe.id);
      this.setState({
        recipes: newData
      });
    }
    this.setState({
      activeRecipe: {},
      showModal: false
    });
  }
  addRecipe() {
    const id = Object.keys(this.state.recipes).length + 1;
    const newData = Object.assign(this.state.recipes, {[id]: {title: '', ingredients: [''], id: '' + id}});
    this.setState({
      recipes: newData,
      activeRecipe: this.state.recipes[id],
      showModal: true
    });
  }
  deleteRecipe(id) {
    const newData = _.omit(this.state.recipes, [id]);
    localStorage.setItem('recipes', JSON.stringify(newData));
    this.setState({
      recipes: newData
    });
  }
  saveRecipe(title, ingredients) {
    const recipes = this.state.recipes;
    const id = this.state.activeRecipe.id;
    const newData = Object.assign(recipes, {[id]: {title: title, ingredients: ingredients, id: '' + id}});
    this.setState({
      recipes: newData,
      activeRecipe: this.state.recipes[id],
      showModal: false
    });
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
  }
  renderList() {
    return _.map(this.state.recipes, item => {
      return (
        <RecipeItem setActiveRecipe={(id) => this.setActiveRecipe(id)} delete={(id) => this.deleteRecipe(id)} openModal={() => this.openModal()} id={item.id} title={item.title} ingredients={item.ingredients} active={this.state.activeRecipe === item} new={item.title === ''} key={'R' + item.id} />
      );
    });
  }
  render() {
    return (
      <div>
        <div className="recipe-list">
          <h1 className="page-header">Recipe Box</h1>
          {this.renderList()}
          <button onClick={() => this.addRecipe()} className="btn btn-primary add-button">Add recipe</button>
          {this.state.showModal ? <RecipeModal closeModal={() => this.closeModal()} saveRecipe={(title, ingredients) => this.saveRecipe(title, ingredients)} title={this.state.activeRecipe.title} ingredients={this.state.activeRecipe.ingredients} /> : null}
        </div>
      </div>
    );
  }
}
