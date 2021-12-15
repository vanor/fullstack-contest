import { useState } from 'react';
import Datetime from 'react-datetime';
import { useDispatch } from 'react-redux';

import * as api from '../../api';

import { Wrapper } from "./Form.styles";
import "react-datetime/css/react-datetime.css";

const Form = () => {
    let log = {beginDate: '', endDate: '', description: ''};

    const [ isLoading, setIsLoading ] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (tag, value) => {
        if(tag === 'b')
            log.beginDate = value.format('YYYY-MM-DD HH:mm:ss');
        else if(tag === 'e')
            log.endDate = value.format('YYYY-MM-DD HH:mm:ss');
        else
            log.description = value;
    };

    const clear = e => {
        e.target.reset();
        document.querySelector("input[name='beginDate']").value = '';
        document.querySelector("input[name='endDate']").value = '';
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);

        api.createLog(log)
            .then(response => {
                setIsLoading(false);
                dispatch({ type: "RELOAD" });
                clear(e);
            })
            .catch(error => {
                setIsLoading(false);
            });
    };

    return (
        <Wrapper className="form-container">
            <form method="POST" onSubmit={e => handleSubmit(e)}>
                <div className="form-control">
                    <label htmlFor="beginDate">Start Date</label>
                    <Datetime className="form-control custom" onChange={date => handleChange('b', date)}
                        inputProps={{name: "beginDate", autoComplete: "off"}} />
                </div>
                <div className="form-control">
                    <label htmlFor="endDate">End Date</label>
                    <Datetime className="form-control custom" onChange={date => handleChange('e', date)}
                        inputProps={{name: "endDate", autoComplete: "off"}} />
                </div>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea rows={4} id="description" name="description" 
                        onInput={e => handleChange('d', e.target.value)}></textarea>
                </div>
                <div className="form-control">
                    <button type="submit">Save {isLoading ? <div className="loader"></div> : ''}</button>
                </div>
            </form>
        </Wrapper>
    );
}

export default Form;