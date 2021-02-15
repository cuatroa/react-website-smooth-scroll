import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
    return (
        <ServicesContainer id="more">
            <ServicesH1>More From HWPO</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Playlist by HWPO</ServicesH2>
                    <ServicesP>Choosing the right playlist for our training schedule.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Meet the trainers</ServicesH2>
                    <ServicesP>Meet the experts behind HWPO programs and wods</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Mobility</ServicesH2>
                    <ServicesP>Improve your flexibility with active recovery sessions</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
