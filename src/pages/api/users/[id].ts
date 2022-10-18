import {NextApiRequest, NextApiResponse} from "next";

export default (req: NextApiRequest, res:NextApiResponse)=>{
const {method} = req;

switch (method) {
    case 'GET':
        return res.json('Add user')
    case 'PUT':
        return res.json("updating user")
    case 'DELETE':
        return res.json('Deleting user')

    default:
        return res.status(400).json('metodo no habilitado');
        
}

};