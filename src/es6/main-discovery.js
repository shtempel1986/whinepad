import Actions from "./components/Actions"

ReactDOM.render(
    <div>
        <h1>Discover Component!</h1>
        <h2>Actions</h2>
        <Actions onAction={type=> alert(type)}/>

    </div>,document.getElementById("discovery")
);