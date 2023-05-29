import Planning from "../../components/Planning"
import TabPanel from "../../components/TabPanel"
import search from "./../../assets/SVGs/Combined-Shape.svg"
import notif from "./../../assets/SVGs/Combined-Shape-1.svg"
import planning from "./../../assets/SVGs/Combined-Shape-2.svg"
import edit from "./../../assets/SVGs/Combined-Shape-3.svg"
import document from "./../../assets/SVGs/Combined-Shape-4.svg"
import ivan from "./../../assets/images/Ivan.png"
import { Avatar, Tab, Tabs } from "@mui/material"
import { useState } from "react"

const Calendar = () => {
    const [mainTab, setMainTab] = useState(0)
    return (
        <div className="h-screen flex flex-col">
            <div className="flex justify-between w-full shadow-lg p-4">
                <div></div>
                <Tabs value={mainTab} textColor="primary" indicatorColor="primary" TabIndicatorProps={{ style: { bottom: "0.5rem" } }}>
                    <Tab disableRipple label="Planning" icon={<img src={planning} alt="Planning" />} onClick={() => setMainTab(0)} iconPosition="start" sx={{ 
                        '&.Mui-selected': {
                            color: "#000",
                        },
                        textTransform: "none",
                        fontSize: "1rem",
                        minHeight: "0",
                        padding: "0.5rem 1rem",
                    }} />
                    <Tab disableRipple label="Documentation" icon={<img src={edit} alt="Edit" />} onClick={() => setMainTab(1)} iconPosition="start" sx={{ 
                        '&.Mui-selected': {
                            color: "#000",
                        },
                        textTransform: "none",
                        fontSize: "1rem",
                        minHeight: "0",
                        padding: "0.5rem 1rem",
                        height: "auto",
                    }} />
                    <Tab disableRipple label="Housekeeping" icon={<img src={document} alt="Document" />} onClick={() => setMainTab(2)} iconPosition="start" sx={{ 
                        '&.Mui-selected': {
                            color: "#000",
                        },
                        textTransform: "none",
                        fontSize: "1rem",
                        minHeight: "0",
                        padding: "0.5rem 1rem",
                        height: "auto",
                    }} />
                </Tabs>
                <div className="flex align-center">
                    <img src={search} alt="Search" className="mr-3" />
                    <img src={notif} alt="Notification" className="mr-3" />
                    <Avatar alt="Ivan" src={ivan} />
                </div>
            </div>
            <TabPanel value={mainTab} index={0} className="h-full">
                <Planning />
            </TabPanel>
            <TabPanel value={mainTab} index={1}>
                Documentation
            </TabPanel>
            <TabPanel value={mainTab} index={2}>
                Housekeeping
            </TabPanel>
        </div>
    )
}

export default Calendar