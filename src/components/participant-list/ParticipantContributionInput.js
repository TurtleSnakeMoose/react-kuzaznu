import React from 'react'
import {connect} from 'react-redux'

import Button from '../shared/Button'
import MainPotInputs from './MainPotInputs'
import SidePotInputs from './SidePotInputs'
import {
        ac_updateParticipantCount,
        ac_updateParticipantMainPotAmount,
        ac_updateSidePotAmount,
        ac_addSidepotToParticipant
    } from '../../actions'

const ParticipantContributionInput = props => {

    const onInputBlur = e => {
        switch (e.target.name) {
            case 'participant.count':
                props.ac_updateParticipantCount(props.participant.name, e.target.value);
                break;

            case 'participant.contribution.mainpot':
                props.ac_updateParticipantMainPotAmount(props.participant.name, e.target.value);
                break;

            case 'participant.contribution.sidepot.amount':
                props.ac_updateSidePotAmount(props.participant.name, e.target.value, e.target.getAttribute('sidepot_index'));
                break;

            default:
                break;
        }
    }

    const renderSidePots = props.participant.contribution.sidepot.map((sidepot, index) => {
        return <SidePotInputs key={index}
                    participant={props.participant}
                    onInputBlur={onInputBlur}
                    sidepotIndex={index}
                />;
    })

    const addSidepot = () => {
        props.ac_addSidepotToParticipant(props.participant.name);
    }

    return (
        <form className="ui form">
            <div className="ui horizontal divider">
                MAIN-POT
            </div>
            <MainPotInputs
                participant={props.participant}
                onInputBlur={onInputBlur}
            />
            <div className="ui horizontal divider">
                SIDE-POTS
            </div>
            {renderSidePots}
            <Button text="ADD SIDEPOT" handleClick={addSidepot}/>
        </form>
    );
}

const mapStateToProps = (state) => {
    return({
        participants: state.participants
    });
}

export default connect(
    mapStateToProps,
    {
        ac_updateParticipantCount,
        ac_updateParticipantMainPotAmount,
        ac_updateSidePotAmount,
        ac_addSidepotToParticipant
    }
)(ParticipantContributionInput);