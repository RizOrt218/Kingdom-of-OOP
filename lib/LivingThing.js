export default class LivingThing {

  constructor( name, uniCellular, trueNucleus, anaerobic, asexual, mobile ){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }
  set name( name ){
    if ( typeof ( name ) === 'string'){
      this._name = name;
    } else {
      throw new TypeError('LivingThing.name must be a string');
    }
  }

  get uniCellular(){
    return this._uniCellular;
  }
  set uniCellular(uniCellular){
    if ( typeof ( uniCellular ) === 'boolean' ){
      this._uniCellular = uniCellular;
    } else {
      throw new TypeError('LivingThing.uniCellular must be a boolean');
    }
  }

  get multiCellular(){
    return !this._uniCellular;
  }
  set multiCellular( celly ){
    this._uniCellular = !celly;
  }

  get trueNucleus(){
    return this._trueNucleus;
  }
  set trueNucleus( trueNucleus ){
    if ( typeof ( trueNucleus ) === 'string' ){
      this._trueNucleus = trueNucleus;
    } else {
      throw new TypeError('LivingThing.trueNucleus must be a string');
    }
  }

  get eukaryote(){
    return this._trueNucleus;
  }
  set eukaryote( val ){
    this._trueNucleus = val;
  }

  get prokaryote(){
    return !this._trueNucleus;
  }
  set prokaryote( val ){
    this._trueNucleus = !val;
  }

  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic( anaerobic ){
    this._anaerobic = anaerobic;
  }

  get aerobic(){
    return !this._anaerobic;
  }

  set aerobic( val ){
    this._anaerobic = !val;
  }

  get asexual(){
    return this._asexual;
  }
  set asexual( asexual ){
    this._asexual = asexual;
  }

  get sexual(){
    return !this._asexual;
  }
  set sexual( val ){
    this._asexual = !val;
  }

  get mobile(){
    return this._mobile;
  }
  set mobile( val ){
    this._mobile = val;
  }

  get immobile(){
    return !this._mobile;
  }
  set immobile( val ){
    this._mobile = !val;
  }

}