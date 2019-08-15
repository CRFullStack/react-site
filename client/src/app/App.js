import React from "react";
import PlayerSection from "../player_section/playerSection";
import ReactFullpage from "@fullpage/react-fullpage";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

const _shortBio = `We take the time out to profile and drop props for the best
Football players in the world`;
function App() {
  return (
    <ParallaxProvider>
      <ReactFullpage
        //fullpage options
        scrollingSpeed={1100} /* Options here */
        sectionsColor={[]}
        scrollOverflow={true}
        anchors={["section1a", "section2a", "section3a", "section4a"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <PlayerSection
                playerYT={"rgLi9LZzD3w"}
                playerName={"Only the Best"}
                shortBio={_shortBio}
                section={"section"}
                bg={
                  "https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/tottenham-hotspur-v-ajax-uefa-champions-league-semi-final-first-leg-5cdfbea220e3ab575b000001.jpg"
                }
                teamColor={"255, 0, 0" /**red */}
                secondaryColor={"0, 0, 0"}
                playerId={"1"}
              />

              <PlayerSection
                playerYT={"f3glZJESCoo"}
                playerName={"Willian Borges"}
                shortBio={"My boy Willian is a beast."}
                section={"section"}
                bg={"https://futaa.com/images/full/download-1.jpg"}
                teamColor={"0, 0, 255" /**blue */}
                secondaryColor={"255, 255, 255"}
                playerId={"2"}
              />

              <PlayerSection
                playerYT={"1j6qmzcCuGo"}
                playerName={"Memphis Depay"}
                shortBio={"My boy Memphis aka I can't hear you!."}
                section={"section"}
                bg={
                  "https://3.bp.blogspot.com/-e8_B9h6Wmnc/XGjA7xAtrjI/AAAAAAAAF_0/n_2RBfp95jskXrFONtekfkepTlNFrgz2ACHMYCw/s1600/memphis-depay-demands-respect-from-lyon-sekdrive.jpg"
                }
                teamColor={"0, 0, 255" /**blue */}
                secondaryColor={"255, 0, 0" /**Red */}
                playerId={"3"}
              />
              <PlayerSection
                playerYT={"0xXheZx8yFM"}
                playerName={"Neymar Jr."}
                shortBio={"My boy breaking ankles."}
                section={"section"}
                bg={"https://wallpapercave.com/wp/wp3111656.jpg"}
                teamColor={"255,255,0" /**Yellow */}
                secondaryColor={"0, 255, 0" /**Green */}
                playerId={"4"}
              />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </ParallaxProvider>
  );
}

export default App;
