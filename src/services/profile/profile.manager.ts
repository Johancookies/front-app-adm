
import { ApiResponse } from "../../api/client";
import { PublicApiClient } from "../../api/services";

class ProfileManager {
    async getProfile(): Promise<ApiResponse> {
        return PublicApiClient.post('/authentication/profile');
    }
}

export const profileManager = new ProfileManager();