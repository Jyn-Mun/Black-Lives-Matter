import React from "react";
import "./educate.css";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Educate = () => {
  return (
    <>
      <div className="container" id="educateContainer">
        <h1 className="educateHead">Educate Yourself</h1>
        <br />


        <Accordion defaultActiveKey="0" className="educateAccordion">
          <Card>
            <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
              Articles
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="educateCardBody">

                <Accordion defaultActiveKey="0" className="educateAccordion">
                  <Card>
                    <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
                      Reparations
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="educateCardBody">

                        <div className="educateDiv1">
                          <a className="educateNumber">1</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.theatlantic.com/magazine/archive/2014/06/the-case-for-reparations/361631/">The Case For Reparations</a>
                            <a>- The Atlantic</a>
                          </div>
                        </div>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                <Accordion defaultActiveKey="0" className="educateAccordion">
                  <Card>
                    <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
                      Defund The Police
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="educateCardBody">

                        <div className="educateDiv1">
                          <a className="educateNumber">1</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.rollingstone.com/politics/politics-news/defund-the-police-1007254/">A Practical Guide to Defunding the Police</a>
                            <a>- Rolling Stone</a>
                          </div>
                        </div>

                        <div className="educateDiv1">
                          <a className="educateNumber">2</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.nytimes.com/2020/05/30/opinion/george-floyd-police-funding.html?campaign_id=39&emc=edit_ty_20200604&instance_id=19084&nl=opinion-today&regi_id=92198239&segment_id=30083&te=1&user_id=0ad68bbe87750c1cbb25dda08a9ebcb7">No More Money for the Police</a>
                            <a>- The New York Times Opinion</a>
                          </div>
                        </div>

                        <div className="educateDiv1">
                          <a className="educateNumber">3</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://newrepublic.com/article/157984/defunding-police-good-climate-policy?utm_source=newsletter&utm_medium=email&utm_campaign=tnr_daily">Defunding the Police Is Good Climate Policy</a>
                            <a>- The New Republic</a>
                          </div>
                        </div>

                        <div className="educateDiv1">
                          <a className="educateNumber">4</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://newrepublic.com/article/158038/defunding-police-nationalize-benefits?utm_source=newsletter&utm_medium=email&utm_campaign=tnr_daily">After Defunding the Police, Nationalize Their Benefits</a>
                            <a>- The New Republic</a>
                          </div>
                        </div>

                        <div className="educateDiv1">
                          <a className="educateNumber">5</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.youtube.com/watch?v=ymznwY2kbEU&feature=youtu.be">Against Defunding The Police</a>
                            <a>- Donut Operator on Youtube</a>
                          </div>
                        </div>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                <Accordion defaultActiveKey="0" className="educateAccordion">
                  <Card>
                    <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
                      Qualified Immunity
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="educateCardBody">

                        <div className="educateDiv1">
                          <a className="educateNumber">1</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://theappeal.org/qualified-immunity-explained/">Qualified Immunity Explained</a>
                            <a>- The Appeal</a>
                          </div>
                        </div>


                        <div className="educateDiv1">
                          <a className="educateNumber">2</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://twitter.com/justinamash/status/1267873351869116419">End Qualified Immunity</a>
                            <a>- Justin Amash Twitter</a>
                          </div>
                        </div>


                        <div className="educateDiv1">
                          <a className="educateNumber">3</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.nytimes.com/2020/06/02/opinion/breonna-taylor-police.html">The One Police Reform That Both the Left and the Right Support</a>
                            <a>- Debatable New York Times Opinion Piece</a>
                          </div>
                        </div>

                        <div className="educateDiv1">
                          <a className="educateNumber">4</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.instagram.com/p/CBELEmhhLzV/">Why Do Police Keep Getting Away With Abuse? A Look Into Qualified Immunity</a>
                            <a> - <a className="educateLinks" href="https://www.instagram.com/theslacktivists/">@theslacktivists</a></a>
                          </div>
                        </div>



                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                <Accordion defaultActiveKey="0" className="educateAccordion">
                  <Card>
                    <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
                      Racism
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="educateCardBody">

                        <div className="educateDiv1">
                          <a className="educateNumber">1</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://docs.google.com/document/d/e/2PACX-1vRNl2lkkiZJ8NACH48lvUdD9Rqgk00ZzjXy2mump02IE5yJw6QFQoQaDXYPCwWKVlu9HQRE5deel-B9/pub">Institutionalised Racism 101</a>
                            <a>- Google Doc</a>
                          </div>
                        </div>


                        <div className="educateDiv1">
                          <a className="educateNumber">2</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.americanprogress.org/issues/race/reports/2019/08/07/472617/systemic-inequality-displacement-exclusion-segregation/">Systemic Inequality: Displacement, Exclusion, and Segregation</a>
                            <a>- American Progress</a>
                          </div>
                        </div>

                        <div className="educateDiv1">
                          <a className="educateNumber">3</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://www.instagram.com/tv/CA9G5njBcmB/?igshid=bgmfnjobd62i">Systemic Racism Explained</a>
                            <a>- Instagram account <a className="educateLinks" href="https://www.instagram.com/juveeproductions/">@juveeproductions</a></a>
                          </div>
                        </div>


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                <Accordion defaultActiveKey="0" className="educateAccordion">
                  <Card>
                    <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
                      Looting
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="educateCardBody">

                        <div className="educateDiv1">
                          <a className="educateNumber">1</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://thenewinquiry.com/in-defense-of-looting/">In Defense of Looting</a>
                            <a>- The New Inquiry</a>
                          </div>
                        </div>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

                <Accordion defaultActiveKey="0" className="educateAccordion">
                  <Card>
                    <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
                      Police
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="educateCardBody">

                        <div className="educateDiv1">
                          <a className="educateNumber">1</a>
                          <div className="educateDiv2">
                            <a className="educateHeader" href="https://slate.com/news-and-politics/2020/06/police-reform-america-george-floyd.html?campaign_id=129&emc=edit_jbo_20200605&instance_id=19123&nl=jamelle-bouie&regi_id=92198239&segment_id=30187&te=1&user_id=0ad68bbe87750c1cbb25dda08a9ebcb7">How to Change Policing in America</a>
                            <a>- Slate</a>
                          </div>
                        </div>

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="educateAccordion">
          <Card>
            <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
              Anti-Racist Books
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="educateCardBody">

                <div className="educateDiv1">
                  <a className="educateNumber">1</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.afriwarebooks.com/store/p576/The_Hate_You_Give.html">The Hate U Give - Angie Thomas </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/angiethomas/?hl=en">@angiethomas</a> <a className="educateLinks" href="https://www.instagram.com/afriwarebooks/">@afriwarebooks</a></p>
                  </div>
                </div>


                <div className="educateDiv1">
                  <a className="educateNumber">2</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.blackstonebookstore.com/book/9781580058827">So You Want To Talk About Race - Ijeoma Oluo </a>
                    <p><a className="educateLinks" href="https://www.gofundme.com/f/for-artists?member=3847452&utm_medium=email&utm_source=product&utm_campaign=p_email+inviteacceptedemailtoteammember">Support Ijeoma Oluo's GoFundMe</a> <a className="educateLinks" href="https://www.instagram.com/ijeomaoluo/?hl=en">@ijeomaoluo</a> <a className="educateLinks" href="https://www.instagram.com/blackstonebookstore/">@blackstonebookstore</a></p>
                  </div>
                </div>


                <div className="educateDiv1">
                  <a className="educateNumber">3</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://brainlairbooks.handseller.com/home/bookdetailsin/1635572959">Why I'm No Longer Talking To White People About Race - Reni Eddo-Lodge </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/renieddolodge/?hl=en">@renieddolodge</a> <a className="educateLinks" href="https://www.instagram.com/brainlairbooks/?hl=en">@brainlairbooks</a></p>
                  </div>
                </div>


                <div className="educateDiv1">
                  <a className="educateNumber">4</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://bookshop.org/books/freedom-is-a-constant-struggle-ferguson-palestine-and-the-foundations-of-a-movement/9781608465644">Freedom Is A Constant Struggle - Angela Y. Davis </a>
                    <p><a className="educateLinks" href="https://www.gofundme.com/f/reading-is-a-revolutionary-act?utm_medium=copy_link&utm_source=customer&utm_campaign=p_lico+share-sheet">support Semicolon Bookstore's GoFundMe here</a> <a className="educateLinks" href="https://www.instagram.com/semicolonchi/?hl=en">@semicolonchi</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">5</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.mahoganybooks.com/9781620974834">Chokehold: Policing Black Men - Paul Butler </a>
                    <p><a className="educateLinks" href="https://twitter.com/lawprofbutler?lang=en">@LawProfButler</a> <a className="educateLinks" href="https://www.instagram.com/mahoganybooks/?hl=en">@mahoganybooks</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">6</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://unclebobbies.indielite.org/book/9780374536770">Ghetto: The Invention of a Place, the History of an Idea - Mitchell Duneier </a>
                    <p><a className="educateLinks" href="https://www.gofundme.com/f/westillhere">Uncle Bobbie's #WeStillHere GoFundMe</a> <a className="educateLinks" href="https://www.instagram.com/unclebobbies/?hl=en">@unclebobbies</a></p>
                  </div>
                </div>


                <div className="educateDiv1">
                  <a className="educateNumber">7</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.paypal.com/webapps/shoppingcart?mfid=1591259284370_67381bb675c42&flowlogging_id=67381bb675c42#/checkout/shoppingCart">Blue Rage, Black Redemption - Stanley Tookie Williams </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/detroit_book_city/?hl=en">@detroit_book_city</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">8</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://hakimsbookstore.com/shop/african-american-studies/policing-the-black-man-arrest-prosecution-and-imprisonment/">Policing The Black Man: Arrest, Prosecution, And Imprisonment - Angela J. Davis, Bryan Stevenson, Marc Mauer, Bruce Western And Jeremy Travis </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/hakimsbookstore/">@hakimsbookstore</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">9</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://bookshop.org/books/how-to-be-an-antiracist/9780525509288?aid=1473">How To Be An Antiracist - Ibram X Kendi </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/ibramxk/?hl=en">@ibramxk</a> <a className="educateLinks" href="https://www.instagram.com/thelitbar/">@thelitbar</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">10</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://bookshop.org/books/contagious-communities-medicine-migration-and-the-nhs-in-post-war-britain/9780198725282">
                      Contagious Communities: Medicine, Migration, and the NHS in Post-War Britain - Roberta Bivins </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/fultonstreet918/">@fultonstreet918</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">11</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.loyaltybookstores.com/book/9781632860781">
                      The Health Gap: The Challenge of an Unequal World - Michael Marmot </a>
                    <p><a className="educateLinks" href="https://twitter.com/michaelmarmot?lang=en">@MichaelMarmot</a> <a className="educateLinks" href="https://www.instagram.com/loyaltybooks/?hl=en">@loyaltybooks</a></p>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">12</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://turningpagebookshop.com/shop/ols/products/the-new-jim-crow">The New Jim Crow - Michelle Alexander</a>
                    <p><a className="educateLinks" href="https://www.instagram.com/turningpagebookshop/?hl=en">@turningpagebookshop</a></p>
                  </div>
                </div>

                <br />

                <a className="educateNumber">Kids</a>


                <div className="educateDiv1">
                  <a className="educateNumber">1</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://ashaybythebay.com/products/malcolm-little-the-boy-who-grew-up-to-become-malcolm-x?_pos=1&_sid=64bcb4ff3&_ss=r">Malcolm Little:The Boy Who Grew Up to Become Malcolm X - Ilyasah Shabazz </a>
                    <p><a className="educateLinks" href="https://www.instagram.com/ashaybythebay/">@ashaybythebay</a> <a className="educateLinks" href="https://www.instagram.com/ilyasahshabazz/?hl=en">@ilyasahshabazz</a></p>
                  </div>
                </div>

                {/* <div className="educateDiv1">
                <a className="educateNumber">9</a>
                <div className="educateDiv2">
                  <a className="educateHeader" href="">Policing The Black Man: Arrest, Prosecution, And Imprisonment - Angela J. Davis, Bryan Stevenson, Marc Mauer, Bruce Western And Jeremy Travis </a>
                  <p><a className="educateLinks" href="https://www.instagram.com/harrietts_bookshop/?hl=en">@harriets_bookshop</a></p>
                </div>
              </div> */}



              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="educateAccordion">
          <Card>
            <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
              Instagram Accounts
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="educateCardBody">

                <h1 className="educateHead">Black Voices And Activists</h1>

                <div className="educateDiv1">
                  <a className="educateNumber">1</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/renieddolodge/?hl=en?hl=en">@renieddolodge</a>
                    <a>British journalist and author whose writing focuses on feminism and exposing structural racism.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">2</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/ajabarber/?hl=en">@ajabarber</a>
                    <a>Writer and sustainability expert who focuses on issues such as racism and takes on big labels that do not support people of color.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">3</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/ellessechar/?hl=en">@ellessechar</a>
                    <a>Founder of <a className="educateLinks" href="https://www.instagram.com/girlswillbeboys_/">@girlswillbeboys</a> who speaks out on issues regarding race and gender.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">4</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/laylafsaad/?hl=en">@laylafsaad</a>
                    <a>Writer, speaker and podcast host on the topics of race, identity, leadership, personal transformation and social change.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">5</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/mireillecharper/?hl=en">@mireillecharper</a>
                    <a>Writer, sensitivity reader and publicist whos uses her platform to educate and raise awareness on police brutality and allyship to the black community.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">6</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/blairimani/">@blairimani</a>
                    <a>Outspoken advocate and activist, and dynamic public speaker,living at the intersection of Black, Queer, and Muslim identity.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">7</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/moemotivate/?utm_source=ig_embed">@moemotivate</a>
                    <a>Host of <a className="educateLinks" href="https://www.instagram.com/shinebrightertogether/"> @shinebrightertogether </a>podcast, author, speaker and anti-racism educator</a>
                  </div>
                </div>

                <br />
                <h1 className="educateHead">Educational Accounts</h1>

                <div className="educateDiv1">
                  <a className="educateNumber">1</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/theconsciouskid/">@theconsciouskid</a>
                    <a>Parenting and Education through a Critical Race Lens.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">2</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/ckyourprivilege/?hl=en">@ckyourprivilege</a>
                    <a>Founded by <a className="educateLinks" href="https://www.instagram.com/myishathill/">@myishathill</a>, Check Your Privilege aims to deepen awareness on how actions affect the BIPOC community.</a>
                  </div>
                </div>


                <div className="educateDiv1">
                  <a className="educateNumber">3</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.instagram.com/blklivesmatter/?hl=en">@blklivesmatter</a>
                    <a>Stay informed and aware with the official Black Lives Matter, an anti-racism movement, page</a>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="educateAccordion">
          <Card>
            <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
              Watch
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="educateCardBody">


                <div className="educateDiv1">
                  <a className="educateNumber">1</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.netflix.com/my/title/80091741">13th</a>
                    <a>In this thought-provoking documentary, scholars, activists and politicians analyze the criminalization of African Americans and the U.S. prison boom.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">2</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.netflix.com/my/title/80200549">When They See Us</a>
                    <a>Five African American teenagers from Harlem become trapped in a nightmare when they're falsely accused of a brutal attack in Central Park. Based on the true story.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">3</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.netflix.com/my/title/80095698">Dear White People</a>
                    <a>Students of color navigate the daily slights and slippery politics of life at an Ivy League college that's not nearly as "post-racial" as it thinks.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">4</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.hulu.com/movie/if-beale-street-could-talk-a862614d-c49e-4208-b934-1476963896fe">If Beale Street Could Talk</a>
                    <a>Based on the novel by James Baldwin, "If Beale Street Could Talk" is a soulful drama about a young couple fighting for justice in the name of love and the promise of the American dream.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">5</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.amazon.com/Just-Mercy-Michael-B-Jordan/dp/B082YJ8THX">Just Mercy</a>
                    <a>A powerful true story that followsa young lawyer as he defends a man sentenced to death despite evidence proving his innocence.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">6</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.amazon.com/Just-Mercy-Michael-B-Jordan/dp/B082YJ8THX">Just Mercy</a>
                    <a>A powerful true story that followsa young lawyer as he defends a man sentenced to death despite evidence proving his innocence.</a>
                  </div>
                </div>

                <br />

                <h1 className="educateHead">For More</h1>
                <a className="educateLinks" href="https://www.instagram.com/p/CBG3Qngg_07/">Essential Viewing: Documentaries About Race Issues In The UK by @uomfeministcollective</a>



              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>




        <Accordion defaultActiveKey="0" className="educateAccordion">
          <Card>
            <Accordion.Toggle className="educateTopic" as={Card.Header} eventKey="1">
              Podcasts
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="educateCardBody">


                <div className="educateDiv1">
                  <a className="educateNumber">1</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.nytimes.com/2020/01/23/podcasts/1619-podcast.html">1619</a>
                    <a>A New York Times audio series, hosted by Nikole Hannah-Jones, that examines the long shadow of American slavery.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">2</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://crooked.com/podcast-series/pod-save-the-people/">Pod Save The People</a>
                    <a>The podcast explores news, culture, social justice, and politics.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">3</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.thediversitygap.com/podcast-1">The Diversity Gap</a>
                    <a>Bethaney Wilkinson explores the gap between good intentions and good impact as it relates to diversity, inclusion and equity. Their goal is to discover promising practices for closing diversity gaps in everyday lives and work.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">4</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.aboutracepodcast.com/">About Race</a>
                    <a>Featuring key voices from the last few decades of anti-racist activism, About Race with Reni Eddo-Lodge looks at the recent history that lead to the politics of today.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">5</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.raceforward.org/media/podcast/momentum-race-forward-podcast">Momentum: A Race Forward Podcast</a>
                    <a>Momentum: A Race Forward Podcast features movement voices, stories, and strategies for racial justice.</a>
                  </div>
                </div>

                <div className="educateDiv1">
                  <a className="educateNumber">6</a>
                  <div className="educateDiv2">
                    <a className="educateHeader" href="https://www.pushblack.us/black-history-year-podcast">Black History Year</a>
                    <a>Black History Year connects you to the history, thinkers, and activists that are left out of the mainstream conversations with the goal of uniting for the best interest of Black people worldwide.</a>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>



      </div>
      <div className="backDiv">
        <Link className="backButton" tag={Link} to="/">back</Link>
      </div>    </>
  )
}

export default Educate;