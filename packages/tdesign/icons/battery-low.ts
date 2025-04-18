import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryLowIcon],svg[tdesign-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h21v14H0zm2 2v10h17V7zm4 2v6H4V9zm18 0v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
