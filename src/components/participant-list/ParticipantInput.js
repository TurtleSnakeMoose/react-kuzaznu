import React, {useState} from 'react'
import { connect } from 'react-redux'

import Button from '../shared/Button'
import {ac_addParticipant, ac_injectHardcodedParticipentData} from '../../actions'
import {validateParticipantName} from '../../helper/validator'
import {pocData} from '../../engine/hardCodedData'

const ParticipantInput = props => { 

    const [participantName, setParticipantName] = useState('');

    const addParticipant = () => {
        const isNameValid = validateParticipantName(participantName.trim().toLowerCase(), props.participants);
        
        if(!isNameValid)
            return;

        if (pocData[participantName]) {
            pocData[participantName].forEach(participantData => {
                setParticipantName('');
                props.ac_injectHardcodedParticipentData(participantData);        
            });
        }
        else {
            props.ac_addParticipant(participantName);
            setParticipantName('');
        }
    }

    return (
        <form className="ui form">
            <div className="ui action input">
                <input 
                    type="text"
                    placeholder="Participant Name" 
                    autoComplete="off"
                    value={participantName}
                    onChange={e => {setParticipantName(e.target.value);}}
                />
                <Button text="ADD" handleClick={addParticipant}/>
            </div>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        participants: state.participants
    };
}

export default connect(
        mapStateToProps,
        {
            ac_addParticipant,
            ac_injectHardcodedParticipentData
        }
    )(ParticipantInput);