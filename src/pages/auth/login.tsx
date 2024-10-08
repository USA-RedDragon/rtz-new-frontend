import { getGoogleAuthUrl, getGitHubAuthUrl, getCustomAuthUrl, GITHUB_OAUTH_ENABLED, GOOGLE_OAUTH_ENABLED, CUSTOM_OAUTH_ENABLED, CUSTOM_OAUTH_NAME } from '~/api/auth'
import { setAccessToken } from '~/api/auth/client'

import Button from '~/components/material/Button'

export default function Login() {
  const loginAsDemoUser = function () {
    setAccessToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDg1ODI0NjUsIm5iZiI6MTcxNzA0NjQ2NSwiaWF0IjoxNzE3MDQ2NDY1LCJpZGVudGl0eSI6IjBkZWNkZGNmZGYyNDFhNjAifQ.g3khyJgOkNvZny6Vh579cuQj1HLLGSDeauZbfZri9jw')
    window.location.href = window.location.origin
  }

  return (
    <div class="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div class="flex max-w-sm flex-col items-center gap-8">
        <img
          src="/images/logo-rtz-light.svg"
          alt="RTZ"
          width={96}
          height={96}
        />

        <div class="flex flex-col items-center gap-2">
          <h1 class="text-display-sm font-extrabold md:mt-4">RTZ</h1>
          <p class="text-body-lg">Manage your openpilot experience.</p>
        </div>

        <div class="flex flex-col items-stretch gap-4 self-stretch">
          { GOOGLE_OAUTH_ENABLED && <Button
            class="h-16 gap-4"
            href={getGoogleAuthUrl()}
            leading={
              <img
                src="/images/logo-google.svg"
                alt=""
                width={32}
                height={32}
              />
            }
          >
            Sign in with Google
          </Button>
          }
          { GITHUB_OAUTH_ENABLED && <Button
            class="h-16 gap-4"
            href={getGitHubAuthUrl()}
            leading={
              <img
                src="/images/logo-github.svg"
                alt=""
                width={32}
                height={32}
              />
            }
          >
            Sign in with GitHub
          </Button>
          }
          { CUSTOM_OAUTH_ENABLED && <Button
            class="h-16 gap-4"
            href={getCustomAuthUrl()}
          >
            Sign in with {CUSTOM_OAUTH_NAME}
          </Button>
          }
        </div>

        <div class="flex justify-between gap-4">
          <p class="text-body-lg">
            Make sure to sign in with the same account if you have previously
            paired your comma three.
          </p>

          <img
            src="/images/icon-rtz-comma-three-light.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>

        <Button
          class="gap-4"
          onclick={loginAsDemoUser}
          trailing={
            <span class="material-symbols-outlined icon-outline">
              chevron_right
            </span>
          }
        >
          Try the demo
        </Button>
      </div>
    </div>
  )
}
