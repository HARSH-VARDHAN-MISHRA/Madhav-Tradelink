import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const Email = "admin@gmail.com";
            const Password = "1";
            if (formData.email === Email && formData.password === Password) {
                alert("Login Success");
                setIsAdmin(true);
                sessionStorage.setItem('admin', true); // Storing login status
                window.location.href = "/";
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="email" value={formData.email} onChange={handleInputChange} name='email' className='form-input form-control' placeholder='Enter Email' />
                <input type="password" value={formData.password} onChange={handleInputChange} name='password' className='form-input form-control' placeholder='Enter Password' />

                <div className='buttons'>
                    <button className='btn btn-success' type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
