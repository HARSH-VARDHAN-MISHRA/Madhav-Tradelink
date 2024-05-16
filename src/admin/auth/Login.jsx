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
                window.location.href = "/admin/dashboard";
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
            <div className="row">
                <div className="container">
                    <div className="col-md-6 px-2 text-center mx-auto">
                        <form onSubmit={handleSubmit}>

                            <input type="email" value={formData.email} onChange={handleInputChange} name='email' className='form-input form-control mb-2' placeholder='Enter Email' />
                            <input type="password" value={formData.password} onChange={handleInputChange} name='password' className='form-input form-control mb-2' placeholder='Enter Password' />

                            <div className='buttons'>
                                <button className='btn btn-success px-4 py-2' type='submit'>LOGIN</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
