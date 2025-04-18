import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageAlignCenterIcon],svg[mage-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.286 12h11.428m-8 5.714h4.572M4 6.286h16"></svg:path>`,
})
export class MageAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
