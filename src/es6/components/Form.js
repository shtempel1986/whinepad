import Rating from "./Rating";
import FormInput from "./FormInput";

class Form extends React.Component{
    getData(){
        let data ={};
        this.props.fields.forEach(field=>
            data[field.id] = this.refs[field.id].getValue()
        );
        return data;
    }

    render(){
        return (
            <form className="form">
                {this.props.fields.map(field =>{
                    const prefilled = this.props.initialData && this.props.initialData[field.id];
                    if (!this.props.readonly){
                        return (
                            <div className="form-row" key={field.id}>
                                <label className="form-label" htmlFor={field.id}>
                                    {field.label}:
                                </label>
                                <FormInput {...field} ref={field.id} defaultValue={prefilled}/>
                            </div>
                        );
                    }
                    if (!prefilled)
                        return null;
                    return (
                        <div className="form-row" key={field.id}>
                            <span className="form-label">
                                {field.label}:
                            </span>
                            {
                                field.type === "rating"
                                ? <Rating readonly={true} defaultValue={parseInt(prefilled, 10)}/>
                                : <div>{prefilled}</div>
                            }
                        </div>
                    );
                })}
            </form>
        );
    }
}

Form.PropTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
    })).isRequired,
    initialData: PropTypes.object,
    readonly: PropTypes.bool,
};

export default Form;