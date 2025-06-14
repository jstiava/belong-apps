import HoursMinimap from "@/shared_components/HoursMinimap";
import { Schedule } from "@jstiava/chronos";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function RightTime() {

    const [schedule, setSchedule] = useState(new Schedule());

    if (!schedule) {
        return null;
    }
    return (
        <>
            <Typography>Hello world.</Typography>

            <div className="flex" style={{
                width: '25rem'
            }}>

                <HoursMinimap

                    mode="dark"
                    schedule={schedule}
                    onChange={(newSchedule) => {
                        setSchedule(newSchedule)
                    }}
                />
            </div>
        </>
    );
}