import React from 'react'

import '../../style/participant-count.css'

const ParticipantCount = ({participants}) => {

    const getParticipantCounter = () => {
        const payerCount = participants.length,
            participantCount = participants.reduce((a,b) => a+b.count, 0);

        return <p><strong>{payerCount}</strong> payer(s), <strong>{participantCount}</strong> participant(s).</p>
    };

    const getMainPotSummary = () => {
        const mainpotSum = participants.reduce((a,b) => a+b.contribution.mainpot,0 ),
            mainpotPayers = participants.filter(x => x.contribution.mainpot > 0).length;

        if (mainpotPayers > 0) {
            return <p>A sum of <strong>{mainpotSum}</strong> was collected to the main-pot by <strong>{mainpotPayers}</strong> participants.</p>
        }
        
    };

    const getSidePotSummary = () => {
        const sidepotPayers = participants.filter(x => x.contribution.sidepot.length > 0),
            sidepots = sidepotPayers.map((payer) => {return payer.contribution.sidepot});
        var sum = 0,
            sidepotsCount = 0;
        
        sidepots.forEach(sidepotGroup => {
            sidepotsCount += sidepotGroup.length;
            sum += sidepotGroup.reduce((a,b) => a+b.amount ,0);
        });

        if (sidepotPayers.length > 0) {
            return <p>A sum of <strong>{sum}</strong> was collected to <strong>{sidepotsCount}</strong> side-pot(s) by <strong>{sidepotPayers.length}</strong> participant.</p>
        }
    };

    return(
        <div className="ui segment participant-count">
            {getParticipantCounter()}
            {getMainPotSummary()}
            {getSidePotSummary()}
        </div>
    );
}

export default ParticipantCount;