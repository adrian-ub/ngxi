import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundSecurityUpdateGoodIcon],svg[ic-round-security-update-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 18H7V6h10zm-6.66-3.71c.39.39 1.02.39 1.41 0l3.54-3.54a.996.996 0 1 0-1.41-1.41l-2.83 2.83l-.71-.71a.996.996 0 1 0-1.41 1.41z"></svg:path>`,
})
export class IcRoundSecurityUpdateGoodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
