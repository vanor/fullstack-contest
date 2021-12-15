import moment from 'moment';

import { Wrapper } from './Log.styles';

const Log = ({ log }) => {
    return (
        <Wrapper>
            <div className="heading">
                {moment(log?.beginDate).format('YYYY-MM-DD HH:mm')} to {moment(log?.endDate).format('YYYY-MM-DD HH:mm')}
            </div>
            <div className="description">
                <div>Description:</div>
                {log?.description}
            </div>
        </Wrapper>
    );
}

export default Log;