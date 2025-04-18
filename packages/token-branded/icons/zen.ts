import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedZenIcon],svg[token-branded-zen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedZen0)" d="m19.323 6.754l-1.472 2.28a6.562 6.562 0 0 1-4.796 9.432a6.54 6.54 0 0 1-3.987-.618l-2.287 1.47A8.986 8.986 0 0 0 20.97 12.73a9.03 9.03 0 0 0-1.647-5.98h.006z"></svg:path><svg:path fill="url(#tokenBrandedZen1)" d="M12.012 16.51a4.52 4.52 0 0 0 4.447-3.706a10.3 10.3 0 0 0-8.196 1.704a4.53 4.53 0 0 0 3.749 2.001"></svg:path><svg:path fill="#fff" d="M14.24 11.75q1.16.001 2.293.25a4.524 4.524 0 0 0-7.93-2.979a4.5 4.5 0 0 0-1.07 3.587c-.625.46-1.193.99-1.694 1.582a6.56 6.56 0 0 1 5.331-8.67a6.53 6.53 0 0 1 3.77.636l2.276-1.477A8.985 8.985 0 0 0 3.022 11.37a9 9 0 0 0 1.742 5.986c.425-.767.94-1.48 1.535-2.122q.737-.762 1.588-1.392a10.75 10.75 0 0 1 6.359-2.09z"></svg:path><svg:defs><svg:radialgradient id="tokenBrandedZen0" cx="0" cy="0" r="1" gradientTransform="matrix(19.1627 0 0 19.1429 18.884 2.994)" gradientUnits="userSpaceOnUse"><svg:stop offset=".1" stop-color="#26DB8D"></svg:stop><svg:stop offset=".26" stop-color="#23D29A"></svg:stop><svg:stop offset=".56" stop-color="#1ABBBB"></svg:stop><svg:stop offset=".89" stop-color="#0E9DE5"></svg:stop></svg:radialgradient><svg:radialgradient id="tokenBrandedZen1" cx="0" cy="0" r="1" gradientTransform="matrix(33.2458 0 0 69.2569 27.301 -23.622)" gradientUnits="userSpaceOnUse"><svg:stop offset=".26" stop-color="#23D29A"></svg:stop><svg:stop offset=".56" stop-color="#1ABBBB"></svg:stop><svg:stop offset=".89" stop-color="#0E9DE5"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class TokenBrandedZenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
