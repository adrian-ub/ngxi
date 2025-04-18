import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBatteryEmptyIcon],svg[fa6-solid-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 160c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h384c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16zM0 176c0-44.2 35.8-80 80-80h384c44.2 0 80 35.8 80 80v16c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32v16c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80z"></svg:path>`,
})
export class Fa6SolidBatteryEmptyIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
