import React from 'react';

import styles from './Auth.less';

export const Auth = () => {
    return (
        <form className={styles.form}>
            <input placeholder="username" />
            <input placeholder="password" />
            <button>Submit</button>
        </form>
    );
};

export default Auth;