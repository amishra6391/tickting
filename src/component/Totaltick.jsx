import {IoIosArrowDropup} from "react-icons/io";
import {AiOutlineUser} from "react-icons/ai"
import React from "react";
import './totaltick.css'
    const Totaltick=({type})=>{
        let data;
        switch(type){
            case "totalTicket":
            data={
                total:"Total Tickets",
                isMemory:false,
                linl:" See all Tickets",
            };
            break;
            case "done":
                data={
                    total:"Done",
                    isMemory:true,
                    linl:"See Done",
                };
                break;
                case "balance":
                    data={
                        total:"Balance",
                        isMemory:true,
                        linl:" See  balance Tickt  ",
                    };
                    break;

            default:
                break;
        }
        return(
            <>
                <div className="widget">
                    <div className="leftTick">
                        <p className="total">Total Tickets</p>
                        <span className="spanTick">104</span>
                        <p className="link">view all Tickets</p>
                    </div>
                    <div className="rightTicket">
                        <div className="percentage">
                        <IoIosArrowDropup className="iconTota negatic"/>

                        <AiOutlineUser className="iconTota userlogo"/>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    export default Totaltick;