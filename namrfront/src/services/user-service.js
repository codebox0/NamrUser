

const API = "http://localhost:8080/api/v1";



export const userList = () => {
    return fetch('/api/v1/users',{
        headers: {
            'Accept': 'application/json',
        }
    });
};

export const userRegister = (body) => {
    return fetch('/api/v1/user',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};

export const userUpdate = (body) => {
    return fetch(`/api/v1/user/${body.id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body.user),
    });
};

export const userDelete = (body) => {
    return fetch(`/api/v1/user/${body.id}`,{
        method: 'DELETE',
        // url: `/api/v1/user/${body.id}`,
        headers: {
            'Content-Type': 'application/json',
        }
    });
};

export const signIn = (body) => {
    return fetch({
        method: 'POST',
        url: `${API}/sign-in`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
};