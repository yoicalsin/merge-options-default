interface More {
   [key: string]: any;
}

interface MoreNumer {
   [key: number]: any;
}

export const Merge = (
   optionsDefault: More | MoreNumer,
   ...moreOptions: any[]
) => {
   let payload = {
      ...optionsDefault,
   };
   for (const v of moreOptions) {
      if (v !== undefined && typeof v === 'object') {
         payload = {
            ...payload,
            ...v,
         };
      }
   }
   return payload;
};

export default Merge;
