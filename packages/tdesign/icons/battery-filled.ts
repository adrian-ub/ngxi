import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBatteryFilledIcon],svg[tdesign-battery-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h21v14H0zm24 4v6h-2V9z"></svg:path>`,
})
export class TdesignBatteryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
