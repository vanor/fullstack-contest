import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as api from './api';

import Form from "./components/Form/Form";
import Logs from "./components/Logs/Logs";

import { Wrapper } from "./App.styles";

const App = () => {
    const dispatch = useDispatch();
    const reload = useSelector(state => state.touchToReload);

    useEffect(() => {
        api.fetchLogs()
            .then(response => {
                dispatch({type: "FETCH_LOGS", payload: response.data});
                console.log(reload);
            });
    }, [reload, dispatch]);

    return (
        <Wrapper>
            <Logs />
            <Form />
        </Wrapper>
    );
}

export default App;