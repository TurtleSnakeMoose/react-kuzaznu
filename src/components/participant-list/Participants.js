import React from 'react'
import {connect} from 'react-redux'

import ParticipantInput from './ParticipantInput'
import ParticipantList from './ParticipantList'
import ParticipantCount from './ParticipantCount'

const Participants = ({participants}) => {
    return (
        <div>
            <ParticipantInput/>
            <ParticipantList/>
            {participants.length > 0 ? <ParticipantCount participants={participants}/> : null}
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
)(Participants);