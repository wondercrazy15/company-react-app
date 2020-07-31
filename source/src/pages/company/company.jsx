import React, { Component } from "react";
import Stepper from 'bs-stepper'
// Components
import BasicInfo from "./basicInfo/basicInfo.jsx"
import AddressInfo from "./addressInfo/addressInfo.jsx";
import SizeInfo from "./sizeInfo/sizeInfo.jsx";
// BS-Stepper-Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
class Company extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStep1completed: false,
            isStep2completed: false,
            isStep3completed: false,
            companyInfoData: {
                companyName: "",
                address1: "",
                address2: "",
                mobileNumber: "",
                companySize: ""
            }
        }
    }
    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        })
    }
    onInputValueChange = (event) => {
        let { companyInfoData } = this.state;
        let { name, value } = event.target;
        this.setState({
            companyInfoData: {
                ...companyInfoData,
                [name]: value
            }
        })
    }
    onStepChangeHandle = (stepType, steperID) => {
        let { companyInfoData } = this.state
        let { companyName, mobileNumber, companySize } = companyInfoData;
        if (steperID === 1) {
            if (companyName) {
                if (stepType === "next") {
                    this.stepper.next()
                }
            }
            this.setState({
                isStep1completed: true,
            })
        }
        if (steperID === 2) {
            if (mobileNumber && mobileNumber.length === 10) {
                if (stepType === "next") {
                    this.stepper.next()
                }
                if (stepType === "previous") {
                    this.stepper.previous()
                }
                this.setState({
                    isStep2completed: true,
                })
            }
            else {
                if (stepType === "next") {
                    this.setState({
                        isStep2completed: true
                    })
                }
                if (stepType === "previous") {
                    this.stepper.previous()
                }

            }
        }
        if (steperID === 3) {
            if (stepType === "previous") {
                this.stepper.previous()
            }
            if (stepType === "next") {
                if(companySize){
                    console.log("companyInfoData --> ",companyInfoData)
                }

                this.setState({
                    isStep3completed: true
                })
            }
        }
    }
    render() {
        let { companyInfoData, isStep1completed, isStep2completed, isStep3completed } = this.state
        return (
            <div id="Company">
                <div id="stepper1" className="bs-stepper container">
                    <div className="bs-stepper-header">
                        <div className="step" data-target="#test-l-1">
                            <button className="step-trigger">
                                <span className="bs-stepper-circle">1</span>
                                <span className="bs-stepper-label">Basic information</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-2">
                            <button className="step-trigger">
                                <span className="bs-stepper-circle">2</span>
                                <span className="bs-stepper-label">Company Address</span>
                            </button>
                        </div>
                        <div className="line"></div>
                        <div className="step" data-target="#test-l-3">
                            <button className="step-trigger">
                                <span className="bs-stepper-circle">3</span>
                                <span className="bs-stepper-label">Company Size</span>
                            </button>
                        </div>
                    </div>
                    <div className="bs-stepper-content">
                        <div id="test-l-1" className="content">
                            <BasicInfo companyInfoData={companyInfoData} onInputValueChange={this.onInputValueChange} isStep1completed={isStep1completed} />
                            <button className="btn btn-primary" onClick={() => this.onStepChangeHandle("next", 1)}>Next</button>
                        </div>
                        <div id="test-l-2" className="content">
                            <AddressInfo companyInfoData={companyInfoData} onInputValueChange={this.onInputValueChange} isStep2completed={isStep2completed} />
                            <button className="btn btn-primary mar-r-10" onClick={() => this.onStepChangeHandle("previous", 2)}>Previous</button>
                            <button className="btn btn-primary" onClick={() => this.onStepChangeHandle("next", 2)}>Next</button>
                        </div>
                        <div id="test-l-3" className="content text-center">
                            <SizeInfo companyInfoData={companyInfoData} onInputValueChange={this.onInputValueChange} isStep3completed={isStep3completed} />
                            <button className="btn btn-primary mar-r-10" onClick={() => this.onStepChangeHandle("previous", 3)}>Previous</button>
                            <button type="submit" className="btn btn-primary" onClick={() => this.onStepChangeHandle("next", 3)} >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Company;
