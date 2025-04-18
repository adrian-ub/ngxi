import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolxIcon],svg[token-branded-polx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#86E7F7" d="M4.534 11.25L3 17.75l4.678-3.079H17.5a3.5 3.5 0 0 0 3.499-3.42zm.353-1.5H21v-.5a3 3 0 0 0-3-3H5.728v.059l-.015-.059z"></svg:path><svg:path fill="#457CD6" d="M4.543 11.25L3 17.75l4.587-3H17.5a3.5 3.5 0 0 0 3.499-3.5z"></svg:path></svg:g>`,
})
export class TokenBrandedPolxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
