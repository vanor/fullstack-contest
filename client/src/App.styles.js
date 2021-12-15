import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: columns;
    width: 80%;
    margin: 60px auto 0;

    .form-container {
        flex-basis: 300px;
        display: inline-block;
    }

    .logs-container {
        flex: 1;
        display: inline-block;
        margin-right: 5px;
    }
`;