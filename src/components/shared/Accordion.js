import React, {useState} from 'react'
import {connect} from 'react-redux'

import ParticipantQuickInfo from '../participant-list/ParticipantQuickInfo';
import ParticipantContributionInput from '../participant-list/ParticipantContributionInput';
import {ac_removeParticipant} from '../../actions'
import '../../style/accordion.css'

const Accordion = ({participants, ac_removeParticipant}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const remove = (event, name) => {
        event.stopPropagation();
        ac_removeParticipant(name);
        setActiveIndex(null);
    }
    
    const renderParticipants = participants.map((participant, index) => {
        const active = activeIndex === index ? 'active' : '';

        return(
            <React.Fragment key={index}>
                <div className={`title ${active} ui grid`} onClick={() => setActiveIndex(index === activeIndex ? null : index)} >
                    <ParticipantQuickInfo remove={remove} participant={participant}/>
                </div>
                <div className={`content ${active}`}>
                    <ParticipantContributionInput participant={participant} />
                </div>
            </React.Fragment>            
        );
    })

    return (
        <div className="ui styled accordion">
            {renderParticipants}
        </div>
    );
}

export default connect(
    null,
    {
        ac_removeParticipant
    }
)(Accordion);