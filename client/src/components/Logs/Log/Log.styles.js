import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 10px 6px;
    border-radius: 5px;
    padding: 10px;
    background-image: linear-gradient(#aaa, #aaa);

    .heading{
        font-size: 13px;
        font-weight: bold;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 2px solid #444;
    }

    .description{
        font-size: 18px;

        div{
            font-weight: bold;
            margin-bottom: 8px;
        }
    }
`;