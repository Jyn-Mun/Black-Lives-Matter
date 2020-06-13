import React from "react";
import "./resources.css";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <div className="container" id="resourceContainer">
        <h1 className="resourceHead">Resources</h1>

        <Accordion defaultActiveKey="0" className="resourceAccordion">
          <Card>
            <Accordion.Toggle className="resourceTopic" as={Card.Header} eventKey="1">
              Mental Health Resources
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="resourceCardBody">
                <h1 className="resourceHead">US</h1>


                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://providers.therapyforblackgirls.com/">Therapy For Black Girls</a>
                    <p>So often the stigma surrounding mental health issues and therapy prevents Black women from taking the step of seeing a therapist. This space was developed to present mental health topics in a way that feels more accessible and relevant.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">2</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.beam.community/">BEAM</a>
                    <p>A collective of advocates, yoga teachers, artists, therapists, lawyers, religious leaders, teachers, psychologists and activists committed to the emotional/mental health and healing of Black communities.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">3</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://thelovelandfoundation.org/loveland-therapy-fund/">The Loveland Foundation</a>
                    <p>With the barriers affecting access to treatment by members of diverse ethnic and racial groups. Loveland Therapy Fund provides financial assistance to Black women and girls nationally seeking therapy.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">4</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.nqttcn.com/">National Queer And Trans Therapists Of Color Network</a>
                    <p>National Queer and Trans Therapists of Color Network (NQTTCN) is a healing justice organization committed to transforming mental health for queer and trans people of color (QTPoC).</p>
                  </div>
                </div>

                <br />
                <h1 className="resourceHead">UK</h1>

                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.maytree.org.uk/">Maytree</a>
                    <p>If you're having suicidal thoughts, Maytree offers telephone, email service and residential stays.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">2</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.blackthrive.org.uk/">Black Thrive</a>
                    <p>Mental health service for black people to heal.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">3</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.blackmindsmatteruk.com/services">Black Minds Matter</a>
                    <p>Provides quality mental health services for black people through therapy sessions, support groups and mentorships.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">4</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://switchboard.lgbt/">Switchboard</a>
                    <p>LGBT+ helpline</p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="resourceAccordion">
          <Card>
            <Accordion.Toggle className="resourceTopic" as={Card.Header} eventKey="1">
              Legal Help
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="resourceCardBody">

                <div className="resourceDiv1">
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://docs.google.com/spreadsheets/u/0/d/1w24baP-I-DcL6KOPuYkxuCeL_5hbkX6tryucgj6MaOw/htmlview">Legal Aid Google Sheets</a>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>



        <Accordion defaultActiveKey="0" className="resourceAccordion">
          <Card>
            <Accordion.Toggle className="resourceTopic" as={Card.Header} eventKey="1">
              Books
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="resourceCardBody">

                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.braveandkindbooks.com/products/the-racial-healing-book-singh-phd">The Racial Healing Book -  Anneliese A. Singh </a>
                    <p><a className="resourceLinks" href="https://twitter.com/anneliesesingh">@anneliesesingh</a> <a className="resourceLinks" href="https://www.instagram.com/braveandkindbooks/">@braveandkindbooks</a></p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">2</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://pyramidbooks.indielite.org/book/9781684034147">The Unapologetic Guide to Black Mental Health: Navigate an Unequal System, Learn Tools for Emotional Wellness, and Get the Help You Deserve - Rheeda Walker</a>
                    <p><a className="resourceLinks" href="https://www.instagram.com/dr.rheedawalker/">@dr.rheedawalker</a> <a className="resourceLinks" href="https://www.instagram.com/pyramidbooks/?hl=en">@pyramidbooks</a></p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">3</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.booksandcranniesva.com/book/9780743225380">Soothe Your Nerves: The Black Woman's Guide to Understanding and Overcoming Anxiety, Panic, and Fearz - Angela Neal-Barnett</a>
                    <p><a className="resourceLinks" href="https://www.instagram.com/booksncrannies_/?hl=en">@booksncrannies_</a></p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">4</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://experienceonekin.co/collections/the-sisters-uptown-bookstore/products/souls-of-my-brothers-black-men-break-their-silence-tell-their-truths-and-heal-their-spirits">Souls Of My Brothers: Black Men Break Their Silence, Tell Their Truths and Heal Their Spirits - Candace Sandy, Dawn Marie Daniels</a>
                    <p><a className="resourceLinks" href="https://www.instagram.com/sistersuptown/?hl=en">@sistersuptown</a></p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">5</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://bookshop.org/books/my-grandmother-s-hands-racialized-trauma-and-the-pathway-to-mending-our-hearts-and-bodies-9781942094470/9781942094470?aid=38">
                      My Grandmother's Hands: Racialized Trauma and the Pathway to Mending Our Hearts and Bodies - Resmaa Menakem</a>
                    <p><a className="resourceLinks" href="https://www.instagram.com/resmaamenakem/">@remaamenakem</a> <a className="resourceLinks" href="https://www.instagram.com/fultonstreet918/">@fultonstreet918</a></p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion defaultActiveKey="0" className="resourceAccordion">
          <Card>
            <Accordion.Toggle className="resourceTopic" as={Card.Header} eventKey="1">
              Helpful Instagram Accounts
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="resourceCardBody">

                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.instagram.com/blackgirlinom/?hl=en">@blackgirlinom </a>
                    <p>Supportive platform for women of color that offers meditation sessions, workshops, thought exercises and more</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">2</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.instagram.com/yasminecheyenne/?hl=en">@yasminecheyenne </a>
                    <p>Mental health advocate who strives to support Black women.</p>
                  </div>
                </div>


                <div className="resourceDiv1">
                  <a className="resourceNumber">3</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.instagram.com/transparentblackgirl/?hl=en">@transparentblackgirl </a>
                    <p>Transparent Black Girl aims to shatter unconventional stigmas surrounding what it means to be well for Black women.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">4</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.instagram.com/melaninandmentalhealth/?hl=en">@melaninandmentalhealth </a>
                    <p>Melanin And Mental Health connects clients to therapists who understand Black and Latinx experiences, as well as provide their followers with the steps and advice to take care of themselves.</p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion defaultActiveKey="0" className="resourceAccordion">
          <Card>
            <Accordion.Toggle className="resourceTopic" as={Card.Header} eventKey="1">
              For Activists
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="resourceCardBody">

                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.instagram.com/p/CA-6v-3DmSL/">Preventing Burnout</a>
                    <p>Helpful tips by <a className="resourceLinks" href="https://www.instagram.com/vahinishori/">@vahinishori</a> </p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">2</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.ucpress.edu/page/race-and-policing">Books On How To Take Action</a>
                    <p>University of California Press article with a list of books about the history of race and policing in America and how to take action.</p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion defaultActiveKey="0" className="resourceAccordion">
          <Card>
            <Accordion.Toggle className="resourceTopic" as={Card.Header} eventKey="1">
              For Business Owners
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="resourceCardBody">

                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.buyfromablackwomandirectory.org/join-the-directory">Buy From A Black Woman</a>
                    <p>The Buy from a Black Woman Directory is the only online resource where you can find business owned and operated by Black Women. There is a $30 annual directory submission fee. This fee helps cover website maintenance and any other admin fees.</p>
                  </div>
                </div>

                <div className="resourceDiv1">
                  <a className="resourceNumber">1</a>
                  <div className="resourceDiv2">
                    <a className="resourceHeader" href="https://www.blackbusinesslist.com/addyourbusiness.html">Black Business List</a>
                    <p>Directory of Black business owners and professionals. Add your business listing to this directory to get found by those who want to support your business efforts</p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


      </div>
      <div className="backDiv">
        <Link className="backButton" tag={Link} to="/">back</Link>
      </div>
    </>
  )
}

export default Resources