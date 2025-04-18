import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEnkryptIcon],svg[token-branded-enkrypt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C54AFF" fill-rule="evenodd" d="M3 6.464A3.464 3.464 0 0 1 6.464 3H21v2.658a2.49 2.49 0 0 1-2.49 2.49h-6.834a3.464 3.464 0 0 0-3.464 3.463v.881a3.464 3.464 0 0 0 3.464 3.464h6.834a2.49 2.49 0 0 1 2.49 2.49V21H6.464A3.464 3.464 0 0 1 3 17.536zm8.826 3.132h7.01c1.195 0 2.164.97 2.164 2.165v.582c0 1.196-.97 2.165-2.165 2.165h-7.01a2.165 2.165 0 0 1-2.164-2.165v-.582c0-1.196.969-2.165 2.165-2.165" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedEnkryptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
