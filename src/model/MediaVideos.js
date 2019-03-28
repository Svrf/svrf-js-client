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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.MediaVideos = factory(root.SVRF.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaVideos model module.
   * @module model/MediaVideos
   * @version 1.5.0
   */

  /**
   * Constructs a new <code>MediaVideos</code>.
   * Resized &#x60;mp4&#x60; (&#x60;H.264&#x60;) videos of the Media. Only included if the Media is &#x60;video&#x60;. Resolutions larger than the original size will not be included (the original is included as &#x60;max&#x60;). For stereoscopic content, this will be a monoscopic version of the top or left channel.
   * @alias module:model/MediaVideos
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>MediaVideos</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaVideos} obj Optional instance to populate.
   * @return {module:model/MediaVideos} The populated <code>MediaVideos</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('848')) {
        obj['848'] = ApiClient.convertToType(data['848'], 'String');
      }
      if (data.hasOwnProperty('1440')) {
        obj['1440'] = ApiClient.convertToType(data['1440'], 'String');
      }
      if (data.hasOwnProperty('2160')) {
        obj['2160'] = ApiClient.convertToType(data['2160'], 'String');
      }
      if (data.hasOwnProperty('4096')) {
        obj['4096'] = ApiClient.convertToType(data['4096'], 'String');
      }
      if (data.hasOwnProperty('clip')) {
        obj['clip'] = ApiClient.convertToType(data['clip'], 'String');
      }
      if (data.hasOwnProperty('hls')) {
        obj['hls'] = ApiClient.convertToType(data['hls'], 'String');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'String');
      }
    }
    return obj;
  }

  /**
   * 848px wide video with a 1.3MBps video rate, 96KBps audio rate.
   * @member {String} 848
   */
  exports.prototype['848'] = undefined;
  /**
   * 1440px wide video with a 4.4MBps video rate, 128KBps audio rate.
   * @member {String} 1440
   */
  exports.prototype['1440'] = undefined;
  /**
   * 2160px wide video with a 10MBps video rate, 192KBps audio rate.
   * @member {String} 2160
   */
  exports.prototype['2160'] = undefined;
  /**
   * 4096px wide video with a 20MBps video rate, 256KBps audio rate.
   * @member {String} 4096
   */
  exports.prototype['4096'] = undefined;
  /**
   * A 6-second, 1440px wide clip, with a 2MBps video rate, no audio.
   * @member {String} clip
   */
  exports.prototype['clip'] = undefined;
  /**
   * URL for an HLS master playlist containing streams in all of the above resolutions which are no wider than the original Media. This should be used for streaming unless the platform does not support HLS.
   * @member {String} hls
   */
  exports.prototype['hls'] = undefined;
  /**
   * Maximum resolution video (original source video), `width` pixels wide at unspecified video and audio rates.
   * @member {String} max
   */
  exports.prototype['max'] = undefined;



  return exports;
}));


