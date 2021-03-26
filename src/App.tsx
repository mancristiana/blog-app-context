import styles from "./App.module.scss";
import React, { FunctionComponent } from "react";
import { Accordion } from "./components/accordion/Accordion";

export const App: FunctionComponent = () => {
    return (
        <div className={styles.app}>
            <div className={styles.header}>
                <Accordion>
                    <h1>Accordion</h1>
                    <Accordion.CollapseButton>
                        Show less
                    </Accordion.CollapseButton>
                    <p>
                        In pharetra nibh massa, eu auctor nulla iaculis in.
                        Phasellus aliquam luctus lacus eu ultrices. Donec
                        suscipit nulla sed dapibus gravida. Maecenas placerat
                        sed massa vel bibendum. Proin ullamcorper pulvinar
                        efficitur.
                        <Accordion.Collapsible>
                            Vestibulum feugiat odio sit amet nibh mattis, id
                            mollis quam tincidunt. Cras porta purus vel tellus
                            semper, ac tincidunt sem auctor. Praesent justo
                            eros, congue placerat quam eu, hendrerit tempor
                            nulla. Sed finibus imperdiet venenatis. Curabitur
                            non orci ac dui tincidunt vehicula. Sed gravida
                            ultrices diam eu venenatis.
                        </Accordion.Collapsible>
                    </p>

                    <Accordion.ExpandButton>
                        Show more...
                    </Accordion.ExpandButton>
                    <Accordion.CollapseButton>
                        Show less
                    </Accordion.CollapseButton>
                </Accordion>
            </div>
        </div>
    );
};

