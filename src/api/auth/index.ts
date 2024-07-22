import { BASE_URL } from '../config'
import { getService } from './config'

function stringify(obj: Record<string, string>): string {
  return new URLSearchParams(obj).toString()
}

export const GOOGLE_OAUTH_ENABLED = false

const GOOGLE_OAUTH_PARAMS = {
  type: 'web_server',
  client_id:
    '45471411055-ornt4svd2miog6dnopve7qtmh5mnu6id.apps.googleusercontent.com',
  redirect_uri: `${BASE_URL}/v2/auth/g/redirect/`,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.email',
  prompt: 'select_account',
}
export function getGoogleAuthUrl(): string {
  const params = {
    ...GOOGLE_OAUTH_PARAMS,
    state: 'service,' + getService(),
  }
  return 'https://accounts.google.com/o/oauth2/auth?' + stringify(params)
}

export const GITHUB_OAUTH_ENABLED = false

const GITHUB_OAUTH_PARAMS = {
  client_id: '28c4ecb54bb7272cb5a4',
  redirect_uri: `${BASE_URL}/v2/auth/h/redirect/`,
  scope: 'read:user',
}
export function getGitHubAuthUrl(): string {
  const params = {
    ...GITHUB_OAUTH_PARAMS,
    state: 'service,' + getService(),
  }
  return 'https://github.com/login/oauth/authorize?' + stringify(params)
}

export const CUSTOM_OAUTH_ENABLED = true
export const CUSTOM_OAUTH_NAME= 'Authentik'

const CUSTOM_OAUTH_PARAMS = {
  client_id: 'ZYml3VDAwur3Y75MLvYy5rXO5dUrUIR6UlKOMdGh',
  redirect_uri: `${BASE_URL}/v2/auth/c/redirect/`,
  scope: 'user:email',
  response_type: 'code',
}

export function getCustomAuthUrl(): string {
  const params = {
    ...CUSTOM_OAUTH_PARAMS,
    state: 'service,' + getService(),
  }
  return 'https://authentik.mcswain.dev/login/oauth/authorize?' + stringify(params)
}
