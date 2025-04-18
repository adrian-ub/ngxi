import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedReqIcon],svg[token-branded-req-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#69E2A5" d="M6.211 3A2.37 2.37 0 0 0 3.84 5.371V18.9a2.1 2.1 0 1 0 4.2 0V6.6h8.4l3.6-3.6z"></svg:path><svg:path fill="#3D8A65" d="M20.04 8.304v-5.29l-9.094 8.977a1.65 1.65 0 0 0-.014 2.337l5.958 6.031a1.91 1.91 0 1 0 2.721-2.68l-4.102-4.177a.493.493 0 0 1 .003-.695z"></svg:path></svg:g>`,
})
export class TokenBrandedReqIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
