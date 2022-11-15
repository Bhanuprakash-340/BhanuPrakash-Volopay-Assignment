import { ImFire } from "react-icons/im";
import { TiArrowSyncOutline } from "react-icons/ti";
import { BsDot } from "react-icons/bs";
import './index.css'

const Card = props =>{
    const {cardDetails}= props 
    const {name,cardType,expiry,personName,limit,spent,availableToSpend}= cardDetails

    return (
        <>
        <div className='name-icon-container'>
            <div>
                <h4 className='card-name'>{name}</h4>
                <div className='dot-need'>
                    <p className='name'>{personName}</p>
                    <BsDot className='dot-icon'/>
                    <p className='name'>Software Subscription</p>
                </div>
            </div>
            <div className='fire-card-container'>
                {cardType === "Subscription"?<TiArrowSyncOutline className='card-type-icon'/>:<ImFire className='card-type-icon'/>} 
            </div>
        </div>
        <div className='card-type-expiry'>
            <button type='button' className='bur-sub-button'>{cardType}</button>
                {cardType ==="Burner"?(<p className='exp-text'>Expires: {expiry}</p>):(<p className='exp-text'>November limit : {limit} SGD</p>)}            
        </div>
        <div className="bar">
            <div className="green" style={{ width: `${Math.floor((availableToSpend.value/(spent.value+availableToSpend.value))*100)}%` }}>
            </div>
            <div className="red" style={{ width: `${Math.ceil((spent.value/(spent.value+availableToSpend.value))*100)}%` }}>
            </div>
        </div>
        <div className='spent-available'>
            <div className='spent-container'>
                <ul className='spent-dot'>
                    <li className='spent-text'>
                        <span className='s-text'>Spent</span>
                    </li>
                </ul>
                <div>
                    <p className='s-text'>{spent.value} {spent.currency}</p>
                </div>
            </div>
            <div className='spent-container'>
                <ul className='spent-dot'>
                    <li className='avail-text'>
                        <span className='s-text'>Available to spend</span>
                    </li>
                </ul>
                <div>
                    <p className='s-text'>{availableToSpend.value} {availableToSpend.currency}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card