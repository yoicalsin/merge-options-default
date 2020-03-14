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
