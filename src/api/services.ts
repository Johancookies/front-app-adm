import createApiClient from "./client";
import { API_MYBT_URL, OAUTH_URL } from "./exports";

export const AuthApiClient = createApiClient(OAUTH_URL);
export const PublicApiClient = createApiClient(API_MYBT_URL);