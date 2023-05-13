import React from 'react'

export default function Test() {
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
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
