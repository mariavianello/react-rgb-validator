export default class NetworkService {
  static request(request, params) {
    return new NetworkRequest(request, params).request();
  }
}

export class NetworkResult {
  constructor(data, error) {
    this._data = data;
    this._error = error;
  }

  get data() {
    return this._data;
  }

  get error() {
    return this._error;
  }

  get isSuccess() {
    return !this.error;
  }

  get isError() {
    return !this.isSuccess;
  }
}

class NetworkRequest {
  constructor(request, params) {
    this._request = request;
    this._params = params;
  }

  async request() {
    let data, error;

    try {
      data = await this._request(this._params);
    } catch (err) {
      error = err || new Error('request promise was rejected without throwing');
    }

    return new NetworkResult(data, error);
  }
}

