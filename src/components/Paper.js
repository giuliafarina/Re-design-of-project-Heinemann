import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import About from "./About";
import FirstYears from "./FirstYears";
export default function DisabledTabs() {
    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <Paper className="paper" square>
            <Tabs className="tabs"
                value={value}
                indicatorColor="dark"
                // textColor="dark"
                onChange={handleChange}
                centered
            >
                <Tab label="Reinhard Heinemann" />

                <Tab label="1910-1920" />
                <Tab label="1925-1940" />
                <Tab label="1940-1967" />
            </Tabs>
        </Paper>
        { value === 0 && <About />}
        { value === 1 && <FirstYears />}
    </>
    );
}

