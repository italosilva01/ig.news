import {NextApiRequest,NextApiResponse}from 'next';

// JWT (storage)
// Next Auth (Social)
// Cognito, Auth0


export default (request:NextApiRequest,response:NextApiResponse)=>{
    const users = [
        {id:1,name:'Diego'},
        {id:2,name:'Pablo'},
        {id:3,name:'Italo'},
    ]


    return response.json( users);
}