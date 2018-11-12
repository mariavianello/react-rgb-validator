import Recase from 'recase';
import includes from 'lodash/includes';

const recase = Recase.create({});
const UUID_FORMAT = /[0-9a-f-]{36}/;

export default class ServerUtils {
  static async get(route, options = {}) {
    return ServerUtils._request(route, {
      method: 'GET',
      ...options,
    });
  }

  static async post(route, options = {}) {
    return ServerUtils._request(route, {
      method: 'POST',
      ...options,
    });
  }

  static async patch(route, options = {}) {
    return ServerUtils._request(route, {
      method: 'PATCH',
      ...options,
    });
  }

  static async put(route, options = {}) {
    return ServerUtils._request(route, {
      method: 'PUT',
      ...options,
    });
  }

  static async delete(route, options = {}) {
    return ServerUtils._request(route, {
      method: 'DELETE',
      ...options,
    });
  }

  static async _request(route, options = {}) {
    const query = ServerUtils._query(options);
    const url = ServerUtils._buildUrl(route, query);
    const fetchOptions = {
      method: options.method,
      headers: options.headers,
    };

    fetchOptions.body = ServerUtils._body(options);

    const expectedResponse = options.expectedResponse || 200;

    const response = await window.fetch(url, fetchOptions);
    ServerUtils._checkResponseStatus(response, expectedResponse);

    const json = await response.json();
    return {
      rawResponse: response,
      // data: recase.camelCopy(json),
      data: recase.camelCopy(json),
      // message: json.result,
    };
  }

  static _buildUrl(path, query = {}) {
    const url = new URL(`http://localhost:9292${path}`);
    Object.keys(query).forEach((key) => url.searchParams.append(key, query[key]));

    return url;
  }

  static _body(options = {}) {
    if (options.body) {
      return JSON.stringify(recase.snakeCopy(options.body));
    }
  }

  static _query(options = {}) {
    if (options.query) {
      return recase.snakeCopy(options.query);
    }
  }

  static _checkResponseStatus(response, expected) {
    const expectedArray = Array.isArray(expected) ? expected : [expected];
    if (includes(expectedArray, response.status)) {
      return;
    }

    throw new Error(`Unexpected ${response.status} on API call to ${ServerUtils._extractNormalizedUrlPath(response.url)}`);
  }

  static _extractNormalizedUrlPath(url) {
    if (!url) { return; }

    return '/' + url.split('/').slice(3).join('/').replace(UUID_FORMAT, '(uuid)');
  }
}
