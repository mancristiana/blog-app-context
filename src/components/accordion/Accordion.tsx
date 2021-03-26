import styles from "./Accordion.module.scss";
import React, { FunctionComponent, useState } from "react";
import { AccordionProvider, useAccordionContext } from "./AccordionContext";

interface AccordionComposition {
    Collapsible: FunctionComponent;
    CollapseButton: FunctionComponent;
    ExpandButton: FunctionComponent;
}

const Accordion: FunctionComponent & AccordionComposition = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const expand = () => setIsExpanded(true);
    const collapse = () => setIsExpanded(false);

    return (
        <AccordionProvider value={{ isExpanded, expand, collapse }}>
            <div className={styles.accordion}>{children}</div>
        </AccordionProvider>
    );
};

const Collapsible: FunctionComponent = ({ children }) => {
    const { isExpanded } = useAccordionContext();
    if (isExpanded) {
        return <>{children}</>;
    } else {
        return null;
    }
};

const ExpandButton: FunctionComponent = ({ children }) => {
    const { isExpanded, expand } = useAccordionContext();
    if (!isExpanded) {
        return (
            <button className={styles.button} onClick={expand}>
                {children}
            </button>
        );
    } else {
        return null;
    }
};

const CollapseButton: FunctionComponent = ({ children }) => {
    const { isExpanded, collapse } = useAccordionContext();
    if (isExpanded) {
        return (
            <button className={styles.button} onClick={collapse}>
                {children}
            </button>
        );
    } else {
        return null;
    }
};

Accordion.Collapsible = Collapsible;
Accordion.CollapseButton = CollapseButton;
Accordion.ExpandButton = ExpandButton;

export { Accordion };
