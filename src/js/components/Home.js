import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor(element, app){
    const thisHome = this;

    thisHome.app = app;
    thisHome.render();
    thisHome.initActions();
  }


  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homeWidget();
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.home);
    homeContainer.appendChild(thisHome.element).innerHTML;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    
    thisHome.dom.homeHeader = document.querySelector(select.home.homeHeader);
  }
  initActions() {
    const thisHome = this;
    thisHome.dom.homeHeader.addEventListener('click', function(event){
      event.preventDefault();
      let pageId = event.target.offsetParent.getAttribute(select.home.dataId);
      if (pageId) {
        thisHome.app.activatePage(pageId);
      }
    });
  }

}

export default Home;