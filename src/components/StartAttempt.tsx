import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [attemptNum, setAttemptNum] = useState<number>(4);
    let [progress, setProgress] = useState<boolean>(false);
    function start(): void {
        setAttemptNum(attemptNum - 1);
        setProgress(true);
    }
    return (
        <div>
            <span>
                <Button
                    onClick={() => {
                        start();
                    }}
                    disabled={progress || attemptNum === 0}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => {
                        setProgress(false);
                    }}
                    disabled={!progress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => {
                        setAttemptNum(1 + attemptNum);
                    }}
                    disabled={progress}
                >
                    Mulligan
                </Button>
                Attempts: {attemptNum}.
            </span>
        </div>
    );
}
