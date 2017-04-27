const Actions = props =>
    <div className="actions">
        <span
            tabIndex="0"
            className="actions-info"
            title="More info"
            onClick={props.onAction.bind(null, "info")}>&#8505;</span>
        <span
            tabIndex="0"
            className="actions-edit"
            title="Edit"
            onClick={props.onAction.bind(null, "edit")}>&#10000;</span>
        <span
            tabIndex="0"
            className="actions-delete"
            title="delete"
            onClick={props.onAction.bind(null, "delete")}>x</span>
    </div>;

Actions.PropTipes = {
    onAction: PropTypes.func,
};

export default Actions;