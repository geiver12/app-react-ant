
import { Skeleton, Card } from 'antd';

const { Meta } = Card;

const gridStyle = {
    width: '20%',
    display: 'inline-block',
    border: '1px solid gray',
    padding: '1%'
};

const CharacterSkeleton = () => {
    return (
        <div style={gridStyle}>
            <Skeleton active avatar>
                <Card
                    hoverable
                    style={{ width: '100%' }}
                >
                    <Meta title description />
                </Card>
            </Skeleton>
        </div>
    )
}

export default CharacterSkeleton;