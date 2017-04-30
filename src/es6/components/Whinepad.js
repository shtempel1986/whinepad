import Button from "./Button";
import Dialog from "./Dialog";
import Excel from "./Excel";
import Form from "./Form";

class Whinepad extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.initialData,
            addNew: false,
        };
        this._preSearchData = null;
    }

    _addNewDialog(){
        this.setState({addNew: true});
    }

    _addNew (action){
        if(action==="dismiss"){
            this.setState({addNew: false});
            return ;
        }
        let data = Array.from(this.state.data);
        data.unshift(this.refs.form.getData());
        this.setState({
            addNew: false,
            data: data,
        });
        this._commitToStorage(data);
    }

    _onExcelDataChange(data){
        this.setState({data: data});
        this._commitToStorage(data);
    }
    _commitToStorage(data){
        localStorage.setItem("data", JSON.stringify(data));
    }

    _startSearching(){
        this._preSearchData = this.state.data;
    }

    _doneSearching(){
        this.setState({
            data: this._preSearchData,
        });
    }

    _search(e){
        const needle = e.target.value.toLowerCase();
        if(!needle){
            this.setState({data: this._preSearchData});
            return ;
        }
        const fields = this.props.schema.map(item => item.id),
            searchData = this._preSearchData.filter(row =>{
                for(let f = 0; f < fields.length; f++){
                    if (row[fields[f]].toString().toLowerCase().indexOf(needle) > -1){
                        return true;
                    }
                }
                return false;
            });
        this.setState({data: searchdata});
    }

    render(){
        return (
            <div className="whinepad">
                <div className="whinepad-toolbar">
                    <div className="whinepad-toolbar-add">
                        <Button
                            onClick={this._addNewDialog.bind(this)}
                            className="whinepad-toolbar-add-button"
                        > + add</Button>
                    </div>
                    <div className="whinepad-toolbar-search">
                        <input
                            placeholder="Search..."
                            onChange={this._search.bind(this)}
                            onFocus={this._startSearching.bind(this)}
                            onBlur={this._doneSearching.bind(this)} />
                    </div>
                </div>
                <div className="whinepad-datagrid">
                    <Excel
                        schema={this.props.schema}
                        initialData={this.state.data}
                        onDataChange={this._onExcelDataChange.bind(this)}
                    />
                </div>
                {this.state.addNew
                    ? <Dialog
                        modal={true}
                        header="Add new item"
                        confirmLabel="Add"
                        onAction={this._addNew.bind(this)}
                    >
                        <Form
                            ref="form"
                            fields={this.props.schema}
                        />
                    </Dialog>
                    : null}
            </div>
        );
    }
}

Whinepad.PropTypes ={
    schema : PropTypes.arrayOf(
        PropTypes.object
    ),
    initialData: PropTypes.arrayOf(
        PropTypes.object
    )
};

export default Whinepad;