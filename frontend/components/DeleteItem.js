import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";
import styled from "styled-components";
const DELETE_ITEM_MUTAION = gql`
  mutation DELETE_ITEM_MUTAION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const DeleteButton = styled.button`
  font-weight: 800;
  color: ${props => props.theme.black};
  cursor: pointer;
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    console.log(data, payload);
    // 2. Filter the deleted itemout of the page
    data.items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_ITEMS_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTAION}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <DeleteButton
            onClick={() => {
              if (confirm("Are You sure you want to delete this item?")) {
                deleteItem().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </DeleteButton>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
