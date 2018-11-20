import React, {Component} from 'react';
import MainForm from "./mainForm";
import Button from '@material-ui/core/Button';
import PaperSheet from './Paper';



class ContactForm extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {
        return (
            <React.Fragment>

                <div  className="container pb-5">
                    <div id="id1" className="row justify-content-md-center">
                        <div className="col col-lg-8-">
                            <PaperSheet/>
                        </div>
                    </div>
                    <MainForm/>
                </div>

            </React.Fragment>
        );
    }
}



export default ContactForm;