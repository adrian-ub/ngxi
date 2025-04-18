import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidBatteryHalfIcon],svg[fa6-solid-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 160c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80zm208 96H96v128h192z"></svg:path>`,
})
export class Fa6SolidBatteryHalfIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
