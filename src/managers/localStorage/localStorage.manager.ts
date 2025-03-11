import { ApiResponse } from "../../api/client";

class LocalStorageManager {

    storeAppData(data: ApiResponse["data"], headers: ApiResponse["headers"]) {
        if (!data || !headers) return;
        localStorage.setItem("access_token", data?.access_token);
        localStorage.setItem("refresh_token", data?.refresh_token);
        localStorage.setItem("organization_id", headers["x-bodytech-organization"]);
        localStorage.setItem("brand_id", JSON.parse(headers["x-bodytech-brand"])[0].brand_id);
        localStorage.setItem("company_id", JSON.parse(headers["x-bodytech-brand"])[0].uuid_company);
    }

    clearStorage() {
        localStorage.clear();
    }

}

export const localStorageManager = new LocalStorageManager();