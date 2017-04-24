/**
 * Created by Павел on 24.04.2017.
 */
export default class Excel extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Excel";
        this.state = {
            data: this.props.initialData,
            sortBy: null,
            descending: false,
            search: false
        };
        this._preSearchData = null;
        this._log = [];
        this._sort = this._sort.bind(this);
        this._showEditor = this._showEditor.bind(this);
        // this._toggleSearch = this._toggleSearch.bind(this);
        this._save = this._save.bind(this);
        this._search = this._search.bind(this);
        this._logSetState = this._logSetState.bind(this);
    }

    _sort(e) {
        let column = e.target.cellIndex;
        let data = Array.from(this.state.data);
        let descending = this.state.sortBy === column && !this.state.descending;
        data.sort((a, b) => {
            return descending ?
                a[column] < b[column] ? 1 : -1 : a[column] > b[column] ? 1 : -1;
        });
        this._logSetState({
            data: data,
            sortBy: column,
            descending: descending,
            edit: null
        });
    }

    _showEditor(e) {
        this._logSetState({
            edit: {
                row: parseInt(e.target.dataset.row, 10),
                cell: e.target.cellIndex
            }
        });
    }

    _save(e) {
        e.preventDefault();
        let input = e.target.firstChild, data = Array.from(this.state.data);
        data[this.state.edit.row][this.state.edit.cell] = input.value;
        this._logSetState({
            edit: null,
            data: data
        });
    }

    _renderTable() {
        return (
            <table>
                <thead>
                <tr>
                    {this.props.headers.map((title, id) => {
                        if (this.state.sortBy === id) title += this.state.descending ? ' \u2191' : ' \u2193';
                        return <th key={id} onClick={this._sort}>{title}</th>
                    })}
                </tr>
                </thead>
                <tbody onDoubleClick={this._showEditor}>
                {this._renderSearch()}
                {this.state.data.map((row, rowId) => {
                    return <tr key={rowId}>
                        {row.map((cell, id) => {
                            let content = cell, edit = this.state.edit;
                            if (edit && edit.row === rowId && edit.cell === id) {
                                content =
                                    <form onSubmit={this._save}>
                                        <input type="text" defaultValue={content}/>
                                    </form>;
                            }
                            return <td key={id} data-row={rowId}>
                                {content}
                            </td>
                        })}
                    </tr>
                })}
                </tbody>
            </table>);
    }

    _renderToolbar() {
        return (
            <div className="toolbar">
                <button onClick={this._toggleSearch.bind(this)}>Search</button>
                <a href="data.json" onClick={this._download.bind(this, "json")}>Export JSON</a>
                <a href="data.csv" onClick={this._download.bind(this, "csv")}>Export CSV</a>
            </div>
        );
    }

    _download(format, ev) {
        let contents = format === "json"
                ? JSON.stringify(this.state.data)
                : this.state.data.reduce((result, row) => {
                    return result
                        + row.reduce((rowResult, cell, idx) => {
                            return rowResult
                                + '"'
                                + cell.replace(/"/g, '""')
                                + '"'
                                + (idx < row.length - 1 ? "," : "");
                        }, "")
                        + "\n";
                }, ""),
            URL = window.URL || window.webkitURL,
            blob = new Blob([contents], {type: `text/${format}`});
        ev.target.href = URL.createObjectURL(blob);
        ev.target.download = `data.${format}`;
    }

    _renderSearch() {
        if (!this.state.search) {
            return false;
        }
        return (
            <tr onChange={this._search}>
                {this.props.headers.map((_ignore, id) => {
                    return (
                        <td key={id}>
                            <input type="text" data-id={id}/>
                        </td>
                    )
                })}
            </tr>
        );
    }

    _toggleSearch() {
        if (this.state.search) {
            this._logSetState({
                data: this._preSearchData,
                search: false
            });
            this._preSearchData = null;
        } else {
            this._preSearchData = this.state.data;
            this._logSetState({
                search: true
            });
        }
    }

    _search(e) {
        let needle = e.target.value.toLowerCase(), id = e.target.dataset.id, searchData;
        if (!needle) {
            this._logSetState({
                data: this._preSearchData
            });
        }
        searchData = this._preSearchData.filter((row) => {
            return row[id].toString().toLowerCase().indexOf(needle) > -1;
        });
        this._logSetState({
            data: searchData
        });
    }

    _logSetState(newState) {
        this._log.push(JSON.parse(JSON.stringify(
            this._log.length === 0 ? this.state : newState
        )));
        this.setState(newState);
    }

    componentDidMount() {
        document.onkeydown = function (e) {
            if (e.shiftKey && e.altKey && e.keyCode === 82) {
                this._replay();
            }
        }.bind(this)
    }

    _replay() {
        if (this._log.length === 0) {
            console.warn("No state ro replay yet");
            return;
        }
        let idx = -1,
            interval = setInterval(function () {
                idx++;
                if (idx === this._log.length - 1) {
                    clearInterval(interval);
                }
                this.setState(this._log[idx]);
            }.bind(this), 1000);
    }

    render() {
        return (
            <div className="Excel">
                {this._renderToolbar()}
                {this._renderTable()}
            </div>
        )
    }
}
Excel.PropTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string
    ),
    initialData: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.string
        )
    )
};