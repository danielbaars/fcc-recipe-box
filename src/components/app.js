import React, { Component } from 'react';

import testData from './test_data';
import RecipeList from './recipe_list';

if (JSON.parse(localStorage.getItem('recipes')) === null) {
  const initialData = Object.assign(testData, JSON.parse(localStorage.getItem('recipes')));
  localStorage.setItem('recipes', JSON.stringify(initialData));
}

let recipes = JSON.parse(localStorage.getItem('recipes')) || {};

export default class App extends Component {
  render() {
    return (
      <div>
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}
