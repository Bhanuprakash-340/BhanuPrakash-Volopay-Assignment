import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
const overlayStyles = {
    backgroundColor:"transparent",
   }


   const ReactCardPopUp = () => (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button type="button" className="trigger-button">
           button
          </button>
        }
        overlayStyle={overlayStyles}
      >
        <p>React is a popular and widely used programming language</p>
      </Popup>
    </div>
   )
   export default ReactCardPopUp