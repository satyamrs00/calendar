import { Button, Tab, Tabs, Dialog } from "@mui/material"
import { useState } from "react"
import TabPanel from "../TabPanel"
import PeriodBlock from "../PeriodBlock"
import stroke from './../../assets/SVGs/Stroke-1.svg'
import plusInBox from './../../assets/SVGs/Combined-Shape-5.svg'
import './index.css'
import NewPeriodModal from "../NewPeriodModal"

const Planning = () => {
    const [tab, setTab] = useState(1)
    const [periods, setPeriods] = useState([
        {
            id: 1,
            name: "Period 1",
            date: new Date("2023-04-10"),
            start: new Date("2023-04-10 09:00"),
            end: new Date("2023-04-10 10:00"),
            color: "#D16D9A",
            activities: [ "Activity 1", "Activity 2" ]
        },
        {
            id: 2,
            name: "Period 2",
            date: new Date("2023-04-10"),
            start: new Date("2023-04-10 11:00"),
            end: new Date("2023-04-10 12:00"),
            color: "#938BE6",
        },
        {
            id: 3,
            name: "Period 3",
            date: new Date("2023-04-10"),
            start: new Date("2023-04-10 13:00"),
            end: new Date("2023-04-10 14:00"),
            color: "#E7C546",
        },
        {
            id: 4,
            name: "Period 4",
            date: new Date("2023-04-10"),
            start: new Date("2023-04-10 15:00"),
            end: new Date("2023-04-10 16:00"),
            color: "#02B683",
        },
    ])
    const [addPeriodModal, setAddPeriodModal] = useState(false)

    return (
        <div className="p-6 h-full">
            <Dialog
                open={addPeriodModal}
                onClose={() => setAddPeriodModal(false)}
            >
                <NewPeriodModal onClose={() => setAddPeriodModal(false)} onSubmit={(newP) => { setPeriods([...periods, newP]); setAddPeriodModal(false); console.log(newP) }} />
            </Dialog>
            <div className="border border-gray-300 border-t-0 border-l-0 border-r-0">
                <Tabs textColor="primary" indicatorColor="primary" value={tab} onChange={(e, v) => setTab(v)} TabIndicatorProps={{ style: { bottom: ".5rem", height: "calc(100% - 0.5rem)", zIndex: "-1", borderRadius: "0.5rem", opacity: 0.2, backgroundColor: "#6779ff" } }}>
                    <Tab disableRipple label="Project Planning" sx={{ textTransform: "none", fontSize: "1rem", minHeight: "0", padding: "0.5rem 1rem", '&.Mui-selected': { color: "#000" } }} />
                    <Tab disableRipple label="Weekly Planning" sx={{ textTransform: "none", fontSize: "1rem", minHeight: "0", padding: "0.5rem 1rem", '&.Mui-selected': { color: "#000" } }} />
                    <Tab disableRipple label="Planning Insights" sx={{ textTransform: "none", fontSize: "1rem", minHeight: "0", padding: "0.5rem 1rem", '&.Mui-selected': { color: "#000" } }} />
                </Tabs>
            </div>
            <TabPanel value={tab} index={0}>
                Project Planning
            </TabPanel>
            <TabPanel value={tab} index={1} className="h-full">
                <div className="flex justify-start items-center p-4">
                    <div className="text-lg font-bold">April 10-17</div>
                    <div className="flex mx-4 gap-2">
                        <img src={stroke} alt="" className="" />
                        Today
                        <img src={stroke} alt="" className=" rotate-180" />
                    </div>
                    <div className="ml-auto">
                        <Button variant="contained" color="primary" disableElevation sx={{ textTransform: "none", borderRadius: 9999 }} onClick={() => setAddPeriodModal(true)}>
                            <img src={plusInBox} alt="" className="mr-2" />
                            Add Period
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-[100px_repeat(7,_1fr)] text-center">
                    <div></div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs text-[#5364FF]">MON</div>
                        <span className="text-2xl bg-[#5364FF] rounded-full px-2 aspect-square flex justify-center items-center text-white">10</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs">TUE</div>
                        <span className="text-2xl px-2 aspect-square flex justify-center items-center">11</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs">WED</div>
                        <span className="text-2xl px-2 aspect-square flex justify-center items-center">12</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs">THU</div>
                        <span className="text-2xl px-2 aspect-square flex justify-center items-center">13</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs">FRI</div>
                        <span className="text-2xl px-2 aspect-square flex justify-center items-center">14</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs">SAT</div>
                        <span className="text-2xl px-2 aspect-square flex justify-center items-center">15</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-xs">SUN</div>
                        <span className="text-2xl px-2 aspect-square flex justify-center items-center">16</span>
                    </div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0"></div>
                    <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0 border-r-0"></div>
                </div>
                <div className="overflow-y-scroll scrollbar-hide" style={{
                    // height: "calc(100% - 13.5rem",
                    height: "100vh"
                }}>
                    <div className="grid grid-cols-[2rem_repeat(7,_1fr)] text-center" style={{ marginLeft: 'calc(100px - 2rem)' }}>
                        {[...Array(24)].map((_, i) => (
                            <>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0 text-xs text-[#AAA]">
                                    <div className="transform -translate-y-1/2 -translate-x-10">
                                        {(i > 9) ? `${i}:00` : (i > 0) && `0${i}:00`}
                                    </div>
                                </div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0">
                                    {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 10)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}
                                </div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0">
                                    {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 11)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}</div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0">
                                    {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 12)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}
                                </div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0">
                                    {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 13)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}
                                </div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0">
                                    {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 14)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}
                                </div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0">
                                    {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 15)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}
                                </div>
                                <div className="min-h-[3rem] border border-gray-300 border-t-0 border-l-0 border-r-0">
                                {periods?.filter(period => period.start.getHours() === i && period.date.getDate() === 16)?.map(period => (
                                        <PeriodBlock period={period} />
                                    ))}
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={tab} index={2}>
                Planning Insights
            </TabPanel>
        </div>
    )
}

export default Planning

// TODO - Make calendar dynamic