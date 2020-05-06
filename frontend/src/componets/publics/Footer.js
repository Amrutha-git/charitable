import React from "react";

export default function Footer() {
  return (
    <footer className="flex-rw">
  
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">About Pavilion</h4></li>
    <li><a href='' className="generic-anchor footer-list-anchor" itemProp="significantLink">GET TO KNOW US</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor" itemProp="significantLink">BECOME A RETAILER</a></li>

    <li><a href='' itemProp="significantLink" className="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>

    <li><a href='' className="generic-anchor footer-list-anchor" itemProp="significantLink">EVENTS</a></li>
  </ul>
  <ul className="footer-list-top">
    <li>
      <h4 className="footer-list-header">The Gift Selection</h4></li>


    <li><a href='' className="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor">HOME DECOR</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor">MUGS</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor">PET LOVER</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor" target="_blank">HANDBAGS & JEWELRY</a></li>
  </ul>
  <ul className="footer-list-top">
    <li id='help'>
      <h4 className="footer-list-header">Please Help Me</h4></li>
    <li><a href='' className="generic-anchor footer-list-anchor" itemProp="significantLink">CONTACT</a></li>
    <li><a href='' className="generic-anchor footer-list-anchor" itemProp="significantLink">FAQ</a></li>
    <li id='find-a-store'><a href='/shop/store-locator' className="generic-anchor footer-list-anchor" itemProp="significantLink">STORE LOCATOR</a></li>
    <li id='user-registration'><a href='/shop/user-registration?URL=' className="generic-anchor footer-list-anchor" itemProp="significantLink">NEW USERS</a></li>
    <li id='order-tracking'><a href='/shop/order-status' itemProp="significantLink" className="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
  </ul>
  <section className="footer-social-section flex-rw">
      <span className="footer-social-overlap footer-social-connect">
      CONNECT <span className="footer-social-small">with</span> US
      </span>
      <span className="footer-social-overlap footer-social-icons-wrapper">
      <a href="" className="generic-anchor" target="_blank" title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest"></i></a>
      <a href="" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook"></i></a>
      <a href="" className="generic-anchor" target="_blank" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter"></i></a>
      <a href="" className="generic-anchor" target="_blank" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram"></i></a>
      <a href="" className="generic-anchor" target="_blank" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube"></i></a>
      <a href="" className="generic-anchor" target="_blank" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus"></i></a>
      </span>
  </section>
  <section className="footer-bottom-section flex-rw">
<div className="footer-bottom-wrapper">   
<i className="fa fa-copyright" role="copyright">
 
</i> 2019 Pavilion in <address className="footer-address" role="company address">Bergen, NY</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
    </div>

  </section>
</footer>
  );
}
