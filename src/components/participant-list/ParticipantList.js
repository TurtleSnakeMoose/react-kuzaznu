import React from 'react'
import {connect} from 'react-redux'

import Accordion from '../shared/Accordion'

const ParticipantList = ({participants}) => {
    const renderAccordion = () => {
        if (participants.length > 0) 
            return <Accordion participants={participants}/>;
        return null;
    }

    return (
        renderAccordion()
    );
}

const mapStateToProps = (state) => {
    return{
        participants: state.participants
    };
}

export default connect(
    mapStateToProps,
    {}
)(ParticipantList);