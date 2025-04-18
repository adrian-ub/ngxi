import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMagnetometerIcon],svg[arcticons-magnetometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.892 10.703l-11.88 11.879a7.358 7.358 0 0 0 10.406 10.405l11.88-11.879l5.202 5.203L30.62 38.19A14.716 14.716 0 0 1 9.81 17.38L21.69 5.5Zm-9.236-1.17l5.203 5.203m10.405 10.405l5.203 5.203"></svg:path>`,
})
export class ArcticonsMagnetometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
