import Header from "../components/Header";

function Homepage(){
    return(
        <div /* conteiner pai*/>
            <Header/>

            <h1>{/*nome da categoria*/}</h1>

            <div /*conteiner dos produtos renderizados consumidos da API */>
                <ul>
                    <li>
                        {/*produtos consumidos pela api */}
                        
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Homepage;