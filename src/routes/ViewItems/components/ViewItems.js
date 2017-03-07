/**
 * Created by Okura on 19/02/2017.
 */
import React, {PropTypes} from 'react'
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import ItemList from './ItemList';


export const ViewItems = (props) => {
  const {loading, items} =  props.data;
  return (
    <div>
      {
        loading ? null : <ItemList items={items}/>
      }
    </div>
  )

}
ViewItems.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    items: PropTypes.array,
  }).isRequired,
}

const QueryItems = gql`
  query {
    items {
      title
      description
      configString
      deadline
      nextRequiredUpdate
    }
  }
`;
const ViewItemswithItems = graphql(QueryItems)(ViewItems);

export default ViewItemswithItems
