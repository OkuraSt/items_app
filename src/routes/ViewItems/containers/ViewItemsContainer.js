/**
 * Created by Okura on 18/02/2017.
 */
import { connect } from 'react-redux'
/*
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const list_items = gql`
query{
  items {
    Titulo
    Descripcion
    Updates {
      Descripcion
      Tipo
    }
  }
}
`;
*/
import ViewItems from '../components/ViewItems'

//export default graphql(list_items)(ViewItems)
export default ViewItems
