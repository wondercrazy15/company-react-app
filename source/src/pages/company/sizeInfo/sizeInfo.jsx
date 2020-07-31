import React, { Component } from "react";
class SizeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let { isStep3completed, companyInfoData } = this.props;
        let { companySize } = companyInfoData;
        return (
            <div id="SizeInfo">
                <div className="form-group">
                    <label htmlFor="companySize">Company size *</label>
                    <select className={!isStep3completed ? " form-control" : companySize ? "form-control is-valid" : "form-control is-invalid"}
                        id="companySize" name="companySize" placeholder="Selecte company size"
                        value={companySize} onChange={this.props.onInputValueChange} required={true}>
                        <option value={""} >Selecte company size</option>
                        <option value="less than 10">less than 10</option>
                        <option value="10 to 50">10 to 50 </option>
                        <option value="more than 50">more than 50</option>
                    </select>
                    <div className="invalid-feedback"> Company size is required. </div>
                </div>
            </div>
        );
    }
}

export default SizeInfo;
