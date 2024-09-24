import React from 'react';
import './LogCard.css';
import { Outlet } from 'react-router-dom';
import VIcons from '../icons/VIcons';
function LogCard() {
    return (
        <div>


            <div style={{
                flex: 1, backgroundColor: "red", display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexDirection: "column"
            }}>
           <div>
            <VIcons/>
            
           </div>


            </div>

            <div>
                <Outlet />
            </div>
        </div>




    )
}

export default LogCard
