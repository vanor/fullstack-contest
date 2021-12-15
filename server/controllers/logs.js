import { DBLog } from '../models/index.js';

export const getLogs = async (req, res) => {
    try{
        let logs = await DBLog.findAll({order: [['beginDate', 'DESC']]});
        res.status(200).json(logs);

    }catch(error){
        res.status(404).json({message:  error.message});
    }
}

export const createLog = async (req, res) => {
    try{
        let log = req.body;
        console.log('Log: ', log);
        if(!log.beginDate || !log.endDate){
            res.status(400).json({message: 'beginDate ou endDate manquantes'});
            return;
        }

        let savedLog = await DBLog.create(log);
        res.status(201).json(savedLog);

    }catch(error){
        res.status(409).json({message:  error.message});
    }
}
