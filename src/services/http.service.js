import axios from "axios";
import { API_URL } from "../constants";
import localStorageService from "./localStorage.service";

class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
    });
  }

  async get(url, queryParams) {
    const { data } = await this.client.get(url, {
      params: queryParams,
    });
    return data;
  }

  async post(url, payload, queryParams) {
    const { data } = await this.client.post(url, payload, {
      params: queryParams,
    });
    return data;
  }

  async authGet(url, queryParams) {
    const authToken = localStorageService.getAuthToken();
    const { data } = await this.client.get(url, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    return data;
  }

  async authPost(url, payload, queryParams) {
    const authToken = localStorageService.getAuthToken();
    const headers = {
      authorization: `Bearer ${authToken}`,
    };
    if (payload && payload instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data";
    }
    const { data } = await this.client.post(url, payload, {
      params: queryParams,
      headers,
    });
    return data;
  }

  async authPatch(url, payload, queryParams) {
    const authToken = localStorageService.getAuthToken();
    const headers = {
      authorization: `Bearer ${authToken}`,
    };
    if (payload && payload instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data";
    }
    const { data } = await this.client.patch(url, payload, {
      params: queryParams,
      headers,
    });
    return data;
  }

  async authPut(url, payload, queryParams) {
    const authToken = localStorageService.getAuthToken();
    const headers = {
      authorization: `Bearer ${authToken}`,
    };
    if (payload && payload instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data";
    }
    const { data } = await this.client.put(url, payload, {
      params: queryParams,
      headers,
    });
    return data;
  }

  async authDelete(url, queryParams) {
    const authToken = localStorageService.getAuthToken();
    const { data } = await this.client.delete(url, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    return data;
  }

  /**
   * The following methods are only required if tenant is a thing
   */
  async tenantGet(url, queryParams) {
    const { authToken, tenantToken } =
      localStorageService.getAuthAndTenantToken();
    const { data } = await this.client.get(url, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-{{ input.tenantSettings.names.dashCase }}-id": tenantToken,
      },
    });
    return data;
  }

  async tenantPost(url, payload, queryParams) {
    const { authToken, tenantToken } =
      localStorageService.getAuthAndTenantToken();
    const { data } = await this.client.post(url, payload, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-{{ input.tenantSettings.names.dashCase }}-id": tenantToken,
      },
    });
    return data;
  }

  async tenantPatch(url, payload, queryParams) {
    const { authToken, tenantToken } =
      localStorageService.getAuthAndTenantToken();
    const { data } = await this.client.patch(url, payload, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-{{ input.tenantSettings.names.dashCase }}-id": tenantToken,
      },
    });
    return data;
  }

  async tenantPut(url, payload, queryParams) {
    const { authToken, tenantToken } =
      localStorageService.getAuthAndTenantToken();
    const { data } = await this.client.put(url, payload, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-{{ input.tenantSettings.names.dashCase }}-id": tenantToken,
      },
    });
    return data;
  }

  async tenantDelete(url, queryParams) {
    const { authToken, tenantToken } =
      localStorageService.getAuthAndTenantToken();
    const { data } = await this.client.delete(url, {
      params: queryParams,
      headers: {
        authorization: `Bearer ${authToken}`,
        "x-{{ input.tenantSettings.names.dashCase }}-id": tenantToken,
      },
    });
    return data;
  }
}

export default new HttpService();
