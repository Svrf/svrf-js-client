/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## API Libraries  You can use SVRF API libraries to encapsulate endpoint requests: * [C#][CSharp] * [Java][Java] * [JavaScript][JavaScript] * [Objective C][Objective C] * [Swift][Swift]  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [CSharp]: https://www.nuget.org/packages/SVRF.Client [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [Java]: https://mvnrepository.com/artifact/com.svrf/svrf-client [JavaScript]: https://www.npmjs.com/package/svrf-client [JSON]: http://www.json.org/ [Objective C]: https://cocoapods.org/pods/SVRFClient [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [Swift]: https://cocoapods.org/pods/SVRFClientSwift [TOS]: https://www.svrf.com/terms 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
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
    root.SVRF.APIKey = factory(root.SVRF.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The APIKey model module.
   * @module model/APIKey
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>APIKey</code>.
   * @alias module:model/APIKey
   * @class
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   */
  var exports = function(id, key, name) {
    var _this = this;

    _this['id'] = id;
    _this['key'] = key;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>APIKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/APIKey} obj Optional instance to populate.
   * @return {module:model/APIKey} The populated <code>APIKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


