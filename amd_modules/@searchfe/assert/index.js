/**
 * @file assert.js assert utility
 * @author harttle<yangjvn@126.com>
 */

define(function () {
    function ok(predict, msg) {
        if (!predict) {
            throw new Error(msg);
        }
    }

    function equal(actual, expected, message) {
        return ok(actual == expected, message);
    }

    var assert = ok;
    assert.ok = ok;
    assert.equal = equal;

    return assert;
});
