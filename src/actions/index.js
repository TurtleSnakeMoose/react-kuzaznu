import ACTION_TYPE from './types'

export const ac_addParticipant = (name) => {  
    return {
        type: ACTION_TYPE.PARTICIPANT.ADD,
        payload: name
    };
}

export const ac_injectHardcodedParticipentData = (data) => {
    return {
        type: ACTION_TYPE.PARTICIPANT.INJECT_HARDCODED_DATA,
        payload: data
    };
}

export const ac_removeParticipant = (name) => {    
    return {
        type: ACTION_TYPE.PARTICIPANT.REMOVE,
        payload: name
    };

}

export const ac_updateParticipantCount = (name, count) => {  

    const parsedValue = parseInt(count);

    return {
        type: ACTION_TYPE.PARTICIPANT.UPDATE_COUNT,
        payload: { 
            name, 
            count: isNaN(parsedValue) ? 1 : parsedValue 
        }
    };

}

export const ac_updateParticipantMainPotAmount = (name, mainpot_contrib) => {  

    const parsedValue = Math.round(parseFloat(mainpot_contrib))
    return {
        type: ACTION_TYPE.MAINPOT.SAVE_SUM,
        payload: {
            name, 
            mainpot_contrib: isNaN(parsedValue) ? 0 : parsedValue
        }
    };

}

export const ac_updateSidePotAmount = (name, sidepot_sum, sidepot_index) => {  

    const parsedValue = Math.round(parseFloat(sidepot_sum))
    return {
        type: ACTION_TYPE.SIDEPOT.SAVE_SUM,
        payload: {
            name,
            sidepot_contrib: isNaN(parsedValue) ? 0 : parsedValue,
            sidepot_index: parseInt(sidepot_index) 
        }
    };
}

export const ac_updateSidePotParticipants = (name, participants, sidepot_index) => {  

    const arr_participants = participants.map(participant => {
        return participant.value;
    })

    return {
        type: ACTION_TYPE.SIDEPOT.SAVE_PARTICIPANTS,
        payload: {
            name, 
            sidepot_participants: arr_participants, 
            sidepot_index:parseInt(sidepot_index) 
        }
    };
}

export const ac_addSidepotToParticipant = (name) => {
    return {
        type: ACTION_TYPE.SIDEPOT.ADD_SIDEPOT,
        payload: name
    };
}