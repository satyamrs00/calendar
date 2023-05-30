import close from './../../assets/SVGs/Vector-1.svg'
import tick from './../../assets/SVGs/Vector 309.svg'
import del from './../../assets/SVGs/Delete.svg'
import plusInBox from './../../assets/SVGs/Combined-Shape-5.svg'
import { TextField, ToggleButton, ToggleButtonGroup, Button } from '@mui/material'
import CustomDateRangePicker from '../CustomDateRangePicker'
import { useState } from 'react'
import clock from './../../assets/SVGs/Time Circle.svg'
import { TimeField } from '@mui/x-date-pickers-pro'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const NewPeriodModal = ({ onClose, onSubmit }) => {
    const [newPeriod, setNewPeriod] = useState({})

    return (
        <div className="p-3 w-[35rem]">
        <div className="flex justify-between items-center mb-6">
            <div className="font-bold text-xl">Add Period</div>
            <img src={close} alt="" className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="mb-6">
            <div className="font-bold text-sm mb-1">Period Name</div>
            <TextField variant="outlined" size="small" fullWidth className="mb-3" placeholder="Enter Period Name" value={newPeriod.name} onChange={e => setNewPeriod({ ...newPeriod, name: e.target.value })} />
        </div>
        <div className="flex gap-3 mb-6">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="grow">
                    <div className="font-bold text-sm mb-1">Start Time</div>
                    <TimeField ampm={false} variant="outlined" size="small" fullWidth className="mb-3" value={newPeriod.start} onChange={newV => setNewPeriod({ ...newPeriod, start: new Date(newV) })} InputProps={{ startAdornment: <img src={clock} alt="" className="mr-2" /> }} />
                </div>
                <div className="grow">
                    <div className="font-bold text-sm mb-1">End Time</div>
                    <TimeField ampm={false} variant="outlined" size="small" fullWidth className="mb-3" value={newPeriod.end} onChange={newV => setNewPeriod({ ...newPeriod, end: new Date(newV) })} InputProps={{ startAdornment: <img src={clock} alt="" className="mr-2" /> }} />
                </div>
            </LocalizationProvider>
        </div>
        <div className="mb-6">
            <div className="font-bold text-sm mb-1">Repeat on days</div>
            <ToggleButtonGroup
                func='repeat'
                value={newPeriod.repeat}
                onChange={(e, v) => setNewPeriod({ ...newPeriod, repeat: v })}
                className="mb-3"
                size="small"
            >
                <ToggleButton func='repeat' value={0}>S</ToggleButton>
                <ToggleButton func='repeat' value={1}>M</ToggleButton>
                <ToggleButton func='repeat' value={2}>T</ToggleButton>
                <ToggleButton func='repeat' value={3}>W</ToggleButton>
                <ToggleButton func='repeat' value={4}>T</ToggleButton>
                <ToggleButton func='repeat' value={5}>F</ToggleButton>
                <ToggleButton func='repeat' value={6}>S</ToggleButton>
            </ToggleButtonGroup>
        </div>
        <div className="mb-12">
            <div className="font-bold text-sm mb-1">From</div>
            <CustomDateRangePicker value={newPeriod?.dateRange ? newPeriod?.dateRange : [null,null]} setValue={v => setNewPeriod({ ...newPeriod, dateRange: v, date: new Date(v[0]) })} />
        </div>
        <div className="flex justify-end items-center gap-3 ">
            <ToggleButtonGroup
                func='color'
                disableRipple
                value={newPeriod.color}
                exclusive
                onChange={(e, v) => setNewPeriod({ ...newPeriod, color: v })}
                className="mb-3 mr-auto"
                size="small"
            >
                <ToggleButton func='color' value={'#D16D9A'}><img src={tick} alt="" className="hidden" />
                </ToggleButton>
                <ToggleButton func='color' value={'#938BE6'}><img src={tick} alt="" className="hidden" /></ToggleButton>
                <ToggleButton func='color' value={'#E7C546'}><img src={tick} alt="" className="hidden" /></ToggleButton>
                <ToggleButton func='color' value={'#02B683'}><img src={tick} alt="" className="hidden" /></ToggleButton>
            </ToggleButtonGroup>
            <img src={del} alt="" className="cursor-pointer" onClick={onClose} />
            <Button variant="contained" color="primary" disableElevation sx={{ textTransform: "none", borderRadius: 9999 }} onClick={() => {
                onSubmit(newPeriod)
                setNewPeriod({})
            }}>
                <img src={plusInBox} alt="" className="mr-2" />
                Add Period
            </Button>
        </div>
    </div>

    )
}

export default NewPeriodModal