import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";

class OldLogoForm extends Component {
    render() {
        return (
            <React.Fragment>
                <TextField
                    id="standard-old-logo"
                    label="Old logo"
                    placeholder="Old logo link"
                    margin="normal"
                    fullWidth
                    type="text"

                />
            </React.Fragment>
        );
    }
}

export default OldLogoForm;