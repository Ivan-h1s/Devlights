import userRepository from "../repositories/users.js";
import mailService from "../services/mail.js";

export const createUser = async (req, res) => {
    try {
        const user = await userRepository.createUser(req.body);
        res.json({user});
    } catch (error) {
        res.status(500).json({error});
    }    
}

export const getAllUsers = async (req, res) => {
    const users = await userRepository.getAllUsers();

    //todo: enviar mail
    mailService.sendMail(users);
    res.status(200).json({users});
};

export const getUserById = async (req, res) => {
    const user = await userRepository.getUserById(req.params.userId);

    res.json({user});
}

export const updateUser = async (req, res) => {
    try {
        const user = await userRepository.updateUser(req.body, req.params.userId);
        res.json({user});
    } catch (error) {
        res.status(500).json({error});
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = userRepository.deleteUser(req.params.userId);
        res.json({user});
    } catch (error) {
      res.status(500)  .json({error});
    }
}

export const createUserTasks = async(req, res) => {
    try {
        const tasks = await userRepository.createUserTasks(req.body, req.params.userId);
        res.json({tasks})
    } catch (error) {
        res.status(500).json({error});
    }
}

export const getAllTasksByUserId = async (req, res) => {
    try {
        const tasks = await userRepository.getAllUserTasksById(req.params.userId);
        res.json({tasks});
    } catch (error) {
        res.status(500).json({error});
    }
}