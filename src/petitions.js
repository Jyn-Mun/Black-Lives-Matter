import React from "react";
import { Accordion, Card } from "react-bootstrap";
import "./petitions.css";
import { Link } from "react-router-dom";

const Petitions = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    })
  }

  return (
    <>
      <div className="container" id="petitionsContainer">
        <h1 className="petitionsHead">Petitions</h1>
        <br />
        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Police Reform and Regulation
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/us-senate-hands-up-act">change.org Hands Up Act</a>
                <a className="petitionsLinks" href="https://secure.everyaction.com/eR7GA7oz70GL8doBq19LrA2">Reclaim The Block Defund the Police</a>
                <a className="petitionsLinks" href="https://www.change.org/p/united-nations-ban-the-use-of-inhumane-rubber-bullets">
                  change.org Ban The Use Of Rubber Bullets
                </a>
                <a className="petitionsLinks" href="https://blacklivesmatter.com/defundthepolice/">BLM #DefundThePolice</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Shukri Abdi
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/manchester-police-justice-for-shukri-abdi">change.org Justice For Shukri Abdi</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For George Floyd
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd">change.org</a>
                <a className="petitionsLinks" href="https://t.co/ENgYhM2oEC">change.org 2</a>
                <a className="petitionsLinks" href="https://www.change.org/p/federal-bureau-of-investigation-justice-for-george-floyd">change.org 3</a>
                <a className="petitionsLinks" href="https://www.change.org/p/minneapolis-district-attorney-raise-the-degree">change.org Raise The Degree</a>
                <a className="petitionsLinks" href="https://www.thepetitionsite.com/248/031/510/justice-for-george-floyd-another-black-man-needlessly-murdered-by-police/?taf_id=65858665&cid=fb_na">thepetitionsite</a>
                <a className="petitionsLinks" href="https://www.amnesty.org/en/get-involved/take-action/george-floyd-police-violence-usa/">amnesty.org</a>
                <a className="petitionsLinks" href="https://act.colorofchange.org/sign/justiceforfloyd_george_floyd_minneapolis/?source=dm_sms_optin_5-26-20">colorofchange.org</a>
                <a className="petitionsLinks" href="https://petitions.whitehouse.gov/petition/justice-george-floyd-0">whitehouse.gov Prosecute the Officers</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Breonna Taylor
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://sign.moveon.org/petitions/justiceforbre-police-officers-who-killed-breonna-taylor-must-be-fired?bucket=&source=twitter-share-button&utm_campaign=&utm_source=twitter&share=e57b02c1-bd0f-497f-8365-f51d6114576f">moveon.org</a>
                <a className="petitionsLinks" href="https://act.colorofchange.org/sign/justiceforbre-breonna-taylor-officers-fired?source=coc_main_website">colorofchange.org</a>
                <a className="petitionsLinks" href="https://action.justiceforbreonna.org/sign/BreonnaWasEssential/">justiceforbreonna.org</a>
                <a className="petitionsLinks" href="https://www.change.org/p/andy-beshear-justice-for-breonna-taylor">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Ahmaud Arbery
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill">change.org</a>
                <a className="petitionsLinks" href="https://www.change.org/p/human-rights-campaign-justice-for-ahmuad-aubrey-2">change.org 2</a>
                <a className="petitionsLinks" href="https://www.change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud">change.org 3</a>
                <a className="petitionsLinks" href="https://www.change.org/p/shaun-king-justice-for-amaud-arbery">change.org 4</a>
                <a className="petitionsLinks" href="https://www.change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill">change.org Disbarment of George E. Barnhill</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Tamir Rice
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/justice-for-tamir-rice-appoint-a-special-prosecutor">change.org</a>
                <a className="petitionsLinks" href="https://www.change.org/p/department-of-justice-investigate-the-killing-of-tamir-rice">change.org 2</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Sean Reed
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/mayor-joe-hogsett-justice-for-sean-reed">change.org</a>
                <a className="petitionsLinks" href="https://www.change.org/p/joe-hogsett-justice-4-sean-reed-conviction-of-indianapolis-police-officers">change.org Conviction of Indianapolis Police Officers</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Julius Jones
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma">change.org Don't Let Him Be Executed</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Regis Korchinski-Paquet
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/justice-for-regis-korchinski-paquet">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Kendrick Johnson
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/united-states-supreme-court-justice-for-kendrick-johnson">change.org Reopen Kendrick Johnson's case</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Alejandro Vargas Martinez
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/florida-police-department-justice-for-alejandro-vargas-martinez">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Tony McDade
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/justice-for-tony-mcdade">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Kyjuanzi Harris
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/illinois-governor-correcting-a-wrongful-conviction-kyjuanzi-harris">change.org Correcting A Wrongful Conviction</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Belly Mujinga
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/govia-thameslink-justice-for-belly-mujinga-justiceforbellymujinga?utm_content=cl_sharecopy_22128388_en-GB%3Av1&recruited_by_id=2b2b0700-a1c9-11ea-b32e-29e86ebe33c3&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Darrius Stewart
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/donald-j-trump-justice-for-darrius-stewart">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For David McAtee
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/louisville-mayor-greg-fischer-justice-for-david-mcatee">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="petitionsAccordion">
          <Card>
            <Accordion.Toggle className="petitionsTopic" as={Card.Header} eventKey="1">
              Justice For Joāo Pedro
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="petitionsCardBody">
                <a className="petitionsLinks" href="https://www.change.org/p/prefeitura-do-rio-de-janeiro-justice-for-jo%C4%81o-pedro">change.org</a>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


      </div>
      <div className="backDiv">
        <Link onClick={scrollToTop} className="backButton" tag={Link} to="/">back</Link>
      </div>
    </>
  )
}

export default Petitions;