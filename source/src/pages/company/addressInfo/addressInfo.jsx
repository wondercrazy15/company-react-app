import React, { Component } from "react";
class AddressInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { isStep2completed, companyInfoData } = this.props;
        let { address1, address2, mobileNumber } = companyInfoData;
        return (
            <div id="AddressInfo">
                <div className="form-group">
                    <label htmlFor="address1">Address-1 </label>
                    <input type="text" id="address1"
                        className="form-control"
                        name="address1" value={address1}
                        onChange={this.props.onInputValueChange}
                        placeholder="Enter address 1" />
                </div>
                <div className="form-group">
                    <label htmlFor="address2">Address-2 </label>
                    <input type="text" id="address2"
                        className="form-control"
                        name="address2" value={address2}
                        onChange={this.props.onInputValueChange}
                        placeholder="Enter address 2" />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNumber">Mobile number * </label>
                    <input  id="mobileNumber" type="number"
                        minLength={10} maxLength={10} size={10}
                        className={!isStep2completed ? " form-control" : mobileNumber && mobileNumber.length === 10 ? "form-control is-valid" : "form-control is-invalid"}
                        name="mobileNumber" value={mobileNumber}
                        onChange={this.props.onInputValueChange}
                        placeholder="Enter mobile number" required={true} />
                    <div className="invalid-feedback"> {isStep2completed && !mobileNumber ? "Mobile number is required." : mobileNumber.length !== 10 && "10 digit required in Mobile number"} </div>
                </div>
            </div>
        );
    }
}

export default AddressInfo;
