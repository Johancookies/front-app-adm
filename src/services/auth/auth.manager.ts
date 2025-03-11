
import { ApiResponse } from "../../api/client";
import { AuthApiClient } from "../../api/services";
import { AuthRequest } from "./auth.types";

class AuthManager {
    async getToken(payload: AuthRequest): Promise<ApiResponse> {
        return AuthApiClient.post('/oauth/getTokenMyBodyTechAction', payload);
    }
}

export const authManager = new AuthManager();