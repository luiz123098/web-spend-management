const QuickActionsCard = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column">
                            <h1 className="title">Quick Actions</h1>
                        </div>
                        <div className="column is-narrow">
                            <button className="button is-warning is-rounded">
                                <i className="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                    <h2 className="subtitle"></h2>
                </div>
                <div className="content">
                    {/* coluna 1 */}
                    <div className="columns">
                        <div className="column">
                            <button className="button is-primary is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'white'}}>
                                        <i className="fa-solid fa-house-chimney"></i>
                                    </span>
                                    <h6 className="title is-6">Home</h6>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-link is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <i className="fa-solid fa-car-side"></i>
                                    <h6 className="title is-6">Gas</h6>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-info is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'white'}}>
                                        <i className="fa-solid fa-shield-halved"></i>
                                    </span>
                                    <h6 className="title is-6">Security</h6>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* coluna 2 */}
                    <div className="columns">
                        <div className="column">
                            <button className="button is-success is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'white'}}>
                                        <i className="fa-solid fa-heart-pulse"></i>
                                    </span>
                                    <h6 className="title is-6">Health</h6>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-warning is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'white'}}>
                                        <i className="fa-solid fa-utensils"></i>
                                    </span>
                                    <h6 className="title is-6">Food</h6>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-danger is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'white'}}>
                                        <i className="fa-solid fa-plane"></i>
                                    </span>
                                    <h6 className="title is-6">Travel</h6>
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* coluna 3 */}
                    <div className="columns">
                        <div className="column">
                            <button className="button is-dark is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'withe'}}>
                                        <i className="fa-solid fa-shirt"></i>
                                    </span>
                                    <h6 className="title is-6">Clothes</h6>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-light is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <span style={{color: 'black'}}>
                                        <i className="fa-solid fa-book"></i>
                                    </span>
                                    <h6 className="title has-text-primary-00 is-6">Education</h6>
                                </div>
                            </button>
                        </div>
                        <div className="column">
                            <button className="button is-black is-fullwidth is-flex is-justify-content-center is-align-items-center">
                                <div className="has-text-centered">
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                    <h6 className="title is-6">Services</h6>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuickActionsCard;
