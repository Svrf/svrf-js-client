import AuthApi from './auth';
import MediaApi from './media';

import MakeAuthenticatedRequests from '../http/app-token-http-client';
import HttpClient from '../http/http-client';

import TokenService from '../services/token';
import Validator from '../services/validator';

import enums from '../enums';
import storage from '../storage';

/**
 * @typedef {Object} ApiOptions
 * @prop {boolean} isManualAuthentication - pass this option if you want to call api.authenticate
 * manually (for example while user IDLE).
 * @prop {Storage} storage - app token storage
 */

/**
 * @typedef {Object} Storage
 * @prop {Function} get - get app token info from storage
 * @prop {Function} set - set app token info to storage
 * @prop {Function} clear - remove app token info from storage
 */

/**
 * Svrf API provider
*/
class Svrf {
  /**
   * @param {String} apiKey - API Key
   * @param {ApiOptions=} options - API options
   */
  constructor(apiKey, {isManualAuthentication, storage: userStorage, client: userClient} = {}) {
    // Validate that the user's Storage object accepts get, set, and clear methods.
    if (userStorage) {
      const storageKeys = ['get', 'set', 'clear'];

      Validator.validateObjectSchema('User Storage', userStorage, {
        allowedKeys: storageKeys,
        requiredKeys: storageKeys,
      });
    }

    // Validate that the custom HTTP client is a function
    if (userClient) {
      Validator.validateFunction(userClient);
    }

    const tokenStorage = userStorage || storage;
    const tokenService = new TokenService(tokenStorage);
    const httpClient = userClient || HttpClient;
    this.authApi = new AuthApi(httpClient, tokenService, apiKey);
    this.authenticated = MakeAuthenticatedRequests(this.authApi, tokenService);

    /**
     * MediaApi instance
     * @type {MediaApi}
     */
    this.media = new MediaApi(this.authenticated);

    if (!isManualAuthentication) {
      this.authenticate();
    }
  }

  /**
   * Authenticates your app: retrieves token and saves it or takes it from the storage.
   * You should call it only if you passed the isManualAuthentication option.
   * @returns {Promise<void>}
   */
  authenticate() {
    return this.authApi.authenticate();
  }
}

/**
 * @type {Enums}
 * @static
 */
Svrf.enums = enums;

export default Svrf;
