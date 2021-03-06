/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Bot from '../components/Bot';
//SocialLinks
const TwitterURL = 'https://twitter.com/MillionandUp';
const LinkedInURL = 'https://www.linkedin.com/company/weelocol/';
const InstagramURL = 'https://www.instagram.com/weelo_col/';
const TiktokURL = 'https://www.tiktok.com/';
const YoutubeURL = 'https://www.youtube.com/channel/UCmnVS7FdjhQM8Xqg3WRFO3A';
const FacebookURL = 'https://www.facebook.com/weelo.col';
//Store links
const GooglePlayURL = 'https://play.google.com/store';
const AppStoreURL = 'https://www.apple.com/co/app-store/';
//Menu Links
const GetTheAppURL = 'https://play.google.com/store';
const TenantScreeningPath = '/services/tenant-screening';
const CollectRentOnline = '/services/collect-rent-online';
const PayRentOnline = '/services/pay-rent-online';
const OurServicesPath = '/services';
const AboutPath = '/about';
const TermOfUsePath = '/term-of-use';
const PrivacyPolicyPath = '/privacy-policy';
//Link Bot
const WhatsappURL = 'https://wa.link/mk55bm';

function Layout(props) {
  return (
    <>
      <Bot
        WhatsappURL={WhatsappURL}
      />

      <Header
        TwitterURL={TwitterURL}
        LinkedInURL={LinkedInURL}
        InstagramURL={InstagramURL}
        TiktokURL={TiktokURL}
        YoutubeURL={YoutubeURL}
        FacebookURL={FacebookURL}
        GetTheAppURL={GetTheAppURL}
        TenantScreeningPath={TenantScreeningPath}
        CollectRentOnline={CollectRentOnline}
        PayRentOnline={PayRentOnline}
        AboutPath={AboutPath}
      />
      {props.children}

      <Footer
        TwitterURL={TwitterURL}
        LinkedInURL={LinkedInURL}
        InstagramURL={InstagramURL}
        TiktokURL={TiktokURL}
        YoutubeURL={YoutubeURL}
        FacebookURL={FacebookURL}
        GoogleURL={GooglePlayURL}
        AppleURL={AppStoreURL}
        AboutPath={AboutPath}
        OurServicesPath={OurServicesPath}
        TermOfUsePath={TermOfUsePath}
        PrivacyPolicyPath={PrivacyPolicyPath}
      />
    </>
  );
}
export default Layout;
