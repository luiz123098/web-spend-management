const CurrentBalanceCard = () => {
    const num = '3,00';
    return (        
        <div class="card">
            <div class="card-content">
                <div class="content">
                    <p>Current Balance</p>
                    <div className="columns">
                        <div className="column is-one-quarter">
                            <i class="fa-solid fa-wallet fa-3x"></i>
                        </div>
                        <div className="column">
                            <label className="has-text-warning is-size-3 has-text-weight-bold">R$ {num}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentBalanceCard;
