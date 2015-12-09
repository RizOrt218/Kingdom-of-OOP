import LivingThing from './LivingThing';

export default class Eukaryota extends LivingThing {
  constructor( name, uniCellular, asexual, mobile, heterotroph ){
    super( name, uniCellular, true, false, asexual, mobile);
    this._heterotroph = heterotroph;
  }

  get heterotroph(){
    return this._heterotroph;
  }
  set heterotroph( prop ){
    this._heterotroph = prop;
  }

  get autotroph(){
    return !this._heterotroph;
  }
  set autotroph( prop ){
    this._heterotroph = !prop;
  }
}