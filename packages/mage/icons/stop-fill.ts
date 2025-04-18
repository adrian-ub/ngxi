import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageStopFillIcon],svg[mage-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 6.75v10.5a2.51 2.51 0 0 1-2.5 2.5H6.75a2.51 2.51 0 0 1-2.5-2.5V6.75a2.5 2.5 0 0 1 2.5-2.5h10.5a2.5 2.5 0 0 1 2.5 2.5"></svg:path>`,
})
export class MageStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
