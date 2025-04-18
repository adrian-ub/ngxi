import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrangeIcon],svg[carbon-arrange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 29H2v-2h28zm-3-10H5v2h22zm-3-8H8v2h16zm-3-8H11v2h10z"></svg:path>`,
})
export class CarbonArrangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
