import React from 'react';

import styles from './App.less';

export const App = () => {
    return (
        <div className={`${styles.hello} world`}>
            Hello World - Client Starter - By Mojo Coding
        </div>
    );
}

export default App;