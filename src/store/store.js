import {observable} from 'mobx';
var validator = require('validator');
var valid = require('card-validator');

class store {
  @observable name='';
  @observable address='';
  @observable cc='';
  @observable exp='';
  @observable cvv='';
  @observable type='';
  @observable err='';
  @observable alertColor= 'danger';
  @observable isErrVisible= false;
  @observable cardType='';
  @observable totalMockPayment=' Rs. 2770.00';
  @observable isPaymentSuccess= false;

    getCardType = () => {
       return this.cardType;
    };

    getIsPaymentSuccess = () => {
        return this.isPaymentSuccess;
    };

    getTotalMockPayment = () => {
        return this.totalMockPayment;
    };

  handleNameChange = (arg) => {
    this.name = arg.target.value
  };
  handleAddressChange = (arg) => {
    this.address = arg.target.value
  }
  handleCardNumberChange = (arg) => {
    this.cc = arg.target.value;
      let numberValidation = valid.number(this.cc);
      if (numberValidation.card) {
          console.log(numberValidation.card.type);
          this.cardType = numberValidation.card.type;
      }
  }
  handleCardExpiryChange = (arg) => {
    this.exp = arg.target.value
  }
  handleCardCVCChange = (arg) => {
    let parseint = parseInt(arg.target.value)
    this.cvv = parseint.toString()
  }
  onDismiss = () => {
    this.isErrVisible = false
  }
  submit = () => {
      let numberValidation = valid.number(this.cc);
      let expireDateValidation = valid.expirationDate(this.exp);
    if(validator.isEmpty(this.name)){
        this.err = 'Please enter a valid first name and try again.'
        this.alertColor = 'danger'
        this.isErrVisible = true 
    }else if(validator.isEmpty(this.address)){
        this.err= 'Please enter a valid address and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true 

    }else if(validator.isEmpty(this.cc)){
        this.err= 'Please enter a valid creditcard and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(!numberValidation.isValid){
        this.err= 'Please enter a valid creditcard and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(!expireDateValidation.isValid){
        this.err= 'Please enter a valid expiration date and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isEmpty(this.cvv)){
        this.err= 'Please enter a valid cvv and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true
    }else if(validator.isLength(this.cvv, { min: 3, max: 4 })){
        this.err= 'Success';
        this.alertColor= 'success';
        this.isErrVisible= true;
        this.isPaymentSuccess = true;
    }else{
        this.err= 'Please enter a valid cvv and try again.'
        this.alertColor= 'danger'
        this.isErrVisible= true 
    }
  }

}

export default new store();