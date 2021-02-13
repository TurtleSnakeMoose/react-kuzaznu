import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

import '../style/main.css'
import '../style/app.css'
import LinkButton from './shared/LinkButton'
import Participants from './participant-list/Participants'
import Summary from './sammary/Summary'
import Result from './result/Result'
import ImportExport from './import-export/ImportExport'

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Participants}/>
                    <Route path="/summary" component={Summary}/>
                    <Route path="/result" component={Result}/>
                    <Route path="/ie" component={ImportExport}/>
                </div>
                <div className="div-links">
                    <Link to="/"><LinkButton text="PARTICIPANTS"/></Link>
                    <Link to="/summary"><LinkButton text="SUMMARY"/></Link>
                    <Link to="/result"><LinkButton text="RESULT"/></Link>
                    <Link to="/ie"><LinkButton text="IMPORT-EXPORT"/></Link>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;