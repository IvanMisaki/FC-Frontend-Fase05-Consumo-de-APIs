import React from 'react';
import { Loginderecha } from './loginDerecha';
import { Loginizquierda } from './loginIzquierda';




import styles from "./login.module.css";

export function Login(){
    return (
        <div className={"container-fluid mx-0 px-0"}>
            <div className={"row mx-0"}>
                <div className={"col-lg-4"}>
                    <Loginizquierda></Loginizquierda>
                </div>
                <div className={"d-none d-lg-block col-lg-8 mx-0 px-0"}>
                    <Loginderecha></Loginderecha>
                </div>
            </div>
        </div>
    );
}
