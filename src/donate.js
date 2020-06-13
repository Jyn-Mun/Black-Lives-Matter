import React from "react";
import "./donate.css";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

const Donate = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    })
  }

  return (
    <>
      <div className="container" id="donateContainer">
        <h1 className="donateHead">Donate</h1>
        <br />
        <h3 className="donateWarning">Please <a style={{ fontWeight: "bold" }}>DO NOT</a> donate to Shaun King. <a className="donateWarningLink" href="https://www.thedailybeast.com/shaun-king-keeps-raising-money-and-questions-about-where-it-goes-3">Here's why</a></h3>
        <h3 className="donateWarning">Please <a style={{ fontWeight: "bold" }}>DO NOT</a> donate to Change.org or <a className="donateWarningLink" href="https://www.change.org/p/president-cyril-ramaphosa-save-south-africa/u/25028858">through Change.org </a></h3>

        <br />
        <h1 className="donateHead">With Funds</h1>




        <Accordion defaultActiveKey="0" className="donateAccordion">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1" className="donateTopic">
              To Victims
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="donateCardBody">


                <a className="donateLinks" href="https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor?utm_source=customer&utm_campaign=p_cp+share-sheet&utm_medium=copy_link-tip">Justice for Breonna Taylor GoFundMe</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/georgefloyd">George Floyd Memorial Fund GoFundMe</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/george-floyd-bigfloyd">George Floyd's Sister's Fund GoFundMe</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/i-run-with-maud">I Run With Maud GoFundMe</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/justice-for-regis">Justice for Regis Korchinski Paquet GoFundMe</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/eumzn-justice-for-jamee">Justice for Jamee Johnson GoFundMe</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/rip-belly-mujinga">Belly Mujinga GoFundMe</a>
                <br />
                <h1 className="donateHead">For more</h1>
                <a className="donateLinks" href="https://blacklivesmatters.carrd.co/#victims">Carrd.co List of Funds For Victims</a>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>



        <Accordion defaultActiveKey="0" className="donateAccordion">
          <Card className="donateCard">
            <Accordion.Toggle as={Card.Header} eventKey="1" className="donateTopic">
              Charities/Funds
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="donateCardBody">

                <a className="donateLinks" href="https://blacklivesmatter.com/">Black Lives Matter</a>
                <a className="donateLinks" href="https://secure.everyaction.com/4omQDAR0oUiUagTu0EG-Ig2">Black Visions Collective</a>
                <a className="donateLinks" href="https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.35717155.2063942164.1590824273-1161863773.1590824273">NAACP Legal Defense And Educational Fund</a>
                <a className="donateLinks" href="https://www.paypal.com/donate/?token=La4GVgORoWeQYBWg-Ga23rNukP03rndzRqMYIh3o8TVjN8pcb1AHL7mM_sq2hqS9Sr0guG&country.x=US&locale.x=US">Campaign Zero</a>
                <a className="donateLinks" href="https://twitter.com/Isakdouah/status/1266858141913878528/photo/1">Isak Douah Gas Masks for Minneapolis Activists</a>
                <a className="donateLinks" href="https://secure.actblue.com/contribute/page/support-us">Color Of Change</a>
                <a className="donateLinks" href="https://thelovelandfoundation.org/">The Love Land Foundation</a>
                <a className="donateLinks" href="https://www.cuapb.org/">Communities United Against Police Brutality</a>
                <a className="donateLinks" href="https://www.knowyourrightscamp.com/">Know Your Rights Camp</a>
                <a className="donateLinks" href="https://www.welovelakestreet.com/">We Love Lake Street</a>
                <a className="donateLinks" href="https://unicornriot.ninja/">Unicorn Riot</a>
                <a className="donateLinks" href="https://www.innocenceproject.org/">The Innocence Project</a>
                <a className="donateLinks" href="https://www.aclu.org/">ACLU</a>
                <a className="donateLinks" href="https://secure.actblue.com/donate/freeblackmamas2020">National Bail Out</a>
                <a className="donateLinks" href="https://bailproject.org/">The Bail Project</a>
                <a className="donateLinks" href="https://www.minnesotahealingjusticenetwork.com/">Minnesota Healing Justice Network</a>
                <a className="donateLinks" href="https://www.spiralmn.com/">SPIRAL Collective</a>
                <a className="donateLinks" href="https://fairfight.com/">Fair Fight</a>
                <a className="donateLinks" href="https://www.grassrootslaw.org/">Grassroots Law Project</a>
                <a className="donateLinks" href="https://secure.everyaction.com/zae4prEeKESHBy0MKXTIcQ2">Reclaim The Block</a>
                <a className="donateLinks" href="https://support.eji.org/give/153413/#!/donation/checkout">Equal Justice Initiative</a>
                <a className="donateLinks" href="https://www.gofundme.com/f/ukblm-fund">UKBLM Fund</a>
                <br />

                <h1 className="donateHead">More resources on where to donate</h1>
                <a className="donateLinks" href="https://docs.google.com/document/d/1fb2cioBcCO47L_oGPsjdGVWDAc3RTHU2tIpDtekWKs0/edit">May/June MN Bail Fund and Support List (Updated Daily) Google Doc</a>
                <a className="donateLinks" href="https://nyulocal.com/where-to-donate-your-money-and-time-to-help-protesters-ef2727d7a9d2">NYU Local Medium Article (includes a list by state)</a>
                <a className="donateLinks" href="https://www.northstarhealthcollective.org/">North Star Health Collective have exceeded the funds necessary and have produced a list of where to redirect funding</a>
                <a className="donateLinks" href="https://www.allure.com/story/black-lives-matter-where-to-donate">Allure Article on Where to Donate</a>
                <a className="donateLinks" href="https://www.rollingstone.com/culture/culture-news/george-floyd-protests-bail-funds-police-brutality-black-lives-matter-1008259/">The Rolling Stones Where to Donate</a>
                <a className="donateLinks" href="https://docs.google.com/spreadsheets/u/0/d/1p7QxOvtvRfHUoMWib8coGHSS8szENXzSjIZKpvp-gtA/htmlview">Spreadsheet of where to donate</a>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />


        <h1 className="donateHead">Without Funds</h1>

        <div className="donateCardBody">
          <a className="donateLinks" href="https://tab.gladly.io/">Tab For A Cause - Every tab you open raises money due to ad revenue</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=bCgLa25fDHM&feature=youtu.be">Zoe Amira 100% AdSense Revenue to Black Lives Matter and Associated Protestor Bailfunds</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=OrdPeEjn0fU">sophdoeslife 100% AdSense Revenue to Black Visions Collective</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=0zXMcOE0YVI&t=769s">STEPHANIE TOMS AdSense Revenue to George Floyd Memorial Fund and Other Fundraisers</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=i0K-1IM3Hu0&t=91s">Stephanie Soo 100% of proceeds go to Black Lives Matter and Minnesota Freedom Fund</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=T8zIVpMtHG0&t=55s">touchdalight 100% AdSense revenue go to Black Lives Matter</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=XeCbYPYMz9o">Anastasia Kingsnorth 100% Ad Revenue go to George Floyd Fund and several Racial Equality Charities</a>
          <a className="donateLinks" href="https://www.youtube.com/watch?v=XLdbxHbbXlw&t=76s">Love By Laur AdSense Revenue will be matched and donated to George Floyd Memorial Fund and the National Bail Out</a>
        </div>



      </div>
      <div className="backDiv">
        <Link onClick={scrollToTop} className="backButton" tag={Link} to="/">back</Link>
      </div>
    </>
  )
}

export default Donate;