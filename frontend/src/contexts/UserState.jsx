import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import { UserContext } from './Contexts';
import { toast } from 'react-toastify';
import { redirect, useNavigate } from 'react-router-dom';

const defaultUsers = [{
    username: 'admin',
    email: 'admin@gmail.com',
    password: 'admin'
}]

const UserState = ({ children }) => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(defaultUsers);
    const nav = useNavigate()

    const login = async (username, password) => {
        try {
            // const response = await axios.post('/api/users/login', { username, password });
            let flag = false;
            users.map(user => {
                if (user.username === username && user.password === password) {
                    setUser(user);
                    toast.success('Login successful');
                    flag = true;
                    nav('/')



                }
            })
            if (!flag) {

                toast.error('Login failed');
            }



        } catch (error) {
            console.log('Login failed:', error.response.data.message);
        }
    };

    const signup = async (username, email, password, rePassword) => {
        if (password !== rePassword) {
            console.log('Passwords do not match');
            toast.error('Passwords do not match');
            return;
        }
        let flag = false;
        users.map(user => {
            if (user.username === username) {
                console.log('Username already exists');
                toast.error('Username already exists');
                flag = true;
                return;
            }
            if (user.email === email) {
                console.log('Email already exists');
                toast.error('Email already exists');
                flag = true;
                return;
            }
        })
        if (flag) {
            return;
        }

        try {
            // const response = await axios.post('/api/users/add', { username, email, password });
            const newUser = {
                username,
                email,
                password
            }
            setUsers([...users, newUser])
            setUser(newUser)


            console.log('Signup successful');
            toast.success('Signup successful');
            nav('/')
        } catch (error) {
            console.log('Signup failed:', error.response.data.message);
        }
    };



    const logout = () => {
        setUser(null);
        toast.success('Logout successful');
    };

    return (
        <UserContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserState;
