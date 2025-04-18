import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRakeIcon],svg[token-branded-rake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#12CF9C" d="m7.579 4.159l2.734 10.935L21 11.966V12A9 9 0 1 1 7.579 4.159"></svg:path><svg:path fill="#133932" d="m9.976 3.226l2.306 8.213l8.302-2.143a9 9 0 0 0-.94-2.042L13.97 8.907l-1.535-5.895a9 9 0 0 0-2.458.22z"></svg:path></svg:g>`,
})
export class TokenBrandedRakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
