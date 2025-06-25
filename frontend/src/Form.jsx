import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';


const Form = ( {setformdata} ) => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setformdata(data)
        reset()
    };

    const password = watch("password");

    return (
        <StyledWrapper>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <p className="title">Register</p>
                <p className="message">Signup now and get full access to our app.</p>

                <div className="flex">
                    <label>
                        <input
                            className="input"
                            type="text"
                            {...register("firstname", { required: "Last name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                            placeholder=""
                        />
                        <span>Firstname</span>
                        {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname.message}</p>}
                    </label>

                    <label>
                        <input
                            className="input"
                            type="text"
                            {...register("lastname", { required: "Last name is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                            placeholder=""
                        />
                        <span>Lastname</span>
                        {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname.message}</p>}
                    </label>
                </div>

                <label>
                    <input
                        className="input"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder=""
                    />
                    <span>Email</span>
                    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                </label>

                <label>
                    <input
                        className="input"
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Minimum 6 characters" },
                        })}
                        placeholder=""
                    />
                    <span>Password</span>
                    {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
                </label>

                <label>
                    <input
                        className="input"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Please confirm password",
                            pattern: {
                                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                message: "Must include one uppercase letter and one special character",
                            },
                            validate: (value) => value === password || "Passwords do not match",
                        })}
                        placeholder=""
                    />
                    <span>Confirm password</span>
                    {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
                </label>

                <button className="submit" type="submit">Submit</button>
                <p className="signin">Already have an account? <a href="#">Signin</a></p>
            </form>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 450px;
    padding: 20px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 28px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default Form;
