import { useQuery, gql } from "@apollo/client";
import styles from "../../../styles/Home.module.css";

const QUERY = gql`
  query {
    tails {
      description
      title
    }
  }
`;

export const TailsTable =() => {
  const { data, loading, error } = useQuery(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const tails = data.tails;

  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
      {tails.map(tail => {
        return (
          <tr>
            <td>{tail.title}</td>
            <td>{tail.description}</td>
          </tr>
        )
      })}
    </table>
  );
}

export default TailsTable;