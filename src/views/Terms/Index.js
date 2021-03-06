
import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { inject, observer, Provider } from 'mobx-react';
import {Image} from 'cloudinary-react';
import {Cloudinary_Name, No_Avatar, No_Thumb} from '../../views/Api/';
import Status from '../../Status';
import Share from '../../Share';
import Related from '../../Related';



import helpStore from '../Store/Store';
import moment from 'moment';
import 'moment/locale/id';
moment.locale('id');

const Help = inject('helpStore')(
  observer(
    class extends Component {
      render() {
        const { error, loading, terms } = this.props.helpStore;
         const updatedTime= terms.updateddAt
          const updateDT = moment(updatedTime).format('LL')//20 Mart 2017
        return (

              <div>
        <MetaTags>
            <title>Nomadic - Terms of Services</title>
             <meta name="description" content="Nomadic – Online Publishing Platform for Read, write and share stories" />
            <meta property="og:title" content="Nomadic - Terms of Services" />
             <meta property="og:description" content="Welcome to Nomadic, a place to read, write, and interact with the stories. Every day, thousands of read, write, and share important stories on Nomadic." />
            <meta property="og:image" content={terms.imageUrl} />
        </MetaTags>
    
         <section className="article-detail-newyork">

             <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
                <div className="col-md-8">
                   
                     <div className="post-content">
                        <h1 className="posttitle">Nomadic - Terms of Services.</h1>
                          <div className="post-author-info-top">
                       <div className="col-md-1"  style={{marginLeft:'-10px'}}><img src="https://res.cloudinary.com/nomadic-id/image/upload/v1522390682/logo_google.jpg" alt="logo avatar" className="img-circle"/></div>
                        <div className="col-md-5 col-sm-12">
                          <h5 className="author-name">Nomadic</h5>
                          <p className="author-info">Publishing Platform for everyone. <br /><span  style={{color:'#baba',fontSize:'11px' }}>27 Maret - {terms.reading} min read</span></p>
                        </div>
                        
                       <div className="col-md-6"><span className="pull-right" style={{color:'#bababa'}}>Updated : {updateDT}</span></div>
                    </div>

                         <Image cloudName={Cloudinary_Name} publicId={terms.imageId}  crop="scale"  alt={terms.title}/>

                        <div className="single" id="paraf">

                         <div dangerouslySetInnerHTML={{ __html: terms.description }}></div>
      
                        </div>

                       {/* end for single */}



               
                  {/* tags */}
            <div className="after-post-tags">
              <ul className="tags">
                <li><a>Publishing</a></li>
                <li><a>Story</a></li>
                <li><a>Writter</a></li>
                <li><a>Social Platform</a></li>
              </ul>
            </div>
            {/* end tags */}

             <div className="post-author-info hidden-sm hidden-xs">
              <div className="row">
                       <div className="col-md-1"><img src="https://res.cloudinary.com/nomadic-id/image/upload/v1522390682/logo_google.jpg" alt="avatar Bottom" /></div>
                       <div className="col-md-5">
                    <h5 className="author-name">Nomadic</h5>
                    <p className="author-info">Publishing Platform for everyone..</p>
                 </div>

                 <div className="col-md-6 pull-right">

                 
                          <Share />
                         

                 </div>


              </div>
                     

             </div>

                 </div>


                </div>
             </div>
            </div>

              {/* gray */}
             <div className="bg-gray">
   
                <div className="container">
                    
                     <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12 col-xs-12">

                          <div className="related-articles">
                               
                               <div className="row">

                                    <div className="col-md-12">
                        <div className="main-title">
                          <h4><strong>Nomadic</strong> info</h4>
                        </div>
                   
                      </div>

                               <Related />

                                  {/* gend row */}
                               </div>

                           </div>


                        </div>
                      </div>

                </div>
            </div>
       {/* end gray */}
         </section>
         <a href="/" className="cd-top">Top</a> 
         
         {/* alert Bar */}
        

        <Status 
          name="Nomadic"
          avatar="https://res.cloudinary.com/nomadic-id/image/upload/v1522390682/logo_google.jpg"
        />
        
        {/* end bar */}
        
      </div>
          )
      }
    }
  )
);


const stores = { helpStore };

const Terms = () => (
  <Provider {...stores}>
    <Help />
  </Provider>
);

export default Terms;