import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3090
export const DB_PORT = process.env.DB_PORT || 59373
export const DB_HOST = process.env.DB_HOST || ""
export const DB_USER = process.env.DB_USER || "root"
export const DB_PASSWORD = process.env.DB_PASSWORD || ""
export const DB_DATABASES = process.env.DB_DATABASES || "railway"
