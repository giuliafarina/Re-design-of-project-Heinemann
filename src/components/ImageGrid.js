

import React from "react";
import { SRLWrapper } from "simple-react-lightbox";

function ImageGrid() {
    return <SRLWrapper><div className="grid_container">

        <div className="row">
            <div className="column">
                <img src="images/1917_Hudson River, New York_olie.jpg" alt="Hudson River"></img>
                <img src="images/1922_1_medium.jpg"></img>
                <img src="images/1938_1_medium.jpg"></img>
                <img src="images/1939_klitter ved Hønen_olie.jpg"></img>


            </div>

            <div className="column">
                <img src="images/båd_litografi.jpg"></img>
                <img src="images/1939_redningsstationen i Sønderho_olie.jpg"></img>
                <img src="images/1939_Vesterhavet_ Fanø_akvarel.jpg"></img>




            </div>

            <div className="column">
                <img src="images/0000_pæoner i vase_olie.jpg"></img>
                <img src="images/1945_Københavns havn_olie.jpg"></img>
                <img src="images/1948_både ved Sønderho havn_olie.jpg"></img>
                <img src="images/1950_klitter_monotypi_2.jpg"></img>



            </div>

            <div className="column">
                <img src="images/1955_Sutherland Polyn Bay_litografi.jpg"></img>
                <img src="images/1955_Sutherland_litografi.jpg"></img>
                <img src="images/1951_klitter_monotypi.jpg"></img>
                <img src="images/1952_skibe_akvarel.jpg"></img>
            </div>
        </div></div>
    </SRLWrapper>

}


export default ImageGrid;

