import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/free-mode'

import IHistory from "../../interfaces/IHistory";
import HistoryCircle from "./HistoryCircle";
import { SwiperOptions } from "swiper/types";
import styled from "styled-components";


const StyledSlide = styled(SwiperSlide)`
    width: 64px;
    margin-left: 20px;

    &:nth-last-child(1) {
        margin-right: 20px;
    }
`

interface PropsTypes {
    histories: Array<IHistory>;
}

const options: SwiperOptions = {
    slidesPerView: "auto",
}

const HistoryList = (props: PropsTypes) => {
    const Slides = props.histories.map(
        (el, i) => <StyledSlide key={i}>
            <HistoryCircle 
                $borderColor={el.active ? "var(--accent)" : undefined} 
                $icon={el.preview}     
            />
        </StyledSlide>
    )

    return (
        <Swiper {...options}>
            {Slides}
        </Swiper>
    )
}

export default HistoryList