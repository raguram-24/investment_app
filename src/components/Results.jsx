import { calculateInvestmentResults , formatter } from "../util/investment"

const Results = ({userInput}) => {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = userInput.initialInvestment
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>   
            </thead>
            <tbody>
                {resultsData.map(data =>{
                    const totalInterest = data.valueEndOfYear - data.annualInvestment*data.year - initialInvestment 
                    const totalAmountInvested = data.valueEndOfYear - totalInterest
                    return <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.valueEndOfYear)}</td>
                        <td>{formatter.format(data.interest)}</td>
                        <td>{formatter.format(totalInterest) }</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}

export default Results