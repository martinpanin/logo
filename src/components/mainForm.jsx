import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import BottomAppBar from "./BottomAppBar";
import OldLogoForm from "./oldLogoForm";
import Button from "@material-ui/core/Button/Button";

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: props.contacts,
            clientAnswer: null,
            client: {
                name: props.name,
                email:  props.email,
                tel: props.tel,
                companyName: props.companyName,
                aboutCompany: props.aboutCompany,
                aboutLogo: props.aboutLogo,
                likedLogo: props.likedLogo,
                oldLogo: props.oldLogo
            }

        };

        this.name = React.createRef();
        this.email= React.createRef();
        this.tel= React.createRef();
        this.companyName= React.createRef();
        this.aboutCompany= React.createRef();
        this.aboutLogo= React.createRef();
        this.likedLogo= React.createRef();
        this.oldLogo= React.createRef();

    }


    handleChange(event) {
        console.log(event.target.value);
        this.setState({clients: event.target.value})
    }

    addContact(event) {
        event.preventDefault();
        let name = {client: name.event.target.value};
        console.log(prop.name);
    }

    render() {

        return (
            <React.Fragment>
                <div className="row justify-content-md-center">
                    <div className="col col-lg-6 text-center">
                        <h2>Do you already have a logo?</h2>

                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={() => {this.setState({clientAnswer: false})}}

                            >
                                No
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={() => {this.setState({clientAnswer: true});}}
                            >
                                Yes
                            </Button>

                        </div><br/>
                        <small>"<strong>Enter</strong>" for <strong>No</strong>, "<strong>Space</strong>" for <strong>Yes</strong></small>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-lg-8 text-center">
                        <form onSubmit={this.addContact.bind(this)}>
                            <div className="form-group">
                                {this.state.clientAnswer === true ? <OldLogoForm/> : null}
                                <TextField
                                    required
                                    id="standard-name"
                                    label="Name"
                                    placeholder="John Smith"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                    ref={this.name}
                                    value={this.state.client.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    required
                                    id="standard-email-input"
                                    label="E-mail"
                                    placeholder="your@email.com"
                                    margin="normal"
                                    fullWidth
                                    type="email"
                                    ref={this.email}
                                    value={this.state.client.email}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    required
                                    id="standard-tel"
                                    label="Telephone"
                                    placeholder="+372 5566778"
                                    margin="normal"
                                    fullWidth
                                    type="tel"
                                    ref={this.tel}
                                    value={this.state.client.tel}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    id="standard-company"
                                    label="Company name"
                                    placeholder="MyCompany AS"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                    ref={this.companyName}
                                    value={this.state.client.companyName}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField

                                    id="standard-about-company"
                                    label="Tell us about your company"
                                    placeholder="My company is so cool..."
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    ref={this.aboutCompany}
                                    value={this.state.client.aboutCompany}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    required
                                    id="standard-about-logo"
                                    label="Tell us about your idea"
                                    placeholder="My logo should be the super cool..."
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    ref={this.aboutLogo}
                                    value={this.state.client.aboutLogo}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    id="standard-linked-logo"
                                    label="What logos do you like?"
                                    placeholder="Company names, links, any info..."
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    ref={this.likedLogo}
                                    value={this.state.client.likedLogo}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <BottomAppBar/>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default MainForm;