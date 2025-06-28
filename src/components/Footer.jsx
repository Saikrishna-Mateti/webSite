import React from "react";
import { Stack, Link } from "@mui/material";
import {Dot} from "lucide-react"

function Footer() {
    return (
        <footer
        style={{
            backgroundColor: '#232425',
            display:'flex',
            flexDirection: 'column',
            color: "#a9a9b3",
            padding: "20px 20px",
            textAlign: "center",
            position: "absolute",
            left: 0,
            right: 0,
            height: "50px",
            bottom: 0,
            flexGrow: 0,
        }}
        >
        {/* <p>© 2023 Sai Krishna Mateti. All rights reserved.</p> */}
            <div className='footer-content' style={{display: 'flex', justifyContent:'center', textAlign:'center', gap:'2px', fontFamily:'monospace', fontSize:'15px'}}>
                <span>© 2023</span>
                <span><Dot/></span>
                <span><Link href="https://saikrishnamateti.com/" color="inherit">Sai Krishna Mateti</Link></span>
                <span><Dot/></span>
                <span><Link href="https://creativecommons.org/licenses/by-nd/4.0/" color='inherit'>CC BY-ND 4.0</Link></span>
            </div>
        </footer>
    );
}
export default Footer;