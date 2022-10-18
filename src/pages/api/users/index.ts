import {NextApiRequest, NextApiResponse} from "next";
import { conn } from '../../../utils/database'

export default async (req: NextApiRequest, res:NextApiResponse)=>{
const {method, body} = req;

switch (method) {
    case 'GET':
        return res.json('Get user')
    case 'POST':
        try {
            const { names, apellidos } = body;
    
            const query =
              "INSERT INTO users(names, apellidos) VALUES ($1, $2) RETURNING *";
            const values = [names, apellidos];
    
            const response = await conn.query(query, values);
    
            return res.json(response.rows[0]);
          } catch (error: any) {
            return res.status(400).json({ message: error.message });
          }

    default:
        return res.status(400).json('metodo no habilitado');
        
}
};