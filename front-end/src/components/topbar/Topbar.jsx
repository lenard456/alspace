import { Chat, Notifications } from "@mui/icons-material";

import './topbar.css'
import Searchbar from './searchbar'
import Avatar from '/src/components/avatar'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <img className="logo" src="/assets/logo.png" alt="Alspace Logo"/>
                <span className="logo-text">AlSpace</span>
            </div>

            <div className="topbar-center">
                <Searchbar />
            </div>

            <div className="topbar-right">

                <div className="topbar-icons">
                    <div className="topbar-icons-item">
                        <Chat className="text-blue-500" sx={{fontSize: '16px'}}/>
                        <span className="topbar-icons-badge">1</span>
                    </div>

                    <div className="topbar-icons-item">
                        <Notifications className="text-blue-500" sx={{fontSize: '16px'}} />
                        <span className="topbar-icons-badge">2</span>
                    </div>
                </div>

                <Avatar size="sm" className="mx-8" src="https://avatars.dicebear.com/api/initials/lenard.svg" />

            </div>

        </div>
    )
}