import type { AppInfo } from '@/types/app'
export const APP_ID = '92e09879-a2a4-4b95-bedc-2991b6217f59'
export const API_KEY = 'app-boFTv4c8P6dfnFK7i4LF6g0C'
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: 'Text Generator APP',
  description: 'App description',
  copyright: '',
  privacy_policy: '',
  default_language: 'zh-Hans',
}

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
