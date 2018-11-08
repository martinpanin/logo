import React, {Component} from 'react';

class OldLogoForm extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-md-center">
                    <div className="col-lg-8 text-center">
                        <form>
                            <div className="form-group">
                                <h2 className="text-left">Old Qestion</h2>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    placeholder="your@email.com"
                                    onChange={this.mailHandeler}
                                />

                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default OldLogoForm;