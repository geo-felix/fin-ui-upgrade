import { SideBarContext } from '@/context/SideBarContext';
import React, { useContext } from 'react'
import SideNavRow from '@/components/SideNavContainer/SideNavRow'
import { ChevronLeft } from '@mui/icons-material';
const SubSideBar = () => {

  const {subContainerEntries, setSubContainer, setSubContainerEntries} = useContext(SideBarContext);
  
  
  return (
      <div >
            <div className="bg-gray-200 hover:bg-gray-400 p-2 flex" onClick={() => setSubContainer(false)}>
  <ChevronLeft />
  <span className="text-center flex-grow">MAIN MENU</span>
</div>

            
            {subContainerEntries.map(subEntry => (
                
            <>
      
              {/* <div className='p-4'>{!subEntry.submenu && subEntry.label}</div> */}
                             
                  <SideNavRow key={subEntry.id} text={subEntry.label} entries={subEntry.submenu}/>
             
              </> 
          
                
            ))}
        </div>
  )
}

export default SubSideBar
