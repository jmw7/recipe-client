import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import RecipeContext from '../RecipeContext'
import PropTypes from 'prop-types'
import { deleteRecipe } from '../recipeHelper'

import './FavoriteItem.css'

export default class FavoriteItem extends Component {
  static contextType = RecipeContext;

  render() {

    return (
      <div className='favoriteItem'>
        <li key={this.props.id}>
          <Link to={`/catalog/${this.props.id}`}>
            <h2>{this.props.name}</h2>
          </Link>
          <button
            className='deleteRecipe'
            onClick={() => {
              deleteRecipe(this.props.id, this.context.deleteRecipe)
            }}>
            Delete Recipe
          </button>
        </li>
      </div>
    );
  }
}

FavoriteItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string
}