export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income: income,
      gdp: gdp,
      capita: capita,
    };
    const {income, gdp, capita,} = budget;
        return budget =`{ income:${income}, gdp:${gdp}, capita: ${gdp}}`;
  }