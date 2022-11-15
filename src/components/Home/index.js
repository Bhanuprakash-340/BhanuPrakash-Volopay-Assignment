import {Component} from 'react'
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
import Header from '../Header'
import Tabs from '../Tabs'
import Cards from '../Cards'
import './index.css'

// const apiStatusConstants = {
//     initial: 'INITIAL',
//     success: 'SUCCESS',
//     failure: 'FAILURE',
//     inProgress: 'IN_PROGRESS',
//   }

const tabsList = [
    {
        id:1,
        tab:'Your'
    },
    {
        id:2,
        tab:'All'
    },
    {
        id:3,
        tab:'Blocked'
    }
]


class Home extends Component{
    state={activeTabId:tabsList[1].id,tabsListData:tabsList}

    setActiveTabId = id => {
        this.setState({activeTabId: id})
      }
    

    render(){
         const {activeTabId,tabsListData} = this.state
        return(
                <div className='home-container'>
                    <Header/>
                    <div className='tabs-container'>
                        <ul className='tab-items-container'>
                            {tabsListData.map(eachTab =>(
                                <Tabs key={eachTab.id}
                                 tabDetails={eachTab} 
                                isActive={activeTabId===eachTab.id}  
                                setActiveTabId={this.setActiveTabId}/>
                            ))}
                        </ul>
                        <div className='cards-view-butons-container'>
                            <button type="button" className='page-view-button'>
                                <TfiLayoutGrid2Alt/>
                            </button>
                            <button type="button" className='page-view-button'>
                                <GiHamburgerMenu/>
                            </button>
                        </div>
                    </div>
                    <hr className='hr-line'/>
                    <Cards isActive={activeTabId}/>
                </div>
        )
    }
}

export default Home