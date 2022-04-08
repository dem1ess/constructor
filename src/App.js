import React, {useRef, useState} from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'

// components:
import Header from "./module/header/Header";
import Avatar from "./module/UI/avatar/Avatar";
import Title from "./module/UI/title/Title";
import Description from "./module/UI/description/Description";
import Range from "./module/UI/Range/Range";
import Footer from "./module/footer/Footer";
// icons:
import { ReactComponent as MailIcon } from './assets/icons/mail.svg'
import { ReactComponent as PhoneIcon } from './assets/icons/phone.svg'


const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`

const App = () => {
  const [skillsCounter, setSkillsCounter] = useState(1)
  const [worksCounter, setWorksCounter] = useState(1)

  const componentRef = useRef()
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className='ui-wrapper'>
      <Header onClick={handlePrintClick} />
      <div className='ui-content-wrapper'>
        <Wrapper>
          <div className='ui-container' ref={componentRef}>
            <Row itemsCenter>
              <Sidebar>
                <Avatar />
              </Sidebar>
              <Content>
                <Title>Stanislav Kharchenko</Title>
                <Description>
                  Experienced Software & Machine Learning Engineer with a
                  demonstrated history.
                </Description>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>
                <Description>Software Engineer</Description>
                <Description isSecondary>Poznan, Poland</Description>

                <Description isPrimary style={{ marginTop: '2rem' }}>
                  <MailIcon style={{ marginRight: '0.6rem' }} />
                  dem1ess56@gmail.com
                </Description>
                <Description isPrimary>
                  <PhoneIcon style={{ marginRight: '0.6rem' }} />
                  +4 575 471 464
                </Description>
              </Sidebar>

              <Content>
                <Title size='3' isUppercase>
                  Education:
                </Title>
                <Description>Professional College of Transport and Computer Technologies of the National University "Chernihiv Polytechnic"</Description>

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: '3.6rem' }}
                >
                  Work experience:
                </Title>
                {new Array(worksCounter).fill(1).map((__, i) => (
                  <Description key={i}>{i + 1 + '. '}Pam Pam Studio - Game Designer (3 mounts)</Description>
                ))}

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  style={{ marginTop: '3rem' }}
                >
                  Skills:
                </Title>

                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range key={i} />
                ))}
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>
      <Footer />
    </div>
  )
}

export default App
