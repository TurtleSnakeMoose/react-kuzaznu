import React from 'react'
import {connect} from 'react-redux'

import {calc} from './transaction-calculator'

const renderTableCells = participants => {

    const transactions = calc(participants);

    return transactions.map((row, i) => {
        return (
            <tr key={i}>
                <td>{row.from}</td>
                <td>{row.to}</td>
                <td>{row.amount}</td>
            </tr>
        );
    });
}

const Result = ({participants}) => {
    return (
        <div>
            <table className="ui celled table unstackable">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableCells(participants)}
                </tbody>
            </table>
        </div>
    );
}

const mapStateToProps = state => {
    return({
        participants: state.participants
    });
}

export default connect(
    mapStateToProps,
    {}
)(Result);