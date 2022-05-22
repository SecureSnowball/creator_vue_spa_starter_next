import { AUTH_TOKEN, TENANT_TOKEN } from "../constants";

class LocalStorageService {
  setString(key, value) {
    return localStorage.setItem(key, value);
  }

  getString(key) {
    return localStorage.getItem(key);
  }

  setInt(key, value) {
    return localStorage.setItem(key, value);
  }

  getInt(key) {
    const number = localStorage.getItem(key);
    if (number) {
      return parseInt(number, 10);
    }
    return null;
  }

  setFloat(key, value) {
    return localStorage.setItem(key, value);
  }

  getFloat(key) {
    const number = localStorage.getItem(key);
    if (number) {
      return parseFloat(number, 10);
    }
    return null;
  }

  setBoolean(key, value) {
    return localStorage.setItem(key, value === true);
  }

  getBoolean(key) {
    const bool = localStorage.getItem(key);
    if (bool == "true") {
      return true;
    }
    if (bool == "false") {
      return false;
    }
    return null;
  }

  setJSON(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  getJSON(key) {
    const string = localStorage.getItem(key);
    if (string) {
      return JSON.parse(string);
    }
    return null;
  }

  setAuthToken(value) {
    return this.setString(AUTH_TOKEN, value);
  }

  getAuthToken() {
    return this.getString(AUTH_TOKEN);
  }

  setTenantToken(value) {
    return this.setString(TENANT_TOKEN, value);
  }

  getTenantToken() {
    return this.getString(TENANT_TOKEN);
  }

  getAuthAndTenantTokens() {
    return {
      authToken: this.getAuthToken(),
      tenantToken: this.tenantAuthToken(),
    };
  }

  setAuthAndTenantTokens({ authToken, tenantToken }) {
    this.setAuthToken(authToken);
    this.setTenantToken(tenantToken);
  }

  clear() {
    localStorage.clear();
  }
}

export default new LocalStorageService();
