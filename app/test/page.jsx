"use client";
import React, { useState } from 'react'
import axios from "axios"
const formInitial = {
    acts: "",
    host: "",
    ipAd: "",
    json_files: "",
    json_hash: "",
    json_params: ""
}

const URL = "";

export default function Test() {
    const [formInputs, setFormInputs] = useState(formInitial)

    //on input change track changes (signIn)form
    const onSignInChange = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
        console.log(formInputs);
    }

    const submitForm = async (data) => {
        try {
            
            let submitData = await axios.post(`${URL}`, data, { withCredentials: true })
        } catch (err) {
            console.log("Can't submit");
        }
    }
    const postForm = async ()=>{
        let resReturn = await submitForm(formInputs)
    }
    return (
        <>
            <div className="row m-4">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Input Example</h4>

                        </div>
                        {/* end card header */}
                        <div className="card-body">
                            <div className="live-preview">
                                <div className="row gy-4">
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                ACts
                                            </label>
                                            <input
                                                name="acts"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="acts"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Host
                                            </label>
                                            <input
                                                name="host"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="Host"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                ipAd
                                            </label>
                                            <input
                                                name="ipAd"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="ipAd"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Json files
                                            </label>
                                            <input
                                                name="json_files"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="json_files"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Json hash
                                            </label>
                                            <input
                                                name="json_hash"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="json_hash"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Json params
                                            </label>
                                            <input
                                                name="json_params"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="json_files"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>



                                </div>
                                <button type="button" className="btn btn-primary btn-animation waves-effect waves-light mt-3" onClick={postForm} data-text="Primary"><span>Submit Data</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
