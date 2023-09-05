import gql from "graphql-tag";

export const GET_LATEST_TRANSACTIONS = gql`
  query {
    swaps(first: 5, orderBy: timestamp, orderDirection: desc) {
      timestamp
      tokenAmountIn
      tokenAmountOut
      tokenIn
      tokenOut
    }
  }
`;
