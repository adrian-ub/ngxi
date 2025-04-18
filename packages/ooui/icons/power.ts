import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPowerIcon],svg[ooui-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1H9v10h2zm4.835 2.165C17.765 4.815 19 7.26 19 10a9 9 0 1 1-18 0c0-2.74 1.235-5.185 3.165-6.835L5.58 4.58A6.99 6.99 0 0 0 3 10c0 3.865 3.135 7 7 7s7-3.135 7-7a6.99 6.99 0 0 0-2.58-5.42z"></svg:path>`,
})
export class OouiPowerIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
