import React,{useState} from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import makeAnimated from 'react-select/animated'

import { ac_updateSidePotParticipants } from '../../actions'
import '../../style/sidepot-inputs.css'

const animatedComponents = makeAnimated();


const SidePotInputs = ({participant, participants, onInputBlur, sidepotIndex, ac_updateSidePotParticipants}) => {

    const [sidepotContribution, setSidepotContribution] = useState(participant.contribution.sidepot[sidepotIndex].amount);

    const getParticipantsForSelectList = participants.map(participant => {
        return { value: participant.name , label: participant.name }
    });

    const setSelectedValue = () => {
        const selectedValues = participant.contribution.sidepot[sidepotIndex].participants.map(name => {
            return { value: name , label: name };
        });

        return selectedValues;
    } 

    const handleSidePotParticipantsChange = (selectedValues) => {
        ac_updateSidePotParticipants(participant.name, selectedValues, sidepotIndex);
    }

    return (
        <div className="field">
            <div className="two fields">
                <div className="field">
                    <label>Contribution to side-pot</label>
                    <input
                        name="participant.contribution.sidepot.amount"
                        type="number"
                        placeholder="0"
                        value={sidepotContribution > 0 ? sidepotContribution : '' }
                        onBlur={e => {onInputBlur(e)}}
                        onChange={e => {setSidepotContribution(e.target.value)}}
                        sidepot_index={sidepotIndex}
                    />
                </div>
                <div className="field">
                    <label>Side-pot participants</label>
                    <Select
                        className = "sidepot-participants-multiselect"
                        closeMenuOnSelect = {false}
                        components = {animatedComponents}
                        isMulti
                        options = {getParticipantsForSelectList}
                        onChange = {handleSidePotParticipantsChange}
                        value={setSelectedValue()}
                    />
                </div>
            </div>
            <div className="ui divider"></div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return ({
        participants: state.participants
    });
}

export default connect(
    mapStateToProps,
    {
        ac_updateSidePotParticipants
    }
)(SidePotInputs);