import React from 'react'
import {connect} from 'react-redux'

import {generateMainpotSummaryContent} from './summary-mainpot'
import {generateSidepotsSummaryContent} from './summary-sidepots'

const Summary = ({participants}) => {

    const renderMainPotSummary = () => {
        return(
            <div className="ui segment">
                {generateMainpotSummaryContent(participants)}
            </div>
        );
    }

    const renderSidePotSummary = () => {
        return(
            <div className="ui segment">
                {generateSidepotsSummaryContent(participants)}
            </div>
        );
    }

    return (
        <div className="sumary">
            {renderMainPotSummary()}
            {renderSidePotSummary()}
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
)(Summary);