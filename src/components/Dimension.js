

import { useQuery } from '@apollo/client';
import { Pagination} from 'antd';
import CharacterSkeleton from "./CharacterSkeleton";
import ErrorMessage from "./ErrorMessage";
import './Dimension.css'



const Dimension = ({ pages, setPages, GET_QUERY }) => {

    

    function onShowSizeChange(current, pageSize) {
        setPages(current)
    }

  
    const { loading, error, data } = useQuery(GET_QUERY, {
        variables: { language: 'english' },
    });

    if (loading)
        return (
            <div className="container">
                <CharacterSkeleton />
                <CharacterSkeleton />
                <CharacterSkeleton />
                <CharacterSkeleton />
                <CharacterSkeleton />
            </div>
        );

    if (error) return <ErrorMessage />;

    return (
        <div className="container">

            { data.locations &&
                data.locations.results.map((location, i) =>
                    <>
                        <div key={i} className="card-dimension">

                            <h1 >Location:{location.name} </h1>
                            <h3 >Dimension: {location.dimension} </h3>
                            <h4 >Type: {location.type} </h4>
                            {location.residents.map(
                                (data) =>
                                    <div className="card-modal">
                                        <img src={data.image} alt={data.id} />
                                        <p>{data.name}</p>
                                    </div>
                            )
                            }
                        </div>
                    </>
                )
            }

            {data.locations &&
                <Pagination className="pagination"
                    defaultCurrent={pages}
                    defaultPageSize={20}
                    total={data.locations.info.count}
                    onChange={onShowSizeChange} />
            }

            { data.episodes &&
                data.episodes.results.map((episode, i) =>
                    <>
                        <div key={i}>

                            <h1 >Name:{episode.name} </h1>
                            <h3 >Episode: {episode.episode} </h3>
                            <h4 >Air Date: {episode.air_date} </h4>
                            {episode.characters.map(
                                (data) =>
                                    <div className="card-modal">
                                        <img src={data.image} alt={data.id} />
                                        <p>{data.name}</p>
                                    </div>
                            )
                            }
                        </div>
                    </>
                )
            }

            { data.episodes &&
                <Pagination className="pagination"
                    defaultCurrent={pages}
                    defaultPageSize={20}
                    total={data.episodes.info.count}
                    onChange={onShowSizeChange} />
            }


        </div>
    )
}

export default Dimension;