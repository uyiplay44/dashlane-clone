import React from 'react';
import Banner from '../components/Banner/Banner';
import BannerComponent from '../components/BannerComponent/BannerComponent';
import Body from '../components/Body/Body';
import ContentStory from '../components/ContentStory/ContentStory';
import UiComponent from '../components/UI-Component/UiComponent';

function Home() {
  return (
    <div>
      <Body />
      <Banner />
      <ContentStory />
      <UiComponent />
      <BannerComponent />
    </div>
  )
}

export default Home
