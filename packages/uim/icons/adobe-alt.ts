import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimAdobeAltIcon],svg[uim-adobe-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.483 2.959L22 20.809V2.959ZM2 2.959V21.04L9.425 2.96Zm7.069 14.324h2.784l1.748 3.433h2.537l-4.1-10.843Z"></svg:path>`,
})
export class UimAdobeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
