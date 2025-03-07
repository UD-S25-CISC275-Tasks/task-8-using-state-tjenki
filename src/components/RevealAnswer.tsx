import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    let [visible, setVisible] = useState<boolean>(true);
    function answervisible(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <span>
                <Button onClick={answervisible}>Reveal Answer</Button>
                {!visible && <div>42</div>}
            </span>
        </div>
    );
}
