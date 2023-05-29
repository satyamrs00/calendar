import { Tab, Tabs } from "@mui/material"
import { useState } from "react"

const Planning = () => {
    const [tab, setTab] = useState(0)
    return (
        <div className="p-6">
            <div className="border border-gray-300 border-t-0 border-l-0 border-r-0">
                <Tabs textColor="primary" indicatorColor="primary" value={tab} onChange={(e, v) => setTab(v)} TabIndicatorProps={{ style: { bottom: ".5rem", height: "calc(100% - 0.5rem)", zIndex: "-1", borderRadius: "0.5rem", opacity: 0.2, backgroundColor: "#6779ff" } }}>
                    <Tab disableRipple label="Project Planning" sx={{ textTransform: "none", fontSize: "1rem", minHeight: "0", padding: "0.5rem 1rem", '&.Mui-selected': { color: "#000" } }} />
                    <Tab disableRipple label="Weekly Planning" sx={{ textTransform: "none", fontSize: "1rem", minHeight: "0", padding: "0.5rem 1rem", '&.Mui-selected': { color: "#000" } }} />
                    <Tab disableRipple label="Planning Insights" sx={{ textTransform: "none", fontSize: "1rem", minHeight: "0", padding: "0.5rem 1rem", '&.Mui-selected': { color: "#000" } }} />
                </Tabs>
            </div>
        </div>
    )
}

export default Planning