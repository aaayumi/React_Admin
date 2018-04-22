import React from 'react'
import Dropzone from 'react-dropzone'

class Basic extends React.Component {
    constructor() {
        super()
        this.state = { disabled: true, files: [] }
    }

    onDrop(files) {
        this.setState({
            files
        });
    }

    render() {
        return (
            <section>
                <aside>
                    <button type="button" onClick={() => this.setState({ disabled: !this.state.disabled })}>Toggle disabled</button>
                </aside>
                <div className="dropzone">
                    <Dropzone onDrop={this.onDrop.bind(this)} disabled={this.state.disabled}>
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Dropped files</h2>
                    <ul>
                        {
                            this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        );
    }
}

export default Basic
