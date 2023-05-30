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
            date: new Date(2023, 5, 2),
            start: new Date(2023, 5, 2, 9, 0),
            end: new Date(2023, 5, 2, 10, 0),
            color: "#D16D9A",
            activities: [ "Activity 1", "Activity 2" ]
        },
        {
            id: 2,
            name: "Period 2",
            date: new Date(2023, 5, 3),
            start: new Date(2023, 5, 3, 1, 0),
            end: new Date(2023, 5, 3, 2, 0),
            color: "#938BE6",
        },
        {
            id: 3,
            name: "Period 3",
            date: new Date(2023, 5, 1),
            start: new Date(2023, 5, 1, 13, 0),
            end: new Date(2023, 5, 1, 14, 0),
            color: "#E7C546",
        },
        {
            id: 4,
            name: "Period 4",
            date: new Date(2023, 4, 31),
            start: new Date(2023, 4, 31, 15, 0),
            end: new Date(2023, 4, 31, 16, 0),
            color: "#02B683",
        },
    ])
    const [addPeriodModal, setAddPeriodModal] = useState(false)
    const [currentStart, setCurrentStart] = useState(new Date())

    const handleSubmit = (newP) => {
        const newPs = [{
            name: newP.name,
            date: new Date (newP.dateRange[0]),
            start: newP.start,
            end: newP.end,
            color: newP.color
        }]
        const d0 = new Date(newP.dateRange[0])
        const d0copy = new Date(newP.dateRange[0])
        const d1 = new Date(newP.dateRange[1])
        if (newP?.repeat?.length > 0){
            for(let i = 1; i <= (d1 - d0) / (1000 * 60 * 60 * 24); i++){
                d0copy.setDate(d0copy.getDate() + 1)
                if (newP.repeat.includes(d0copy.getDay())){
                    newPs.push({
                        name: newP.name,
                        date: new Date (d0copy),
                        start: newP.start,
                        end: newP.end,
                        color: newP.color
                    })    
                }
            }    
        }
        setPeriods([...periods, ...newPs])
        setAddPeriodModal(false); 
    }

    return (
        <div className="p-6 h-full">
            <Dialog
                open={addPeriodModal}
                onClose={() => setAddPeriodModal(false)}
            >
                <NewPeriodModal onClose={() => setAddPeriodModal(false)} onSubmit={handleSubmit} />
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
                    <div className="text-lg font-bold w-72">
                        {`${currentStart?.toLocaleDateString([], {year: 'numeric', month: 'short', day: 'numeric' })} - ${new Date(currentStart?.getTime() + 6 * 24 * 60 * 60 * 1000)?.toLocaleDateString([], {year: 'numeric', month: 'short', day: 'numeric' })}`}
                    </div>
                    <div className="flex mx-4 gap-2">
                        <img src={stroke} alt="" className="cursor-pointer" onClick={() => setCurrentStart(new Date(currentStart?.getTime() - 7 * 24 * 60 * 60 * 1000))} />
                        <div onClick={() => setCurrentStart(new Date())} className="cursor-pointer">
                            Today
                        </div>
                        <img src={stroke} alt="" className="cursor-pointer rotate-180" onClick={() => setCurrentStart(new Date(currentStart?.getTime() + 7 * 24 * 60 * 60 * 1000))} />
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
                    {[...Array(7)].map((_, i) => (
                        <div className="flex flex-col justify-center items-center">
                            <div className={"text-xs" + (Math.abs((new Date(currentStart.getTime() + i * 24 * 60 * 60 * 1000)).getTime() - (new Date()).getTime()) < 12*60*60*1000 ? ' text-[#5364FF]' : '')}>
                                {new Date(currentStart?.getTime() + i * 24 * 60 * 60 * 1000)?.toLocaleDateString([], {weekday: 'short'}).toUpperCase()}
                            </div>
                            <span className={"text-2xl rounded-full px-2 aspect-square flex justify-center items-center" + (Math.abs((new Date(currentStart.getTime() + i * 24 * 60 * 60 * 1000)).getTime() - (new Date()).getTime()) < 12*60*60*1000 ? ' bg-[#5364FF] text-white' : '')}>
                                {new Date(currentStart?.getTime() + i * 24 * 60 * 60 * 1000)?.toLocaleDateString([], {day: '2-digit'})}
                            </span>
                        </div>
                    ))}
                    {[...Array(8)].map((_, i) => (
                        <div className={'min-h-[3rem] border border-gray-300 border-t-0 border-l-0' + (i === 7 ? ' border-r-0': '')}></div>
                    ))}
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
                                {[...Array(7)].map((_, j) => (
                                    <div className={"min-h-[3rem] border border-gray-300 border-t-0 border-l-0" + (j === 6 && ' border-r-0')}>
                                        <div className="h-full flex justify-center items-stretch">
                                            {periods?.filter(period => period.start.getHours() === i && Math.abs(period.date.getTime() - (currentStart?.getTime() + j * 24 * 60 * 60 * 1000)) < 12*60*60*1000).map(period => (
                                                <PeriodBlock period={period} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
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