import {Component} from 'react'
import Card from '../Card'
import ReactPopUp from '../ReactPopup';
// import CardsPopup from '../CardsPopup'
import { BiSearchAlt2} from "react-icons/bi";
import './index.css'

const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

class Cards extends Component{
    state={cardDataList:[],apiStatus:apiStatusConstants.initial,searchInput:''}

    componentDidMount(){
        this.getCardsDataList()
    }

    getCardsDataList =async () =>{
        const response = await fetch("https://00ee8c85-eba5-4d7a-b403-92059f9bccca.mock.pstmn.io/all_cards")
        if (response.ok === true){
            const result = await response.json()
            // console.log(result.data)
            this.setState({cardDataList:result.data})
        }
    }

    onChangeSearchInput = event =>{
        this.setState({searchInput:event.target.value})
        // console.log(event.target.value)
    }

    getSearchResult = () =>{
        const {cardDataList,searchInput} = this.state 
        const searchedItems = cardDataList.filter(each =>each.name.toLowerCase().includes(searchInput.toLowerCase()))
        return searchedItems
        // console.log(searchedItems)
    }

    getBlockedCards = () =>{
        const {cardDataList} = this.state 
        const blockedCards = cardDataList.filter(each =>each.status === "inactive")
        return blockedCards
    }



    
    render(){
         const {cardDataList} = this.state
        const {isActive} = this.props 
        const searchResult = this.getSearchResult()
        const blockedCardsData  =this.getBlockedCards()
   
        return(
            <div className='cards-container'>
                <div className='search-filter-container'>
                    <div className='search-bar-container'>
                        <input type="search" className='search-bar' onChange={this.onChangeSearchInput} placeholder="Search"/>
                        <button type="button" className='search-button'>
                        <BiSearchAlt2 className='search-icon'/>
                        </button>
                    </div>
                    <ReactPopUp cardsDataList={cardDataList}/>
                </div>
                <div className='need-cards-design'>
                {isActive === 2 && (<ul className='cards-list-container'> 
                    {searchResult.map((each,index) =>(
                        <li key={index+1} className="each-card">
                            <Card cardDetails={each}/>
                        </li>
                    ))}
                </ul>)}
                {isActive === 3 && (<ul className='cards-list-container'> 
                    {blockedCardsData.map((each,index) =>(
                        <li key={index+1} className="each-blocked-card">
                            <Card cardDetails={each}/>
                        </li>
                    ))}
                </ul>)}
                {isActive === 1 && (<div className='your-cards'>
                    No Vitual Cards
                    </div>)}
                </div>
            </div>
        )
    }

}

export default Cards