import { useState } from 'react'
import Cloud from '../../components/cloud/Cloud'
import Hero from '../../components/hero/Hero'
import Lemon from '../../components/lemon/Lemon'
import UpTime from '../../components/upTime/UpTime'
import Header from '../../components/header/Header';
import HeaderSidebar from '../headerSidebar/HeaderSidebar';
import { Overlay } from '../../utils'
import { Route } from 'react-router-dom'
import Toggle from '../../components/toggle/Toggle'
import Basic from '../../components/basic/Basic'
import ChoosePlen from '../../components/choosePlan/ChoosePlen'
import RealStories from '../../components/realStories/RealStories'
import Serve from '../../components/serve/Serve'
import Website from '../../components/website/Website'
import Footer from '../../components/footer/Footer'

const Home = () => {
  const [isHeaderSidebarActive, setIsHeaderSidebarActive] = useState(false);
  const [isHeaderSidebarEnter, setIsHeaderSidebarEnter] = useState(false)
  return (
    <div>
        <Header setIsHeaderSidebarActive={setIsHeaderSidebarActive} setIsHeaderSidebarEnter={setIsHeaderSidebarEnter}/>
        <Route>
           <HeaderSidebar isHeaderSidebarActive={isHeaderSidebarActive} setIsHeaderSidebarActive={setIsHeaderSidebarActive} isHeaderSidebarEnter={isHeaderSidebarEnter} setIsHeaderSidebarEnter={setIsHeaderSidebarEnter}/>
        </Route>
        <Hero />
        <Cloud />
        <UpTime />
        <Lemon />
        <Toggle />
        <Basic />
        <ChoosePlen />
        <RealStories />
        <Serve />
        <Website />
        <Footer />
        {
          isHeaderSidebarActive && <Overlay type="headerSidebar" state={isHeaderSidebarActive} callback={setIsHeaderSidebarActive}/>
        }
    </div>
  )
}

export default Home