import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedX2y2Icon],svg[token-branded-x2y2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedX2y20)" d="M19.426 6.924a7.72 7.72 0 0 0-5.456-2.233c-4.196 0-7.593 3.273-7.593 7.312s3.397 7.311 7.593 7.311a7.7 7.7 0 0 0 5.456-2.232A8.998 8.998 0 0 1 3 12a8.999 8.999 0 0 1 16.426-5.082z"></svg:path><svg:path fill="url(#tokenBrandedX2y21)" d="M13.97 18.752c3.88 0 7.03-3.02 7.03-6.75s-3.15-6.75-7.03-6.75c-1.817 0-3.47.665-4.72 1.744c.861-.45 1.846-.618 2.892-.618c3.374 0 6.046 2.328 6.046 5.624s-2.666 6.232-6.046 6.232q-.574 0-1.114-.101c.894.393 1.89.619 2.942.619"></svg:path><svg:path fill="url(#tokenBrandedX2y22)" fill-rule="evenodd" d="M12.283 17.627a5.343 5.343 0 1 0 0-10.686a5.343 5.343 0 0 0 0 10.686m0-1.687a3.656 3.656 0 1 0 0-7.312a3.656 3.656 0 0 0 0 7.312" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedX2y20" x1="3.003" x2="22.727" y1="12.565" y2="12.565" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02DFFC"></svg:stop><svg:stop offset="1" stop-color="#5831C9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedX2y21" x1="-6.574" x2="21" y1="12.749" y2="12.749" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02DFFC"></svg:stop><svg:stop offset="1" stop-color="#5831C9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedX2y22" x1="3.003" x2="21.001" y1="12.565" y2="12.565" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#02DFFC"></svg:stop><svg:stop offset="1" stop-color="#5831C9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedX2y2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
