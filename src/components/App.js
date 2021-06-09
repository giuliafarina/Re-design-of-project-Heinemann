import React from "react";
import Paper from "./Paper";
import Logo from "./Logo";
import CssBaseline from '@material-ui/core/CssBaseline';

import ImageGrid from "./ImageGrid";


function App() {
    return <div className="App"><CssBaseline><Logo /><Paper />  <ImageGrid /></CssBaseline>

    </div>
}

export default App;