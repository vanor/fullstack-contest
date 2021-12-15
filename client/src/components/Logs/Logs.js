import { useSelector } from "react-redux";

import Log from "./Log/Log";

import { Wrapper } from "./Logs.styles";

const Logs = () => {
    const logs = useSelector(state => state.logs);

    return (
        <Wrapper className="logs-container">
            <div className="list">
                <h2>Logs</h2>
                {!logs?.length ? <p>Loading...</p> : logs?.map(log => <Log key={log.id} log={log} />)}
            </div>
        </Wrapper>
    );
}

export default Logs;