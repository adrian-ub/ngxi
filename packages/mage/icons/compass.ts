import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCompassIcon],svg[mage-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="m7.778 16.222l1.942-5.837a1.06 1.06 0 0 1 .675-.665l5.827-1.942l-1.942 5.837a1.06 1.06 0 0 1-.665.665z"></svg:path></svg:g>`,
})
export class MageCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
