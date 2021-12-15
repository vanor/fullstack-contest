const reducer = (state = { logs: [], touchToReload: false }, action) => {
    switch(action.type){
        case "FETCH_LOGS":
            return { ...state, logs: action.payload };

        case "RELOAD":
            return { ...state, touchToReload: !state.touchToReload };
            
        default:
            return state.touchToReload;
    }
}

export default reducer;