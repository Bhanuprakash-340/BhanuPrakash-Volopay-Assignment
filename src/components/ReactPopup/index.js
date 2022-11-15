import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './index.css'
import { BiFilter} from "react-icons/bi";

const ReactPopUp = props => {
    const {cardsDataList} = props

    return(
        <>
    <div className="popup-container">
      <Popup
        trigger={
        <button type="button" className='filter-button'>
            <BiFilter className='filter-icon'/>Filter
        </button>
        }
        position="bottom right"
      >
    <div className='filter-card-container'>
        <div className='need-popup'>
        <p className='filter-text'>
            Filters
        </p>
        <hr/>
        <div>
            <p className='filter-text'>Type</p>
            <div className='checkbox-container'>
                <div className='check-div'>
                    <input type="checkbox" id="subscription" className='check'/>
                    <label htmlFor='subscription' className='checkbox-label'>Subscription</label>
                </div>
                <div className='check-div'>
                    <input type="checkbox" id="burner" className='check'/>
                    <label htmlFor='burner' className='checkbox-label'>Burner</label>
                </div>
            </div>
            <div className='drop-down'>
                <label id="cardHolder" className='filter-text'>Cardholder</label>
                <select name="cardHolder" id="cardHolder" className='select-bar' placeholder='Select cardholder'>
                    <option value="" disabled={false}>Select cardholder</option>
                    {cardsDataList.map((each,index) =>(
                        <option value={each.personName} key={index}>{each.personName}</option>
                    ))}
                </select>
            </div>
            <div className='filter-button-container'>
                <button type="button" className='apply-button'>Apply</button>
                <button type="button" className='clear-button'>Clear</button>
            </div>
        </div>
        </div>
    </div>    
      </Popup>
    </div>
    </>
    )
    }

   export default ReactPopUp