import Button from "./Button";

class Dialog extends React.Component {

    componentWillUnmount() {
        document.body.classList.remove("dialog-modal-open");
    }

    componentDidMount() {
        document.body.classList.add("dialog-modal-open");
    }

    render(){
        return (
            <div className={this.props.modal ? "dialog dialog-modal": "dialog"}>
                <div className={this.props.modal ? "dialog-modal-wrap": null}>
                    <div className="dialog-header">{this.props.header}</div>
                    <div className="dialog-body">{this.props.children}</div>
                    <div className="dialog-footer">
                        {this.props.hasCancel
                            ?<span
                                className="dialog-dismiss"
                                onClick={this.props.onAction.bind(this, "dismiss")}
                            >Cancel</span>
                            :null}
                        <Button onClick={this.props.onAction.bind(this,
                            this.props.hasCancel? "confirm":"dismiss")}>{this.props.confirmLabel}</Button>
                    </div>
                </div>
            </div>
        );
    }
}

Dialog.PropTypes = {
    header: PropTypes.string.isRequired,
    confirmLabel: PropTypes.string,
    modal: PropTypes.bool,
    onAction: PropTypes.func,
    hasCancel: PropTypes.bool,
};

Dialog.defaultProps = {
    confirmLabel: "Ok",
    modal: "False",
    onAction: () => {
    },
    hasCancel: true,
};

export default Dialog;