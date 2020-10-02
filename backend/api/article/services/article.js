'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
    find(params, populate) {
        // Simple AND query
        let andFilter = Object.keys(params).find(val => val.search('_containsAnd') >= 0);
        if(andFilter){
          // AND filtering
          const property = andFilter.split('_')[0];
          const values = params[andFilter];
          const model = strapi.query('article').model;        
          return model.query(qb => {
            qb.where(property, 'LIKE', `%${values[0]}%`)
            for(let i=1; i<values.length; i++){
              qb.andWhere(property, 'LIKE', `%${values[i]}%`)
            }        
          }).fetchAll()        
        } else {
          // Normal behavior
          return strapi.query('article').find(params, populate);
        }                
    },
};
