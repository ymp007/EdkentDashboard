import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import './HomeData';
import './Home.css';
import { HomeData } from './HomeData';
import { DateRangePicker } from "@monceeef/react-daterange-picker";
import { BsCalendar } from 'react-icons/bs';



export default function Home() {
    const [open, setOpen] = useState(false);
    const [startdate, setStartdate] = useState("startdate");
    const [enddate, setEnddate] = useState("enddate");
    const [chardata, setChardata] = useState([150, 200, 500, 250, 300, 100, 450, 290]);
    const [chardata1, setChardata1] = useState([250, 100, 256, 450, 354, 158, 358, 100]);


    const chanageDate = (range) => {

        setEnddate(
            range.endDate.toLocaleString().split(",")[0]);

        setOpen(false);
        setStartdate(range.startDate.toLocaleString().split(",")[0]);
        console.log(startdate);
    }

    return (
        <div>
            <div className="row">
                <div className="col up-btn-container">
                    <button className="btn up-btn">Upgrade</button>
                </div>
            </div>
            <div className="row">
                {HomeData.map((tab, index) => {
                    return <div className="col" key={index}>
                        <div className="card tabs">
                            <div className="icon-container ">
                                {tab.icon}
                            </div>
                            <div className="tab-data">
                                <p><span>{tab.data}</span><br/>{tab.title}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>
            <div className="row ml-auto">
                <div className="card chart">

                    <div onClick={() => setOpen(!open)} id="picker">
                        {startdate}-{enddate}<BsCalendar id="cal-icon" />
                    </div>
                    <DateRangePicker className="datepicker"
                        open={open}
                        maxDate={Date()}
                        onChange={chanageDate}
                    />
                    {!open ?
                        <>
                            <div>
                                <h6>Analytics</h6>
                            </div>
                            <div className="data">
                                {HomeData.map((val, index) => {
                                    return <p><span>{val.data}</span>{val.title}</p>
                                })}
                            </div></> : null}
                    <div className="line-chart">
                        {!open ? <Line
                            height={70}
                            data={{
                                labels: ['JAN20', 'FEB20', 'MAR20', 'APR20', 'MAY20', 'JUNE20', 'JULY20', 'AUG20'],
                                datasets: [{
                                    pointStyle: 'line',
                                    lineTension: 0,
                                    borderColor: "#4fb158",
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    data: chardata
                                },
                                {
                                    pointStyle: 'line',
                                    radius: 0,
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    borderColor: '#486aba',
                                    lineTension: 0,
                                    data: chardata1
                                },
                                ]
                            }}
                            options={{
                                legend: {
                                    display: false
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true,
                                            suggestedMax: 700,
                                        }
                                    }]
                                }
                            }}
                        /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}
