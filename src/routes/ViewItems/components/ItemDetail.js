/**
 * Created by Okura on 02/03/2017.
 */

import React, {PropTypes} from 'react'
import './ItemDetail.scss'

export const ItemDetail = (props) => {
  const {item} = props;

  return (
    <div className="itemContainer">
      <div>
        {item.title}
      </div>
      <div>
        {item.description}
      </div>
    </div>
  )
}
ItemDetail.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
}

export default ItemDetail

