import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsChargeBatteryIcon],svg[flat-color-icons-charge-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#8BC34A"><svg:path d="M34 44H14c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v34c0 1.1-.9 2-2 2"></svg:path><svg:path d="M28 13h-8c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1"></svg:path></svg:g><svg:path fill="#FFEB3B" d="M30 24h-5.5l2.2-11L18 26h5.5l-2.2 11z"></svg:path>`,
})
export class FlatColorIconsChargeBatteryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
