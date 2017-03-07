/**
 * Created by Okura on 03/03/2017.
 */

import React, {PropTypes} from 'react'
import ItemDetail from './ItemDetail';
import './ItemList.scss';


export const ItemList = (props) => {
  return(
  <div className="itemListContainer">
    {
      props.items.map((item_passed, index) => {
        return (<ItemDetail key={index} item={item_passed}/>);
      })
    }
  </div>
)}

ItemList.propTypes = {
  items: PropTypes.array
}

export default ItemList
