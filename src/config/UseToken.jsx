export const getUser=()=>{
    const userStr=localStorage.getItem("userId");
    if (userStr) return JSON.parse(userStr);
    else return null;
}

// return tocken from session storage
export const getToken=()=>{
    return localStorage.getItem("jwtToken") || null;
}