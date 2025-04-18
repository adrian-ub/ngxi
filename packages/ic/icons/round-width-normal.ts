import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundWidthNormalIcon],svg[ic-round-width-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M4 6h4v12H4zm16 12h-4V6h4z"></svg:path>`,
})
export class IcRoundWidthNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
