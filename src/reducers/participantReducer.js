import ACTION_TYPE from '../actions/types'

const INITIAL_STATE = []

const getIndexOfparticipant = (array,name) => {
    return array.findIndex(x => x.name === name);
}

export const participantReducer = (state = INITIAL_STATE, action) => {

    var indexToUpdate = -1,
        newArray = [];

    switch (action.type) {
        case ACTION_TYPE.PARTICIPANT.ADD :
            return [...state, 
                {
                    name: action.payload,
                    count: 1,
                    contribution: {
                                    mainpot: 0,
                                    sidepot: []
                                }
                }
            ];

        case ACTION_TYPE.PARTICIPANT.INJECT_HARDCODED_DATA :
            const participantData = action.payload
            return [...state, 
                participantData
            ];

        case ACTION_TYPE.PARTICIPANT.REMOVE:
            return state.filter(participant => participant.name !== action.payload);

        case ACTION_TYPE.PARTICIPANT.UPDATE_COUNT:
            indexToUpdate = getIndexOfparticipant(state, action.payload.name);
            newArray = [...state];
            
            newArray[indexToUpdate].count = action.payload.count;
            return newArray;

        case ACTION_TYPE.MAINPOT.SAVE_SUM:
            indexToUpdate = getIndexOfparticipant(state, action.payload.name);
            newArray = [...state];
            
            newArray[indexToUpdate].contribution.mainpot = action.payload.mainpot_contrib;
            return newArray;
        
        case ACTION_TYPE.SIDEPOT.ADD_SIDEPOT:
            indexToUpdate = getIndexOfparticipant(state, action.payload);
            newArray = [...state];

            newArray[indexToUpdate].contribution.sidepot.push({ amount: 0, participants: [] });
            return newArray;

        case ACTION_TYPE.SIDEPOT.SAVE_SUM:
            indexToUpdate = getIndexOfparticipant(state, action.payload.name);
            newArray = [...state];
            
            newArray[indexToUpdate].contribution.sidepot[action.payload.sidepot_index].amount = action.payload.sidepot_contrib;
            return newArray;

        case ACTION_TYPE.SIDEPOT.SAVE_PARTICIPANTS:
            indexToUpdate = getIndexOfparticipant(state, action.payload.name);
            newArray = [...state];
            
            newArray[indexToUpdate].contribution.sidepot[action.payload.sidepot_index].participants = action.payload.sidepot_participants;
            return newArray;

        default:
            return state;
    }
}