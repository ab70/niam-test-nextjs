"use client";
import React, { useState } from 'react'
import axios from "axios"
const formInitial = {
    acts: "",
    host: "",
    ipAd: "",
    id: "",
    action: "",
    path: "",
    params:""
}

const URL = "http://localhost:8080/api/v1/niam";

export default function Test() {
    const [formInputs, setFormInputs] = useState(formInitial)

    //on input change track changes (signIn)form
    const onSignInChange = (e) => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
        console.log(formInputs);
    }

    const submitForm = async (data) => {
        try {
            const submitData = {
                host: data.host,
                acts: data.acts,
                ipAd: data.ipAd,
                json_files:[
                    {
                        id: data.id,
                        action: data.action,
                        path: data.path,
                        params: data.params
                    }
                ]
            }
            let postData = await axios.post(`${URL}`, submitData, { withCredentials: true })
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
                                                Json files' object ID
                                            </label>
                                            <input
                                                name="id"
                                                type="text"
                                                className="form-control"
                                                id="id"
                                                placeholder="id"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Action
                                            </label>
                                            <input
                                                name="action"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="action"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Path
                                            </label>
                                            <input
                                                name="path"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="path"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>
                                     {/*end col*/}
                                     <div className="col-xxl-3 col-md-6">
                                        <div>
                                            <label htmlFor="placeholderInput" className="form-label">
                                                Param
                                            </label>
                                            <input
                                                name="param"
                                                type="text"
                                                className="form-control"
                                                id="placeholderInput"
                                                placeholder="param"
                                                onChange={(e) => onSignInChange(e)}
                                            />
                                        </div>
                                    </div>



                                </div>
                                <button type="button" className="btn btn-primary btn-animation waves-effect waves-light mt-3" onClick={postForm} data-text="Submit"><span>Submit Data</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
