import { settings, select } from '../settings.js';
import BaseWidget from './BaseWidget.js';

class AmountWidget extends BaseWidget {
  constructor(element){
    super(element, settings.amountWidget.defaultValue); //sprawdzić czy nie usunąć pierwszego or - tak

    const thisWidget = this;

    thisWidget.getElements(element);
    //thisWidget.setValue(thisWidget.dom.input.value || settings.amountWidget.defaultValue);
    //thisWidget.value = settings.amountWidget.defaultValue;
    //thisWidget.setValue(thisWidget.dom.input.value);
    thisWidget.initActions();

    console.log('AmountWidget', thisWidget);
  }

  getElements(){
    const thisWidget = this;

    //thisWidget.element = element;
    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.amount.input);
    thisWidget.dom.linkDecrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.dom.linkIncrease = thisWidget.dom.wrapper.querySelector(select.widgets.amount.linkIncrease);
  }

  /* setValue(value){
    const thisWidget = this;
    const newValue = thisWidget.parseValue(value);

    /* if (thisWidget.value !== newValue && !isNaN(newValue)) {
      if (newValue <= settings.amountWidget.defaultMax + 1) {
        if (newValue >= settings.amountWidget.defaultMin - 1) {
          thisWidget.value = newValue;
        }
      }
    } inny zapis: */

    /* if(newValue != thisWidget.value && thisWidget.isValid(newValue)){
      thisWidget.value = newValue;
      thisWidget.announce();
    }

    thisWidget.renderValue();

    //thisWidget.dom.input.value = thisWidget.value;
    //thisWidget.announce();
  } */


  isValid(value){
    return !isNaN(value)
    && value >= settings.amountWidget.defaultMin 
    && value <= settings.amountWidget.defaultMax;
  }

  renderValue(){
    const thisWidget = this;

    thisWidget.dom.input.value = thisWidget.value;
  }


  initActions(){
    const thisWidget = this;

    thisWidget.dom.input.addEventListener('change', function(){
      //thisWidget.setValue(thisWidget.dom.input.value);
      thisWidget.value = thisWidget.dom.input.value;
    });

    thisWidget.dom.linkDecrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value - 1);
    });

    thisWidget.dom.linkIncrease.addEventListener('click', function(event){
      event.preventDefault();
      thisWidget.setValue(thisWidget.value + 1);
    });
      
  }
}

export default AmountWidget;