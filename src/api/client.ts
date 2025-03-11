import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';

export interface ApiResponse {
    success: boolean;
    data: { [key: string]: any } | null;
    error: string | null;
    headers?: Record<string, string>;
}

const createApiClient = (baseURL: string): AxiosInstance => {
    const apiClient: AxiosInstance = axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
            'x-bodytech-organization': localStorage.getItem('organization_id'),
            'x-bodytech-company': localStorage.getItem('company_id'),
            'x-bodytech-brand': localStorage.getItem('brand_id') || 1,
        },
    });

    apiClient.interceptors.response.use(
        (response: AxiosResponse): any => {
            return {
                success: true,
                data: response.data as Record<string, any>,
                error: null,
                headers: response.headers,
            };
        },
        (error: AxiosError): ApiResponse => {
            let errorMessage = 'Error de red';
            if (error.response)
                errorMessage = (error.response.data as any)?.message || error.message;
            else if (error.request)
                errorMessage = 'No se recibió respuesta del servidor';
            return {
                success: false,
                data: null,
                error: errorMessage,
            };
        }
    );
    return apiClient;
}

export default createApiClient;
