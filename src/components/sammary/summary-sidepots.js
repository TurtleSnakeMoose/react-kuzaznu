import React from 'react'

export const generateSidepotsSummaryContent = (participants) => {

    const sidepotPayers = participants.filter(x => x.contribution.sidepot.length > 0),
        sidepot_payers = sidepotPayers.map((payer) => {return {name: payer.name , sidepots: payer.contribution.sidepot}}),
        sidepots = [];

    sidepot_payers.forEach(payer => {
        payer.sidepots.forEach(sp => sidepots.push({name: payer.name, sidepot:sp}));
    });
    
    const overall = <div>
                        <p>A total of <strong>{sidepots.reduce((a,b) => a + b.sidepot.amount, 0)}</strong>
                         was collected to <strong>{sidepots.length}</strong> side-pot(s)
                         by <strong>{sidepot_payers.length}</strong> participants.</p>
                    </div>

    const sidepotList = sidepots.map((sidepot, i) => {
        return ( <div key={i}>
                    <strong>{sidepot.name}</strong> has contributed <strong>{sidepot.sidepot.amount}</strong> to a sidepot for: <strong>{sidepot.sidepot.participants.join(", ")}</strong>.
                    which comes to <strong>{Math.round(sidepot.sidepot.amount/sidepot.sidepot.participants.length)}</strong> each.
                  </div>
                );
    });

    return (
        <div>
            {overall}
            {sidepotList}
        </div>
    );
}
