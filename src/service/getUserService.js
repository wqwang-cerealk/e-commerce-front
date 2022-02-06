

const PROFILE_API = 'https://e-commerce-platform-965.herokuapp.com/api/profile';
export const getProfile = (dispatch) =>
        fetch(PROFILE_API, {
            method: 'POST',
            credentials: 'include'
        }).then(res => res.json())
            .then(user =>
                dispatch({
                type: 'fetch-current-user',
                user
            }))



