import React, {Component} from 'react';

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts
        }
    }

    updateMail(event) {
        console.log(event.target.value);
        this.setState({contacts: event.target.value})
    }

    addContact(event) {
        event.preventDefault();
        console.log(this.refs.email.value);
        let email = this.refs.email.value;
        this.setState({
            contacts: this.state.contacts.concat({email})
        })

    }

    render() {
        return (
            <React.Fragment>

                <div className="row justify-content-md-center">
                    <div className="col-lg-8 text-center">
                        <form onSubmit={this.addContact.bind(this)}>
                            <div className="form-group">
                                <h2 className="text-left">Question one </h2>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="your@email.com"
                                    value={this.state.contacts}
                                    ref="email"
                                    onChange={this.updateMail.bind(this)}
                                />

                                <h2 className="text-left">Question two </h2>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="your@email.com"
                                value={this.state.contacts}
                                ref="email"
                                onChange={this.updateMail.bind(this)}
                            />

                    </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default MainForm;