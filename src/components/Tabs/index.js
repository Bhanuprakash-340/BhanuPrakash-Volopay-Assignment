import './index.css'

const Tabs = props =>{
    const {tabDetails,setActiveTabId,isActive} = props
    const {id,tab} = tabDetails

    const onClickActiveTab = () =>{
        setActiveTabId(id)
        console.log(id)
    }

    const activeTabButton = isActive ? 'tab-items-buttons':'optional'

    return (
        <li key={id}>
             <button type="button" className={activeTabButton} onClick={onClickActiveTab}>{tab}</button>
        </li>

    )
}

export default Tabs