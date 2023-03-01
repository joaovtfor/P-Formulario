import './Form.css';
import {useState} from 'react';

const Form = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Formulário enviado');
        console.log(name, email, phone);

        setName ("");
        setEmail ("");
        setPhone ("");
    };
  
    return (
    <div>
        <div id="container">
        <form onSubmit={handleSubmit}>
            <h1>Dados pessoais</h1>
            <div id="f1">
                <label>
                    <input type="text" 
                           name="name" 
                           placeholder="Nome"
                           onChange={(e) => setName(e.target.value)}
                           id="box"/>
                </label>
            </div>
            <div id="f1">
                <label>
                    <input type="email" 
                           name="email" 
                           placeholder="E-mail"
                           onChange={(e) => setEmail(e.target.value)}
                           id="box"/>
                </label>
            </div>
            <div id="f1">
                <label>
                    <input type="text" 
                           name="phone" 
                           placeholder="Telefone"
                           onChange={(e) => setPhone(e.target.value)}
                           id="box"/>
                </label>
            </div>
                <input type="submit" value="ENVIAR" id="button"/>
        </form>
        </div>
    </div>
  );
};

export default Form;