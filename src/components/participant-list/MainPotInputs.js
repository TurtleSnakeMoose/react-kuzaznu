import React, {useState} from 'react'

const MainPotInputs = ({participant, onInputBlur}) => {

    const [mainpotContrib, setMainpotContrib] = useState(participant.contribution.mainpot);
    const [payCount, setPayCount] = useState(participant.count);

    return(
        <div className="field">
            <div className="two fields">
                <div className="field">
                    <label>Contribution to main-pot</label>
                    <input
                        name="participant.contribution.mainpot"
                        type="number"
                        placeholder="0"
                        value={mainpotContrib > 0 ? mainpotContrib : '' }
                        onBlur={e => {onInputBlur(e)}}
                        onChange={e => {setMainpotContrib(e.target.value)}}
                    />
                </div>
                <div className="field">
                    <label>Pays for how many participants</label>
                    <input
                        name="participant.count"
                        type="number"
                        placeholder="1"
                        value={payCount}
                        onBlur={e => {onInputBlur(e)}}
                        onChange={e => {setPayCount(e.target.value)}}
                    />
                </div>
            </div>
        </div>
    );
}

export default MainPotInputs;