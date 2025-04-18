import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBatteryChargeLineIcon],svg[ri-battery-charge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4zm4.375 0l1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM21 9h2v6h-2zm-9 2h3l-5 8v-6H7l5-8z"></svg:path>`,
})
export class RiBatteryChargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
