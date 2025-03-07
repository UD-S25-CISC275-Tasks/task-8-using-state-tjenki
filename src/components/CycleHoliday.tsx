import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday =
        | "Valentines Day: 🩷"
        | "Memorial Day: 👩🏿‍✈️"
        | "Easter: 🐰"
        | "Christmas: 🎅🏿"
        | "Juneteenth: 💃🏿";
    let HOLIDAY_TIME_TRANSITIONS: Record<Holiday, Holiday> = {
        "Valentines Day: 🩷": "Easter: 🐰",
        "Easter: 🐰": "Memorial Day: 👩🏿‍✈️",
        "Memorial Day: 👩🏿‍✈️": "Juneteenth: 💃🏿",
        "Juneteenth: 💃🏿": "Christmas: 🎅🏿",
        "Christmas: 🎅🏿": "Valentines Day: 🩷"
    };
    let HOLIDAY_ALPHABET_TRANSITIONS: Record<Holiday, Holiday> = {
        "Christmas: 🎅🏿": "Easter: 🐰",
        "Easter: 🐰": "Juneteenth: 💃🏿",
        "Juneteenth: 💃🏿": "Memorial Day: 👩🏿‍✈️",
        "Memorial Day: 👩🏿‍✈️": "Valentines Day: 🩷",
        "Valentines Day: 🩷": "Christmas: 🎅🏿"
    };
    let [holiday, setHoliday] = useState<Holiday>("Juneteenth: 💃🏿");

    function advanceAlphabetically(): void {
        let nextHoliday = HOLIDAY_ALPHABET_TRANSITIONS[holiday];
        setHoliday(nextHoliday);
    }
    function advanceByYear(): void {
        let nextHoliday = HOLIDAY_TIME_TRANSITIONS[holiday];
        setHoliday(nextHoliday);
    }
    return (
        <div>
            <span>{holiday}</span>
            <Button onClick={advanceAlphabetically}>Advance By Alphabet</Button>
            <Button onClick={advanceByYear}>Advance By Year</Button>
        </div>
    );
}
