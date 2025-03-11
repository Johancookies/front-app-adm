export interface ProfileData {
    id: number;
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: number;
    photo: string;
    created_at: string;
    document_number: number;
    role_id: number;
    role_name: string;
    is_medical: boolean;
    is_virtual: boolean;
    set_manual_discount: boolean;
    reassign_deals: number;
    load_deals: number;
    has_condonation_issues: number;
    venues: Venue[];
    ranking: number;
}

interface Venue {
    id: number;
    name: string;
    is_main: number;
    city_id: number;
    city_name: string;
    country_id: number;
    country_name: string;
    category_id: number;
}