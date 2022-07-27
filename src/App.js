import * as React from 'react';
import {ReflexContainer, ReflexElement, ReflexSplitter} from "react-reflex";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageSelector from "./components/PageSelector";
import Forms from "./pages/Forms";

export default class App extends React.Component {
    state = {
        page: 0,
    }

    getPage = (i) => {
        this.setState({page:i})
    }

    render(){
        return (
            <ReflexContainer orientation="horizontal">
                <ReflexElement className="header bg-primary" flex={0.1}>
                    <div className="pane-content">
                        <label>
                            Header (fixed)
                        </label>
                    </div>
                </ReflexElement>
                <ReflexElement>
                    <ReflexContainer orientation="vertical">
                        <ReflexElement className="left-pane bac bg-secondary">
                            <div className="pane-content">
                                <div>
                                    <h2>Elements</h2>
                                </div>
                                <div>
                                    <PageSelector handleSelect={this.getPage}>

                                    </PageSelector>
                                </div>
                                <div>
                                    {this.state.page === '1' && <Forms/>}
                                </div>
                            </div>
                        </ReflexElement>

                        <ReflexSplitter/>

                        <ReflexElement className="middle-pane">
                            <div className="pane-content">
                                Sheet Viewer
                            </div>
                        </ReflexElement>

                        <ReflexSplitter/>

                        <ReflexElement className="right-pane bg-secondary">
                            <div className="pane-content">
                                Settings & Information
                            </div>
                        </ReflexElement>
                    </ReflexContainer>
                </ReflexElement>
            </ReflexContainer>
        )
    }
}