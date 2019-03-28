/*
 * SVRF API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SuccessResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SuccessResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.PaginationResponse = factory(root.SVRF.ApiClient, root.SVRF.SuccessResponse);
  }
}(this, function(ApiClient, SuccessResponse) {
  'use strict';




  /**
   * The PaginationResponse model module.
   * @module model/PaginationResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>PaginationResponse</code>.
   * @alias module:model/PaginationResponse
   * @class
   * @implements module:model/SuccessResponse
   */
  var exports = function() {
    var _this = this;

    SuccessResponse.call(_this);


  };

  /**
   * Constructs a <code>PaginationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaginationResponse} obj Optional instance to populate.
   * @return {module:model/PaginationResponse} The populated <code>PaginationResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SuccessResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('nextPageNum')) {
        obj['nextPageNum'] = ApiClient.convertToType(data['nextPageNum'], 'Number');
      }
      if (data.hasOwnProperty('pageNum')) {
        obj['pageNum'] = ApiClient.convertToType(data['pageNum'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The next page to query to see more results, whether or not the next page actually exists.
   * @member {Number} nextPageNum
   */
  exports.prototype['nextPageNum'] = undefined;
  /**
   * The current page number
   * @member {Number} pageNum
   */
  exports.prototype['pageNum'] = undefined;

  // Implement SuccessResponse interface:
  /**
   * If the request was successful
   * @member {Boolean} success
   */
exports.prototype['success'] = undefined;



  return exports;
}));


