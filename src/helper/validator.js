export const validateParticipantName = (name, participants) => {
    return name.length > 0 && participants.filter(participant => participant.name.toLowerCase() === name).length === 0;
}