// Write your code here
import {useState} from 'react'

import {MainContainer, LockImage, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isClicked, setButtonClicking] = useState(false)

  const onClickButton = () => {
    setButtonClicking(prevState => !prevState)
  }
  const lockImage = isClicked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const altText = isClicked ? 'unlock' : 'lock'

  const paragraph = isClicked
    ? 'Your Device is Unlocked'
    : 'Your Device is locked'

  const buttonText = isClicked ? 'Lock' : 'Unlock'

  return (
    <MainContainer>
      <LockImage src={lockImage} alt={altText} />
      <Paragraph>{paragraph}</Paragraph>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </MainContainer>
  )
}
export default Unlock
