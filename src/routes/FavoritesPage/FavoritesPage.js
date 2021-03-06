import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem'
import RecipeContext from '../../RecipeContext'

import './FavoritesPage.css'

export default class FavoritesList extends Component {
  static contextType = RecipeContext

  render() {

    if(this.context == null) {
      return <></>;
    }

    const { recipes = [] } = this.context

    return (
      <div className='favoritesList'>
        <ul className='favorites_list'>
          {recipes.map(recipe =>
            <FavoriteItem {...recipe} key={recipe.id} />
          )}
        </ul>
        <Link to={'/addRecipe'}>
          <button className='add btn'>Add favorite</button>
        </Link>
      </div>
    );
  }
}


