import enums from '../enums';
import Validator from './validator';

/**
 * HTTP request query handlers provider
*/
class QueryService {
  /**
   * Validate query params using object schema
   * @param {Object} params - Params needed to validate
   * @throws {Error} Params are invalid
   */
  static validateParams(params) {
    if (!params) {
      return;
    }

    Validator.validateObjectSchema('Query Params', params, {
      allowedKeys: [
        'category',
        'minimumWidth',
        'pageNum',
        'size',
        'stereoscopicType',
        'type',
      ],
    });

    Validator.validateEnumString('category', params.category, enums.category);
    Validator.validateNumber('minimumWidth', params.minimumWidth);
    Validator.validateNumber('pageNum', params.pageNum, {min: 0});
    Validator.validateNumber('size', params.size, {min: 1, max: 100});
    Validator.validateEnumString('stereoscopic type', params.stereoscopicType, enums.stereoscopicType);
    Validator.validateArrayOrSingleEnumString('type', params.type, enums.mediaType);
  }

  /**
   * Prepare query params for HTTP request
   * @param {Object=} params - Request params
   * @param {String=} params.category - Media category
   * @param {Number=} params.minimumWidth - Media minimum width
   * @param {Number=} params.pageNum - Page number
   * @param {Number=} params.size - Page size
   * @param {String=} params.stereoscopicType - Media stereoscopic type
   * @param {(String|Array<String>)=} params.type - Media type
   * @returns {Object} Params which are ready for HTTP request
   */
  static prepareQueryParams(params) {
    const preparedParams = {...params};

    if (params && Array.isArray(params.type)) {
      preparedParams.type = params.type.join(',');
    }

    return preparedParams;
  }
}

export default QueryService;
