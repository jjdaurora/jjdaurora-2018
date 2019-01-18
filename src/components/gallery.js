import React, {Component} from 'react';

class Gallery extends Component {
      state = {
          factsGallery: [
          {
            id: 1,
            description: 'Places Lived: Born in San Diego. Raised in Columbus, OH. College in Chicago. Studied in Shanghai. Migrated to Cleveland'
          },
          {
            id: 2,
            description: 'Speaks Chinese'
          },
          {
            id: 3,
            description: 'Cleveland sports.'
          },
          {
            id: 4,
            description: 'Enjoys cof fee, beer, and most spirits.'
          },
          {
            id: 5,
            description: 'Instrumental hip-hop is the genre I listen to most.'
          }
        ]
      }
      render() {
        console.log('Gallery', this.state.factsGallery);
        return  (
        <div>
        {this.state.factsGallery.map(fact => {
           return (
             <div id="card">
               <div id="content-card">
                  {fact.description}
               </div>
             </div>
           )
          })
        }
        </div>
        )
     }
}
export default Gallery; 