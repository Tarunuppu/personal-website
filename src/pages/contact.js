import React, { Component } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import GmailIcon from '../assets/gmail.png';
import Waving from '../assets/waving-hand.png';
import LinkedInIcon from '../assets/linkedin.png';
import GitHubIcon from '../assets/github.png';


const Template = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  &.tablet{
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
    position: relative;
    top: -5vw;
    width: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-size: 5vw;
    padding-left: 20%;
    &.tablet{
        padding-left: 0px;
        width: 100%;
        height: 30%;
        align-items: center;
        justify-content: end;
    }
    .title{
        margin-bottom: 20px;
    }
    .description{
        font-size: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img{
            width: 50px;
            height: 50px;
        }
    }
`

const RightContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 30px;
    &.tablet{
        align-items: center;
        width: 100%;
        height: 70%;
        justify-content: start;
    }
`

const ContactDetails = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: center;
    max-width: 450px;
    img{
      width: 50px;
      height: 50px;
      margin: 10px;
    }
`
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 80%;
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 15px;
    color: white;
    display: flex;
    flex-direction: column;
  }
  
  input, textarea {
    margin-top: 5px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #FFEDFA;
  }
  
  textarea {
    height: 120px;
  }
  
  button {
    background-color: #D76C82;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
    
    &:hover {
      background-color: #B03052;
    }
  }
  
  .form-status {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
  }
  
  .success {
    background-color: #d4edda;
    color: #155724;
  }
  
  .error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            formStatus: null
        };
        this.formRef = React.createRef();
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        const templateParams = {
            from_name: this.state.name,
            from_email: this.state.email,
            message: this.state.message
        };
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                    formStatus: 'success'
                });
                setTimeout(() => {
                    this.setState({ formStatus: null });
                }, 5000);
            })
            .catch((error) => {
                this.setState({ formStatus: 'error' });
                setTimeout(() => {
                    this.setState({ formStatus: null });
                }, 5000);
            });
    }

    render() {
        const { name, email, message, formStatus } = this.state;
        const { isTablet } = this.props;
        return (
            <Template className={`${isTablet ? 'tablet' : ''}`}>
                <LeftContainer className={`${isTablet ? 'tablet' : ''}`}>
                    <div className='title'>Contact</div>
                    <div className='description'>Love to here from you,</div>
                    <div className='description'>Get in touch <img src={Waving} /></div>
                </LeftContainer>
                <RightContainer className={`${isTablet ? 'tablet' : ''}`}>
                    <FormContainer>
                        <form ref={this.formRef} onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Email:
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </label>
                            <label>
                                Message:
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={this.handleInputChange}
                                    required
                                />
                            </label>
                            <button type="submit">Send</button>

                            {formStatus === 'success' && (
                                <div className="form-status success">
                                    Message sent successfully!
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="form-status error">
                                    Failed to send message. Please try again.
                                </div>
                            )}
                        </form>
                    </FormContainer>
                    <ContactDetails>
                        <a href="https://www.linkedin.com/in/tarunuppu/" target="_blank">
                            <img src={LinkedInIcon} alt="linkedIn" />
                        </a>
                        <a href="mailto:utarun.svct@gmail.com" target="_blank">
                            <img src={GmailIcon} alt="email" />
                        </a>
                        <a href="https://github.com/Tarunuppu/" target="_blank">
                            <img src={GitHubIcon} alt="github" />
                        </a>
                    </ContactDetails>
                </RightContainer>
            </Template>
        );
    }
}

export default Contact;