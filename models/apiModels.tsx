export interface ApiUsers {
    page: number
    per_page: number
    toatal: number
    total_pages: number
    data: ApiUser[]
}

export interface ApiUser {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}