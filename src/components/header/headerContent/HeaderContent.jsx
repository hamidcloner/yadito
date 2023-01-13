import {
    HeaderContentWrapper,
    RightSideContent,
    LeftSideContent
} from './HeaderContent.elements';
import { Row } from 'react-bootstrap';



const HeaderContent = () => {
    return (
        <HeaderContentWrapper>
            <Row className='py-2'>
                <RightSideContent md={5}>
                    
                </RightSideContent>
                <LeftSideContent md={7}>

                </LeftSideContent>
            </Row>
        </HeaderContentWrapper>

    )
}

export default HeaderContent;