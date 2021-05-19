
import { useQuery } from '@apollo/client';
import { Pagination } from 'antd';

import CharacterSkeleton from "./CharacterSkeleton";
import ErrorMessage from "./ErrorMessage";
import ModalCart from './ModalCart'


const Characters = ({ pages, setPages, GET_CHARACTERS }) => {

    function onShowSizeChange(current, pageSize) {
        setPages(current)
    }

    const { loading, error, data } = useQuery(GET_CHARACTERS, {
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

            {data &&
                data.characters.results.map(
                    (data) => (
                        <ModalCart data={data} key={data.id} />
                    )
                )
            }

            {data.characters && <Pagination className="pagination"
                defaultCurrent={pages}
                defaultPageSize={20}
                total={data.characters.info.count}
                onChange={onShowSizeChange} />}
        </div>
    );
}

export default Characters;