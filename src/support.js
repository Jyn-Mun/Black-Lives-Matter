import React from "react";
import "./support.css";
import { Link } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

const Support = () => {
  return (
    <>
      <div className="container" id="supportContainer">
        <h1 className="supportHead">Support Black-Owned Businesses</h1>
        <br></br>

        <h1 className="supportHead">US</h1>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Beauty/Self Care
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://kncbeauty.com/">KNC Beauty</a>
                    <p>Beauty brand specializing in lip masks founded by <a className="supportLinks" href="https://www.instagram.com/kristennoelcrawley/?hl=en">@kristennoelcrawley</a> <a className="supportLinks" href="https://www.instagram.com/kncbeauty/?utm_source=ig_embed">@kncbeauty</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://thehoneypot.co/">The Honey Pot Company</a>
                    <p>Complete plant-based feminine care system for menstrual care products founded by Beatrice Feliu-Espada
                    <a className="supportLinks" href="https://www.instagram.com/thehoneypotco/?utm_source=ig_embed"> @thehoneypotco</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.bekurabeauty.com/">Bekura Beauty</a>
                    <p>Skincare and Haircare brand that uses fresh, natural ingredients founded by Rashida Jefferson
                    <a className="supportLinks" href="https://www.instagram.com/bekurabeauty/?hl=en"> @bekurabeauty</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://amarisiennabeauty.com/">Amari Sienna Beauty</a>
                    <p>Skincare and cosmetic line owned by
                    <a className="supportLinks" href="https://www.instagram.com/chelsxxvc/"> @chelsxxvc</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.thelipbar.com/">The Lip Bar</a>
                    <p>Vegan and cruelty-free beauty brand founded by Melissa Butler <a className="supportLinks" href="https://www.instagram.com/melissarbutler/?hl=en">@melissarbutler</a>
                      <a className="supportLinks" href="https://www.instagram.com/thelipbar/?hl=en"> @thelipbar</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">6</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://patternbeauty.com/">Pattern Beauty</a>
                    <p>Beauty brand for textured hair founded by  <a className="supportLinks" href="https://www.instagram.com/traceeellisross/?hl=en">@traceeellisross</a> <a className="supportLinks" href="https://www.instagram.com/patternbeauty/">@patternbeauty</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">7</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.4theloveofbubbles.com/">4 The Love Of Bubbles</a>
                    <p>Bath and body brand founded by Ayieta Crawford <a className="supportLinks" href="https://www.instagram.com/4theloveofbubbles/?hl=en">@4theloveofbubbles</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">8</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.4theloveofbubbles.com/">Hanahana Beauty</a>
                    <p>Skincare and wellness brand that practices sustainability and transparency founded by Abena Boamah-Acheampong <a className="supportLinks" href="https://www.instagram.com/beanieboamah/?hl=en">@beanieboamah</a> <a className="supportLinks" href="https://www.instagram.com/hanahana_beauty/?hl=en">@hanahana_beauty</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Accessories
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://brothervellies.com/">Brother Vellies</a>
                    <p>Handmade artisanal luxury accessories founded and designed by <a className="supportLinks" href="https://www.instagram.com/aurorajames/">@aurorajames</a> <a className="supportLinks" href="https://www.instagram.com/brothervellies/">@brothervellies</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.whitespacejewelry.com/">White Space</a>
                    <p>Seattle-based handcrafted jewelry brand founded and designed by Khadijah Lawrence-Fulton <a className="supportLinks" href="https://www.instagram.com/whitespacejewelry/">@whitespacejewelry</a></p>
                  </div>
                </div>


                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.khiry.com/">Khiry</a>
                    <p>Afrofuturist luxury brand by<a className="supportLinks" href="https://www.instagram.com/jameelkhiry/"> @jameelkhiry</a>  <a className="supportLinks" href="https://www.instagram.com/khiryofficial/?utm_source=ig_embed">@khiryofficial</a> </p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.yamnyc.com/">Yam</a>
                    <p>Handmade jewelry brand by Morgan Thomas that was conceived as an ode to her mother <a className="supportLinks" href="https://www.instagram.com/yam_nyc/?utm_source=ig_embed">@yam_nyc</a> </p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://beadsbyaree.com/">Beads By Aree</a>
                    <p>Handmade fashion brand that sells clothing and accessories created by <a className="supportLinks" href="https://www.instagram.com/areeayl/">@areeayl</a> <a className="supportLinks" href="https://www.instagram.com/beadsbyaree/">@beadsbyaree</a> </p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Fashion
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://pyermoss.com/">Pyer Moss</a>
                    <p>Menswear label founded by Haitian-American fashion designer Kerby Jean-Raymond <a className="supportLinks" href="https://www.instagram.com/pyermoss/?hl=en">@pyermoss</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://sincerelytommy.com/">Sincerely, Tommy</a>
                    <p>Brooklyn-based womenswear brand owned by <a className="supportLinks" href="https://www.instagram.com/kaiaventdeleon/?hl=en">@kaiaventdeleon</a> with an in-store coffee bar <a className="supportLinks" href="https://www.instagram.com/sincerelytommy_/?hl=en">@sincerelytommy_</a></p>
                  </div>
                </div >

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://houseofaama.com/">House of Aama</a>
                    <p>Sustainable fashion by Rebecca Henry and Akua Shabaka <a className="supportLinks" href="https://www.instagram.com/shabakaaa/">@shabakaaa</a> <a className="supportLinks" href="https://www.instagram.com/rebeccalouise1967/">rebeccalouise1967</a> <a className="supportLinks" href="https://www.instagram.com/houseofaama/?hl=en">@houseofaama</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.glemaud.com/pages/home">Victor Glemaud</a>
                    <p>Leisurewear brand founded by Haitian-born designer Victor Glemaud <a className="supportLinks" href="https://www.instagram.com/glemaud/?hl=en">@glemaud</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.lemlem.com/">LemLem</a>
                    <p>Artisan-driven brand of sustainable fashion by <a className="supportLinks" href="https://www.instagram.com/liyakebede/">@liyakebede</a> <a className="supportLinks" href="https://www.instagram.com/lemlemofficial/?hl=en">@lemlemofficial</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">6</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.keeyahri.com/">Keeyahri</a>
                    <p>Shoe brand with an artistic, contemporary twist founded by Keya Martin <a className="supportLinks" href="https://www.instagram.com/keeyahri/">@keeyahri</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>



        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Bookstores
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.mahoganybooks.com/">Mahogany Books</a>
                    <p>Retail bookstore that specializes in books written for, by, or about people of the African Diaspora <a className="supportLinks" href="https://www.instagram.com/mahoganybooks/">@mahoganybooks</a></p>
                  </div>
                </div>


                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.cafeconlibrosbk.com/">Cafe Con Libros</a>
                    <p>Feminist indie bookstore based in Brooklyn founded by Kalima DeSuze <a className="supportLinks" href="https://www.instagram.com/cafeconlibros_bk/">@cafeconlibros_bk</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.esowonbookstore.com/">Eso Won Books</a>
                    <p>Los Angeles-based bookstore that promotes African American work co-owned by James Fugate and Thomas Hamilton</p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.harriettsbookshop.com/">Harrietts Bookshop</a>
                    <p>Fishtown’s independent bookshop and creative space celebrating women authors, artists, and activists owned by Jeannine A. Cook <a className="supportLinks" href="https://twitter.com/jeannineacook?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">@jeannineacook</a> <a className="supportLinks" href="https://www.instagram.com/harrietts_bookshop/">@harrietts_bookshop</a></p>
                  </div>
                </div>


                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://blackpearlbookstore.com/">Black Pearl Books</a>
                    <p>An Independent Bookstore in the Austin, Texas <a className="supportLinks" href="https://www.instagram.com/blackpearlbooks/">@blackpearlbooks</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Food and Beverage
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.withmeaning.org/">Teas With Meaning</a>
                    <p>Organic handcrafted tea blends developed by Kamilah Mitchell, a brain tumor survivor and cancer warrior <a className="supportLinks" href="https://www.instagram.com/teaswithmeaning/">@teaswithmeaning</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.redbaycoffee.com/">Red Bay Coffee</a>
                    <p>Red Bay Coffee Roasters was founded in 2014 by Keba Konte that seeks to create unity by hiring and serving people of all backgrounds <a className="supportLinks" href="https://www.instagram.com/redbaycoffee/?hl=en">@redbaycoffee</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://blondery.com/">Blondery</a>
                    <p>Blondery offers a distinctive collection of handmade blondies, based in Brooklyn but ships nationwide. Founded by Auzerais Bellamy <a className="supportLinks" href="https://www.instagram.com/blondery/?hl=en">@blondery</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.iyafoods.com/">Iya Foods</a>
                    <p>Iya Foods is committed to sustainability such as through their use of energy efficient power, recycling and sourcing ingredients locally  <a className="supportLinks" href="https://www.instagram.com/iyafoods/?hl=en">@iyafoods</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://partakefoods.com/">Partake Foods</a>
                    <p>Allergy-friendly, healthy snack brand. Their cookies are free from the top 8 allergens, founded by Denise Woodard  <a className="supportLinks" href="https://www.instagram.com/partakefoods/?hl=en">@partakefoods</a></p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Art and Design
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.ohhappydani.com/">Oh Happy Dani</a>
                    <p>Atlanta-based art by illustrator and social media strategist Danielle Coke <a className="supportLinks" href="https://www.instagram.com/ohhappydani/?utm_source=ig_embed">@ohhappydani</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.shopyowie.com/">Yowie</a>
                    <p>Home and life shop that curates art and designs from independent artists, designers and friends founded by <a className="supportLinks" href="https://www.instagram.com/shannymaldonado/?hl=en">@shannymaldonado</a> <a className="supportLinks" href="https://www.instagram.com/helloyowie/?utm_source=ig_embed">@helloyowie</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://rayoandhoney.com/">Rayo And Honey</a>
                    <p>Brooklyn-based handcrafted art such as pennants, totes and more by Roachele Negron <a className="supportLinks" href="https://www.instagram.com/rayoandhoney/?utm_source=ig_embed">@rayoandhoney</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.iammuseme.com/">Muse Me</a>
                    <p>Art by Gabrielle Watkins including prints, sculptures and original paintings <a className="supportLinks" href="https://www.instagram.com/muse.me/">@muse.me</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.iammuseme.com/">Art By Sabri'A</a>
                    <p>Art by Sabri'A Price including paintings, stickers and abstract artwork <a className="supportLinks" href="https://www.instagram.com/sabriaprice/">@sabriaprice</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>



        <br></br>
        <div className="supportMoreDiv">
          <h3 className="supportMore">For more</h3>
          <a className="supportLinks" href="https://www.buyfromablackwomandirectory.org/">Buy From A Black Woman Directory</a>
          <a className="supportLinks" href="https://officialblackwallstreet.com/directory/">Official Black Wall Street - App for a directory of black-owned businesses</a>
          <a className="supportLinks" href="https://www.blackbusinesslist.com/find-a-black-business.html">Black Business List</a>
          <a className="supportLinks" href="https://docs.google.com/document/d/1qpn5fFrG4-FLfGo3cUsiwb7OvDnnL10uOnF50X-1v90/edit">List of Black-Owned Businesses By Category Google Doc</a>
          <a className="supportLinks" href="https://docs.google.com/document/d/1wJUm5YK7NV9lkSMyNuXzfcx_r2EMFiilthyEvIpQYv4/mobilebasic">Support Black Businesses By Category Google Doc</a>
          <a className="supportLinks" href="https://www.afrobizworld.com/">Discover Local Black-Owned Businesses afrobizworld.com</a>
          <a className="supportLinks" href="https://www.refinery29.com/en-us/black-owned-fashion-businesses?utm_campaign=planoly&utm_medium=refinery29&utm_source=instagram.com"> Refinery29's Slideshow of 43 Black-Owned Fashion Businesses to Support</a>
          <a className="supportLinks" href="https://twitter.com/mmldfag/status/1266035475577438210">Small Black-Owned Online Businesses Twitter Thread</a>
          <a className="supportLinks" href="https://www.glamour.com/story/support-black-owned-business">Glamour article Support Black-Owned Businesses</a>
          <a className="supportLinks" href="https://www.instagram.com/p/CA9DJ6snuQJ/">A List of Black-Owned Indie Beauty And Wellness Businesses <a className="supportLinks" href="https://www.instagram.com/esteelaundry/?hl=en">@esteelaundry</a> </a>
          <a className="supportLinks" href="https://www.instagram.com/p/CA_KN2cnCtT/">30 Black Female-Owned Brands And Entrepreneurs To Support Now And Always <a className="supportLinks" href="https://www.instagram.com/createcultivate/?hl=en">@createcultivate</a></a>
          <a className="supportLinks" href="https://observer.com/2020/06/black-owned-beauty-wellness-brands-support-now/?utm_campaign=daily&utm_source=Sailthru&utm_medium=email&utm_content=B&utm_term=channel-daily-distribution-new">21 Black-Owned Beauty and Wellness Brands to Support Right Now—And Always - Observer</a>
          <a className="supportLinks" href="https://www.vogue.com/article/53-black-owned-fashion-and-beauty-brands-to-support-now-and-always?utm_source=nl&utm_brand=vogue&utm_mailing=VOG_Top_Clickers_060420&utm_campaign=aud-dev&utm_medium=email&bxid=5d5aa677954fcf314c353549&cndid=58183036&hasha=0ad68bbe87750c1cbb25dda08a9ebcb7&hashb=3198e058b75696f5ba9349e3615f1132de92b779&hashc=f0b3bb67579cab87b1828853971fd5ab8dc94532e45d0f9e7911480de8054207&esrc=article-newsletter&utm_term=VOG_TopClickers">Vogue Article 68 Black-Owned Fashion and Beauty Brands to Support Now and Always</a>
        </div >

        <br></br>


























        <h1 className="supportHead">UK</h1>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Beauty/Self Care
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.moorhair.co.uk/">Moor Hair</a>
                    <p>Haircare and Skincare brand that uses organic ingredients and sustainable packaging <a className="supportLinks" href="https://www.instagram.com/moor_hair/?hl=en">@moor_hair</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.goodmanfactory.com/">Goodman Factory</a>
                    <p>Beard care tips and products <a className="supportLinks" href="https://www.instagram.com/goodmanfactory/?igshid=1thjenz26lndo">@goodmanfactory</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://xsandyshairandcosmetics.co.uk/">XSandy's Hair And Cosmetics</a>
                    <p>Natural hair and skin care brand founded by Sandra Brown-Pinnock <a className="supportLinks" href="https://www.instagram.com/xsandysuk/">@xsandysuk</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://antidotestreet.com/">Antidote Street</a>
                    <p>Beauty marketplace platform for black-owned hair products founded by Winnie Awa <a className="supportLinks" href="https://www.instagram.com/winnieawa/?hl=en">@winnieawa</a> <a className="supportLinks" href="https://www.instagram.com/antidotestreet/?hl=en">@antidotestreet</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.beautystack.com/">Beauty Stack</a>
                    <p>Online platform for you to book beauty appointments founded by Sharmadean Reid <a className="supportLinks" href="https://www.instagram.com/sharmadeanreid/?hl=en">sharmadeanreid</a> <a className="supportLinks" href="https://www.instagram.com/beautystack/">@beautystack</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">6</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://afrocenchix.com/">Afrocenchix</a>
                    <p>Natural, fragrance-free afro hair products founded by Joycelyn Mate and Rachael Corson <a className="supportLinks" href="https://twitter.com/JoyMateSpeaks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">@JoyMateSpeaks</a> <a className="supportLinks" href="https://twitter.com/RaeCorson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">@RaeCorson</a> <a className="supportLinks" href="https://www.instagram.com/afrocenchix/?hl=en">@afrocenchix</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Accessories
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="http://arewasignature.co.uk/catalog/index.php">Aręwà Signature</a>
                    <p>Affordable African-inspired authentic garments and accessories <a className="supportLinks" href="https://www.instagram.com/arewa_signature/">@arewa_signature</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.aaksonline.com/">AAKS</a>
                    <p>Handcrafted bags with styles and weaving techniques from Ghana founded by Akosua Afriyie-Kumi <a className="supportLinks" href="https://www.instagram.com/a.a.k.s/">@a.a.k.s</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://bespokebinny.com/">Bespoke Binny</a>
                    <p>African-inspired home and lifestyle brand founded by Natalie Manima <a className="supportLinks" href="https://www.instagram.com/bespokebinny/?hl=en">@bespokebinny</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.bukkybaldwin.com/">Bukky Baldwin</a>
                    <p>Bukky Baldwin creates wide range of handmade products ranging from jewellery, bags, ceramics, home textiles, cushions, coasters, cards, art prints and more owned by Ibukun Jesusanmi Baldwin <a className="supportLinks" href="https://www.instagram.com/bukkybaldwin/?hl=en">@bukkybaldwin</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://labasketry.com/">La Basketry</a>
                    <p>La Basketry celebrates all things woven from online weaving and crafting classes to beautifully woven baskets you can purchase owned by Tabara N'Diaye <a className="supportLinks" href="https://www.instagram.com/labasketry/?hl=af">@labasketry</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Fashion
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://pyermoss.com/">Kai Collective</a>
                    <p>Womenswear brand of attainable clothing with luxury aesthetics by <a className="supportLinks" href="https://www.instagram.com/fisayolonge/">@fisayolonge</a> <a className="supportLinks" href="https://www.instagram.com/kaicollective/?hl=en">@kai collective</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.lappthebrand.com/">LAPP The Brand</a>
                    <p>Athleisurewear brand created to embody the 21st century girl and producing clothes that represent not only their style but their issues by Leomie Anderson <a className="supportLinks" href="https://www.instagram.com/leomieanderson/?hl=en">@leomieanderson</a> <a className="supportLinks" href="https://www.instagram.com/lappthebrand/?hl=en">@lappthebrand</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://a-cold-wall.com/">A-Cold-Wall</a>
                    <p>Fashion label for streetwear fashion designed and founded by Samuel Ross <a className="supportLinks" href="https://www.instagram.com/acoldwall/">@acoldwall</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.nubianskin.com/">Nubian Skin</a>
                    <p>Suitable skin-tone lingerie for women of colour founded by Ade Hassan <a className="supportLinks" href="https://www.instagram.com/itsadehassan/">@itsadehassan</a> <a className="supportLinks" href="https://www.instagram.com/nubianskin/">@nubianskin</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://1figures.com/">1Figures</a>
                    <p>Modern streetwear brand influenced by music founded by Chris Figures <a className="supportLinks" href="https://twitter.com/ogfigures?lang=en">@OGFigures</a> <a className="supportLinks" href="https://www.instagram.com/1figures/">@1figures</a></p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Bookstores
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.newbeaconbooks.com/">New Beacon Books</a>
                    <p>Independent book store specialising in African Caribbean literature founded by John La Rose and his partner Sarah White <a className="supportLinks" href="https://www.facebook.com/newbeaconbooks/">@newbeaconbooks</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.jacarandabooksartmusic.co.uk/">Jacaranda Books</a>
                    <p>Diversity-led indie publisher with a dedication to creating space on the bookshelf for diverse ideas and writers founded by Valerie Brandes <a className="supportLinks" href="https://twitter.com/valrey?lang=en">@valrey</a> <a className="supportLinks" href="https://www.instagram.com/jacarandabooks/">@jacarandabooks</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://booksofafrica.com/">Books Of Africa</a>
                    <p>Bookstore that publishes a range of books mainly written by authors of African descent founded by Emmanuel Mah Nigel Watt and Dieudonne Gnammankou <a className="supportLinks" href="https://www.facebook.com/booksofafrica/">@booksofafrica</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.hoperoadpublishing.com/">Hope Road Publishing</a>
                    <p>HopeRoad promotes literature from Africa, Asia and the Caribbean founded by Rosemarie Hudson <a className="supportLinks" href="https://www.instagram.com/hoperoadpublishing/">@hoperoadpublishing</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.thisisbooklove.com/">This Is Book Love</a>
                    <p>This is Book Love is a collective of Educators, Artists, Musicians, Creatives, Aunties, Uncles, Parents and Grandparents working together to make multicultural matter. They have a book carnival and an online bookshop <a className="supportLinks" href="https://www.instagram.com/thisisbooklove_/?hl=en">@thisisbooklove_</a></p>
                  </div>
                </div>


              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>


        <Accordion defaultActiveKey="0" className="supportAccordion">
          <Card>
            <Accordion.Toggle className="supportTopic" as={Card.Header} eventKey="1">
              Food And Beverage
    </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="supportCardBody">

                <div className="supportDiv1">
                  <a className="supportNumber">1</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.ebonystatus.com/">Ebony Status</a>
                    <p>Caribbean fresh produce delivered to your home <a className="supportLinks" href="https://www.instagram.com/ebony.status/?hl=en">@ebony.status</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">2</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://www.darksugars.co.uk/">Dark Sugars</a>
                    <p>Dark Sugars turns Ghanian cacao beans into a variety of products from chocolate(they have a wide range of quality vegan chocolate too) to ice cream and was founded by Nyanga Mendy <a className="supportLinks" href="https://www.instagram.com/darksugars/?hl=en">@darksugars</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">3</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://thetreatsclub.com/">Treats Club Dessert Bar</a>
                    <p>Dessert bar that offers donuts, innovative ice cream flavours and gourmet marshmallow fluff founded by Lungile Mhlanga <a className="supportLinks" href="https://www.instagram.com/thetreatsclub/?hl=en">@thetreatsclub</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">4</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://elizabethscakeemporium.com/">Elizabeth's Cake Emporium</a>
                    <p>Award-winning luxury wedding cakes founded by Elizabeth Solaru <a className="supportLinks" href="https://www.instagram.com/elizabethscakeemporium/">@elizabethscakeemporium</a></p>
                  </div>
                </div>

                <div className="supportDiv1">
                  <a className="supportNumber">5</a>
                  <div className="supportDiv2">
                    <a className="supportBrands" href="https://chikas.co.uk/">Chika's</a>
                    <p>Vegan snacks made from natural ingredients with an African vibe founded by Chika Rusell <a className="supportLinks" href="https://www.instagram.com/chika.russell/?hl=en">@chika.russell</a> <a className="supportLinks" href="https://www.instagram.com/elizabethscakeemporium/">@elizabethscakeemporium</a></p>
                  </div>
                </div>

              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br />

        <div className="supportMoreDiv">
          <h3 className="supportMore">For more</h3>
          <a className="supportLinks" href="https://www.ukblackowned.co.uk/">UK Black Owned Businesses Database</a>
          <a className="supportLinks" href="https://www.thestrategist.co.uk/article/black-owned-uk-businesses.html">50 Black-Owned, UK-Based Businesses to Support Right Now - The Strategist UK</a>
          <a className="supportLinks" href="https://www.bustle.com/p/black-owned-uk-businesses-to-buy-from-22947431">Black-Owned UK Businesses To Buy From - Bustle</a>
          <a className="supportLinks" href="https://www.instagram.com/p/CBBQMk7AeJt/">Black-Owned Restaurants in London - @eatingldn</a>
        </div>




      </div >
      <div className="backDiv">
        <Link tag={Link} to="/" className="backButton">back</Link>
      </div>
    </>
  )
}

export default Support;