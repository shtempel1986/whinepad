/**
 * Created by Павел on 16.04.2017.
 */
import Excel from "./components/Excel";
import Logo from "./components/Logo"

let headers = localStorage.getItem("headers"), data = localStorage.getItem("data");
if(!headers){
    headers = ['Title', 'Year', 'Rating', 'Comments'];
    data = [['Test', '2015', '3', 'meh']];
}

ReactDOM.render(
    <div>
        <h1>
            <Logo/>Welcome to Whinepad!
        </h1>
        <Excel headers={headers} initialData={data}/>
    </div>,
    document.getElementById("pad")
);