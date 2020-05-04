"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*!
 * Merge Options Default v1.0.2 (https://github.com/yoicalsin/merge-options-default)
 * Copyright 2020 The (Merge Options Default) Authors
 * Copyright 2020 Yoni Calsin.
 * Licensed under MIT (https://github.com/yoicalsin/merge-options-default/blob/master/LICENSE)
 */
const is_all_utils_1 = require("is-all-utils");
const MergeDefault = (...objects) => {
    let data = {};
    for (const object of objects) {
        if (is_all_utils_1.isObject(object)) {
            data = Object.assign(Object.assign({}, data), object);
        }
    }
    return data;
};
exports.Merge = MergeDefault;
exports.default = MergeDefault;
