import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBatteryEmptyIcon],svg[oi-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.09 1C.03 1 0 1.04 0 1.09V6.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V4.99h1v-2h-1V1.08c0-.06-.04-.09-.09-.09H.09zM1 2h5v4H1z"></svg:path>`,
})
export class OiBatteryEmptyIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
