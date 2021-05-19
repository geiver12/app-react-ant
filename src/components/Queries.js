
import { useState } from "react";
import { gql} from '@apollo/client';

import Characters from "./Characters";
import Dimension from "./Dimension";
import './Queries.css'




function Queries({ search, query = "GET_CHARACTERS" }) {
  const [pages, setPages] = useState(1);

  const GET_CHARACTERS = gql`
query {
    characters(page: ${pages},filter: { name: "${search}" }) {
      info {
        count,
        pages
      }
      results {
        id,name,image,status,species,type,gender,created,origin{name},location{name,id,dimension},episode{name}
      }
    }
  }
`;

  const GET_EPISODES = gql`
    query {
      episodes(page: ${pages},filter: { name: "${search}" }) {
        info {
          count
          pages
        }
        results {
            name
            id
            air_date
            episode
            characters{id,name,image,status,species,type,gender,created}
      
        }
      }
    }`;

  const GET_LOCATIONS = gql`
query {
  locations(page: ${pages},filter: { name: "${search}" }) {
    info {
      count
      pages
    }
    results {
        name
        id
        dimension
        type
      	residents{id,name,image,status,species,type,gender,created}
  
    }
  }
}`;



  return (
    <>
      {
        query === "GET_CHARACTERS" &&
        <Characters
          pages={pages} setPages={setPages} GET_CHARACTERS={GET_CHARACTERS}
        />
      }
      {
        query === "GET_LOCATIONS" &&
        <Dimension
          pages={pages} setPages={setPages} GET_QUERY={GET_LOCATIONS}
        />
      }
      {
        query === "GET_EPISODES" &&
        < Dimension
          pages={pages} setPages={setPages} GET_QUERY={GET_EPISODES}
        />
      }
    </>
  );
}

export default Queries;