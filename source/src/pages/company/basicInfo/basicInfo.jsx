import React, { Component } from "react";
class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { isStep1completed, companyInfoData } = this.props;
        let { companyName } = companyInfoData;
        return (
            <div id="BasicInfo">
                <div className="form-group">
                    <label htmlFor="companyName">Company name *</label>
                    <input type="text" id="companyName"
                        className={!isStep1completed ? " form-control" : companyName ? "form-control is-valid" : "form-control is-invalid"}
                        name="companyName" value={companyName}
                        onChange={this.props.onInputValueChange}
                        placeholder="Enter company name" />
                    <div className="invalid-feedback"> Company name is required. </div>
                </div>
            </div>
        );
    }
}

export default BasicInfo;
