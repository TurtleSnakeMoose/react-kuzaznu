import React from 'react'

export const generateMainpotSummaryContent = (participants) => {

    const mainpot_sum = participants.reduce((total, current) => total + current.contribution.mainpot, 0),
        mainpot_contribs = participants.filter(x => x.contribution.mainpot > 0),
        pCount = participants.reduce((total, current) => total + current.count, 0),
        amount_per_participant = Math.round(mainpot_sum / pCount),
        multipayers = participants.filter(x => x.count > 1);

    const overall = <div>
                        A total of <strong>{mainpot_sum}</strong> was collected by <strong>{mainpot_contribs.length}</strong> participants,
                        divided by <strong>{pCount}</strong> is <strong>{amount_per_participant}</strong>.
                    </div>

    const payerList = mainpot_contribs.map((x, i) => {
        return (
            <div key={i}><strong>{x.name}</strong> has contributed <strong>{x.contribution.mainpot}</strong> to the main-pot.</div>
        );
    });

    const multipayerList = () => {
        const header = <p><strong>{multipayers.length}</strong> participants are paying for multiple people.</p>
        const list = multipayers.map((x,i) => {
            return (
                <div key={i}>
                    <strong>{x.name}</strong>s share is <strong>{amount_per_participant*x.count}</strong>.
                </div>
            );
        });

        return (
            <>
                {header}
                {list}
            </>
        );
    };

    return (
        <div>
            {overall}
            {payerList}
            {multipayers.length > 0 ? multipayerList() : null}
        </div>
    );
}
