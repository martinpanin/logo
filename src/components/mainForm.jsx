import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import BottomAppBar from "./BottomAppBar";
import Button from "@material-ui/core/Button/Button";

class MainForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clientAnswer: null,
            name: null,
            email: null,
            tel: null,
            companyName: null,
            aboutCompany: null,
            aboutLogo: null,
            likedLogo: null,
            oldLogo: null
            };
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value});
    }


    addContact(event) {
        event.preventDefault();
        console.log(this.state.name, this.state.email);
        alert()

    };



    render() {

        return (
            <React.Fragment>
                <div className="row justify-content-md-center">
                    <div  className="col col-lg-6 text-center">
                        <h2>Do you already have a logo?</h2>

                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={() => {this.setState({clientAnswer: false});document.querySelector("#old-logo").style.display = "none"}}

                            >
                                No
                            </Button>

                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                onClick={() => {this.setState({clientAnswer: true}); document.querySelector("#old-logo").style.display = "block"}}
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
                                <div style={{display: "none"}} id="old-logo">
                                    <TextField
                                        id="standard-old-logo"
                                        label="Old logo"
                                        placeholder="Old logo link"
                                        margin="normal"
                                        fullWidth
                                        type="text"
                                        name="oldLogo"
                                        value={this.state.oldLogo}
                                        // ref={this.oldLogoRef}
                                        onChange={this.handleChange.bind(this)}


                                    />
                                </div>
                                {/*{this.state.clientAnswer === true ? this.dispalyBlock() : this.dispayNone() }*/}

                                <TextField
                                    required
                                    id="standard-name"
                                    label="Name"
                                    placeholder="John Smith"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                    name="name"
                                    // ref={this.nameRef}
                                     value={this.state.name}
                                     onChange={this.handleChange.bind(this)}
                                />
                                <TextField

                                    id="standard-email-input"
                                    label="E-mail"
                                    placeholder="your@email.com"
                                    margin="normal"
                                    fullWidth
                                    type="email"
                                    name="email"
                                    // ref={this.emailRef}
                                    value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField

                                    id="standard-tel"
                                    label="Telephone"
                                    placeholder="+372 5566778"
                                    margin="normal"
                                    fullWidth
                                    type="tel"
                                    name="tel"
                                    // ref={this.telRef}
                                    value={this.state.tel}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    id="standard-company"
                                    label="Company name"
                                    placeholder="MyCompany AS"
                                    margin="normal"
                                    fullWidth
                                    type="text"
                                    name="companyName"
                                    // ref={this.companyNameRef}
                                    value={this.state.companyName}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField

                                    id="standard-about-company"
                                    label="Tell us about your company"
                                    placeholder="My company is so cool..."
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    name="aboutCompany"
                                    // ref={this.aboutCompanyRef}
                                    value={this.state.aboutCompany}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField

                                    id="standard-about-logo"
                                    label="Tell us about your idea"
                                    placeholder="My logo should be the super cool..."
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    name="aboutLogo"
                                    // ref={this.aboutLogoRef}
                                    value={this.state.aboutLogo}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <TextField
                                    id="standard-linked-logo"
                                    label="What logos do you like?"
                                    placeholder="Company names, links, any info..."
                                    multiline
                                    fullWidth
                                    margin="normal"
                                    name="likedLogo"
                                    // ref={this.likedLogoRef}
                                    value={this.state.likedLogo}
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