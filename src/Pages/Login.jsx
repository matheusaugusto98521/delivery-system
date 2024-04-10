import 'bootstrap/dist/css/bootstrap.min.css';
import { AGlobal, GlobalButton } from "../Styles/GlobalStyledComponents";
import { InputLogin, LoginCredentials, LoginPage } from "../Styles/loginStyledComponents";

function Login(){
    return(
        <LoginPage className='login-page'>

            <div className='logo-website'>
                <img src='images/logo-website-delivery.png' alt='logo-letras' style={{width : "50%"}}></img>
                
            </div>
            
            <LoginCredentials className='login-credentials'>
                <InputLogin
                    type="text"
                    name="username"
                    placeholder="Username"
                />

                <InputLogin
                    type="password"
                    name="senha"
                    placeholder="Senha"
                />

                <GlobalButton id='button-login' className="btn btn-primary">
                    Login
                </GlobalButton>

                <p style={{margin : "15px", color : "#fff"}}>Ainda não se cadastrou? <AGlobal href='#'>Cadastre-se</AGlobal></p>
            </LoginCredentials>
        </LoginPage>
    );
}

export default Login;