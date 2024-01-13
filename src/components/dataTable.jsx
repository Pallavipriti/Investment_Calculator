import React from "react";

const formatter = new Intl.NumberFormat("en-In", {
  styke: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function DataTable(props) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((yearData) => {
            return (
              <tr KEY={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.savingsEndOfYear)}</td>
                <td>{formatter.format(yearData.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    yearData.savingsEndOfYear -
                      props.initial -
                      yearData.yearlyContribution * yearData.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    props.initial + yearData.yearlyContribution * yearData.year
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
