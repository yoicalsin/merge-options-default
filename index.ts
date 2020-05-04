/*!
 * Merge Options Default v1.0.2 (https://github.com/yoicalsin/merge-options-default)
 * Copyright 2020 The (Merge Options Default) Authors
 * Copyright 2020 Yoni Calsin.
 * Licensed under MIT (https://github.com/yoicalsin/merge-options-default/blob/master/LICENSE)
 */
import { isObject } from 'is-all-utils';

interface More {
   [key: string]: any;
}

/**
 * @author Yoni Calsin <helloyonicb@gmail.com>
 * @param objects More[]
 */
const MergeDefault = <T extends More = More>(...objects: (T | More)[]): T => {
   let data = {};
   for (const object of objects) {
      if (isObject(object)) {
         data = {
            ...data,
            ...object,
         };
      }
   }
   return data as T;
};

export { MergeDefault as Merge };
export default MergeDefault;
