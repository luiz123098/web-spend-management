import React, { useState } from "react";
import NavBarCard from "../../Card/NavBar/NavBar";
import CurrentBalanceCard from "../../Card/CurrentBalance/CurrentBalance";
import ExpensesActivitiesCard from "../../Card/ExpensesActivities/ExpensesActivities";
import QuickActionsCard from "../../Card/QuickActions/QuickActions";
import MonthSpendCard from "../../Card/MonthSpend/MonthSpend"; // Ajuste o caminho conforme necessário
import WeekSpendCard from "../../Card/WeekSpend/WeekSpend"; // Importe seu componente de gráfico semanal

const HomeCard = () => {
  const [view, setView] = useState("home");

  const renderContent = () => {
    switch (view) {
      case "monthGraph":
        return <MonthSpendCard />
      case "weekGraph":
        return <WeekSpendCard />
      default:
        return (          
          <div className="columns is-multiline is-desktop">
            <div className="column is-full">
              {/* <CurrentBalanceCard /> */}
              <ExpensesActivitiesCard />  
            </div>
            <div className="column">
              <div className="columns is-multiline">
                <div className="column is-two-thirds">
                  <div className="column">
                    
                  </div>
                  <div className="column">
                    <div className="buttons">
                      <button
                        className="button is-large is-warning"
                        onClick={() => setView("monthGraph")}
                      >
                        Month Graph
                      </button>
                      <button
                        className="button is-large is-warning"
                        onClick={() => setView("weekGraph")}
                      >
                        Week Graph
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column">
                <QuickActionsCard />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="section">
      <NavBarCard />
      <div className="box">
        {renderContent()}
      </div>
    </section>
  );
};

export default HomeCard;
