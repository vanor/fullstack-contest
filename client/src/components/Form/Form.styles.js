import styled from 'styled-components';

export const Wrapper = styled.div`
    form{
        padding: 5px;
        background-color: #f7f7f7;
        border-radius: 5px;
    }

    div.form-control{
        margin: 8px;
    }

    div.form-control.custom{
        margin: unset;
    }

    div.form-control > label {
        margin-bottom: 0.5rem;
        display: inline-block;
    }

    div.form-control > input, div.form-control > textarea {
        display: block;
        width: 100%;
        padding: 5px;
        line-height: 1.5;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        appearance: none;
        border-radius: 0.25rem;
        box-sizing: border-box;
        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    div.form-control > input:focus, div.form-control > textarea:focus {
        border-color: #ced4da;
        outline: 0;
    }

    div.form-control > button {
        cursor: pointer;
        color: #fff;
        background-color: #398935;
        border-color: #ddd;
        display: inline-block;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }

    .loader{
        display: inline-block;
        border: 3px solid #f3f3f3;
        border-radius: 50%;
        border-top: 3px solid #3498db;
        width: 10px;
        height: 10px;
        -webkit-animation: spin 1s linear infinite;
        animation: spin 1s linear infinite;
    }

    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;