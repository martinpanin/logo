import React, { Component } from 'react';
import MainForm from "./mainForm";
import OldLogoForm from "./oldLogoForm";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            clientAnswer: null
        };
    }

    render() {


        return (
            <React.Fragment>
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-8-">
                            <h1>Logod</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu accumsan turpis. Donec nec nibh nunc. Pellentesque non sapien augue. Cras nisl urna, tempus a leo sed, sagittis bibendum magna. Duis imperdiet ex orci. Fusce auctor aliquam aliquam. Sed porttitor, nunc sed maximus dictum, lectus neque venenatis ante, a efficitur nibh dolor eu ex. Duis vitae ultricies quam, vitae mollis magna. In ac molestie nunc. Donec et massa id nisi interdum auctor. Aenean efficitur velit quis dui facilisis tempus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vitae condimentum magna. Sed lacinia tellus vitae est semper semper.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-6 text-center">
                            <h2>Do you already have a logo?</h2>
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <button
                                    onClick={() => {this.setState({clientAnswer: false})}}
                                    className="btn btn-lg btn-secondary"
                                >
                                    No
                                </button>
                                <button
                                    onClick={() => {this.setState({clientAnswer: true});}}
                                    className="btn btn-lg btn-secondary"
                                >
                                    Yes
                                </button>
                            </div><br/>
                            <small>"<strong>Enter</strong>" for <strong>No</strong>, "<strong>Space</strong>" for <strong>Yes</strong></small>
                        </div>
                    </div>

                    <div className="row fixed-bottom justify-content-md-center">
                        <div className="col-lg-6 text-center">
                            <button
                                className="btn btn-sm btn-success"
                            >
                                Next
                            </button>
                            <span className="small p-2">Or press 'Enter'</span>
                        </div>
                    </div>
                    {this.state.clientAnswer === true ? <OldLogoForm/> : <MainForm/>}
                </div>
            </React.Fragment>
        );
    }
}

export default ContactForm;