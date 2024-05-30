class UtilMgr {
    constructor (){

    }
    numberExtractor(str){
        return parseInt(str.match(/\d+/).join(''))
    }
}