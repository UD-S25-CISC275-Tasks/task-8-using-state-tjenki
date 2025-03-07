import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [dice1, setdice1] = useState<number>(6);
    let [dice2, setdice2] = useState<number>(4);
    return (
        <div>
            <span data-testid="left-die">Dice1: {dice1} </span>
            <span data-testid="right-die">Dice2: {dice2}</span>
            <Button onClick={() => setdice1(d6())}>Roll Left</Button>
            <Button onClick={() => setdice2(d6())}>Roll Right</Button>
            {dice1 === dice2 && dice2 === 1 ? (
                <span>Lose</span>
            ) : dice1 === dice2 && dice2 !== 1 ? (
                <span>Win </span>
            ) : (
                <span>Try Again</span>
            )}
        </div>
    );
}
