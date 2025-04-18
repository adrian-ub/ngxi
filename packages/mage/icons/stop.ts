import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStopIcon],svg[mage-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 5H6.75A1.75 1.75 0 0 0 5 6.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 19 17.25V6.75A1.75 1.75 0 0 0 17.25 5"></svg:path>`,
})
export class MageStopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
