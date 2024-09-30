const getCurrentDate = (date) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

// Adiciona um zero à esquerda se o mês ou dia for menor que 10
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    const formattedCurrentDate = `${year}-${month}-${day}`;

// Cria um objeto Date para a data de ontem
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

// Compara a data fornecida com a data atual
    if (date === formattedCurrentDate) {
        return "Today";
    } 
    else if (date === `${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDay()}`) {
        return "Yesterday";
    } 
    else {
        const [providedYear, providedMonth, providedDay] = date.split("-");
    if (parseInt(providedYear) !== year) {
        return `${providedYear}-${providedMonth}-${providedDay}`;
    }
    else if(parseInt(providedMonth) === (currentDate.getMonth())) {
        return `${providedMonth}-${providedDay}`;
    }
    else {
        return `${providedDay}`;
    }
    }
};

export default getCurrentDate;