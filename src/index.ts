/*!
 * Merge Options Default v1.0.1 (https://github.com/yoicalsin/merge-options-default)
 * Copyright 2020 The (Merge Options Default) Authors
 * Copyright 2020 Yoni Calsin.
 * Licensed under MIT (https://github.com/yoicalsin/merge-options-default/blob/master/LICENSE)
 */

export const Merge = (...moreOptions: any[]) => {
   let payload = {};
   for (const v of moreOptions) {
      if (typeof v === 'object') {
         payload = {
            ...payload,
            ...v,
         };
      }
   }
   return payload;
};

export default Merge;
