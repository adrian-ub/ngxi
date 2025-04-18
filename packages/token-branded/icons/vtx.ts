import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVtxIcon],svg[token-branded-vtx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6869E6" d="m3 4.324l9 15.353l9-15.353zm15.374 0L12 15.245L6.886 6.442h4.987L10.65 8.596l1.334 2.234l3.812-6.506z"></svg:path>`,
})
export class TokenBrandedVtxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
