import Form from "./components/Form"

ReactDOM.render(
    <div>
        <h1>Discover Component!</h1>
        <h2>Form </h2>
        <Form
            fields={[
                {label: 'Rating', type: 'rating', id: 'rateme'},
                {label: 'Greetings', id: 'freetext'},
            ]}
            initialData={ {rateme: 4, freetext: 'Hello'} } />

    </div>,document.getElementById("discovery")
);