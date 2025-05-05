import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconDevicesIcon],svg[picon-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5h1V0h6v2H6V1H2v4h1v1H0m4-3h4v5H4m1-1h2V4H5"></svg:path>`,
})
export class PiconDevicesIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
