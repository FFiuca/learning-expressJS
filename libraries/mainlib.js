const exp = {}

//REVIEW - make global helper can yet
// (()=>{
    const isset = (param)=>{
        return (typeof param!== 'undefined' || param!==null || (typeof param=== 'string' && param.trim()!==''))? true: false;
    }
// })()


exp.isset = isset

module.exports = exp

