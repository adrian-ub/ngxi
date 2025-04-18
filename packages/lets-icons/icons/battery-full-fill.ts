import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBatteryFullFillIcon],svg[lets-icons-battery-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9c0-1.886 0-2.828.586-3.414S8.114 5 10 5h4c1.886 0 2.828 0 3.414.586S18 7.114 18 9v10c0 1.886 0 2.828-.586 3.414S15.886 23 14 23h-4c-1.886 0-2.828 0-3.414-.586S6 20.886 6 19zm3-6c0-.943 0-1.414.293-1.707S10.057 1 11 1h2c.943 0 1.414 0 1.707.293S15 2.057 15 3v1H9z"></svg:path>`,
})
export class LetsIconsBatteryFullFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
