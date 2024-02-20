import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3000/internmembers" });

export const getInterns = async () => {
    try {
        const response = await instance.get("/");
        return response.data;
    } catch (error) {
        return error;
    }
}

export const addIntern = async (intern) => {
    try {
        const response = await instance.post("/", intern);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const getIntern = async (id) => {
    try {
        const response = await instance.get(`/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const updateIntern = async (id, intern) => {
    try {
        const response = await instance.put(`/${id}`, intern);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const deleteIntern = async (id) => {
    try {
        const response = await instance.delete(`/${id}`);
        return response.data;
    } catch (error) {
        return error;
    }
}