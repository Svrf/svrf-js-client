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
    root.SVRF.AuthResponse = factory(root.SVRF.ApiClient, root.SVRF.SuccessResponse);
  }
}(this, function(ApiClient, SuccessResponse) {
  'use strict';




  /**
   * The AuthResponse model module.
   * @module model/AuthResponse
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>AuthResponse</code>.
   * @alias module:model/AuthResponse
   * @class
   * @implements module:model/SuccessResponse
   */
  var exports = function() {
    var _this = this;

    SuccessResponse.call(_this);



  };

  /**
   * Constructs a <code>AuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthResponse} obj Optional instance to populate.
   * @return {module:model/AuthResponse} The populated <code>AuthResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SuccessResponse.constructFromObject(data, obj);
      if (data.hasOwnProperty('expiresIn')) {
        obj['expiresIn'] = ApiClient.convertToType(data['expiresIn'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
    }
    return obj;
  }

  /**
   * How many seconds this token will be valid for.
   * @member {Number} expiresIn
   */
  exports.prototype['expiresIn'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Token to be used in the `x-app-token` header to access authenticated routes
   * @member {String} token
   */
  exports.prototype['token'] = undefined;

  // Implement SuccessResponse interface:
  /**
   * If the request was successful
   * @member {Boolean} success
   */
exports.prototype['success'] = undefined;



  return exports;
}));


